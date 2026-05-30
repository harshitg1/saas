"use server";

import { compare, hash } from "bcryptjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { eq } from "drizzle-orm";
import { authOptions } from "@/auth";
import { db } from "@/lib/db";
import { adminUsers, leadActivities, leads } from "@/lib/db/schema";
import {
  createActivitySchema,
  updateLeadSchema,
  type leadActivityTypeValues,
} from "@/lib/validation/leads";

async function requireAdmin() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  return session.user;
}

export async function updateLeadAction(leadId: string, formData: FormData) {
  const user = await requireAdmin();
  const rawFollowUp = formData.get("nextFollowUpAt")?.toString().trim();
  const nextFollowUpAt = rawFollowUp
    ? new Date(rawFollowUp).toISOString()
    : null;

  const parsed = updateLeadSchema.parse({
    status: formData.get("status")?.toString() || undefined,
    priority: formData.get("priority")?.toString() || undefined,
    assignedToId: formData.get("assignedToId")?.toString() || null,
    nextFollowUpAt,
  });

  const [currentLead] = await db
    .select()
    .from(leads)
    .where(eq(leads.id, leadId))
    .limit(1);

  if (!currentLead) {
    throw new Error("Lead not found");
  }

  await db.transaction(async (tx) => {
    await tx
      .update(leads)
      .set({
        ...parsed,
        nextFollowUpAt: parsed.nextFollowUpAt
          ? new Date(parsed.nextFollowUpAt)
          : null,
        updatedAt: new Date(),
      })
      .where(eq(leads.id, leadId));

    await tx.insert(leadActivities).values({
      leadId,
      adminUserId: user.id,
      type: parsed.status === "closed" ? "close" : "status_change",
      content: "Lead details updated",
      metadata: parsed,
    });
  });

  revalidatePath("/admin/leads");
  revalidatePath(`/admin/leads/${leadId}`);
}

export async function addLeadActivityAction(leadId: string, formData: FormData) {
  const user = await requireAdmin();
  const parsed = createActivitySchema.parse({
    type: formData.get("type")?.toString(),
    content: formData.get("content")?.toString(),
  });

  await db.insert(leadActivities).values({
    leadId,
    adminUserId: user.id,
    type: parsed.type as (typeof leadActivityTypeValues)[number],
    content: parsed.content,
  });

  await db
    .update(leads)
    .set({ updatedAt: new Date() })
    .where(eq(leads.id, leadId));

  revalidatePath("/admin/leads");
  revalidatePath(`/admin/leads/${leadId}`);
}

export async function updateAdminPasswordAction(formData: FormData) {
  const user = await requireAdmin();
  const currentPassword = formData.get("currentPassword")?.toString() || "";
  const newPassword = formData.get("newPassword")?.toString() || "";
  const confirmPassword = formData.get("confirmPassword")?.toString() || "";

  if (!currentPassword || !newPassword || !confirmPassword) {
    redirect("/admin/profile?error=missing");
  }

  if (newPassword.length < 8) {
    redirect("/admin/profile?error=short");
  }

  if (newPassword !== confirmPassword) {
    redirect("/admin/profile?error=mismatch");
  }

  const [admin] = await db
    .select()
    .from(adminUsers)
    .where(eq(adminUsers.id, user.id))
    .limit(1);

  if (!admin) {
    redirect("/admin/profile?error=session");
  }

  const isCurrentPasswordValid = await compare(
    currentPassword,
    admin.passwordHash,
  );

  if (!isCurrentPasswordValid) {
    redirect("/admin/profile?error=current");
  }

  const passwordHash = await hash(newPassword, 12);

  await db
    .update(adminUsers)
    .set({
      passwordHash,
      updatedAt: new Date(),
    })
    .where(eq(adminUsers.id, user.id));

  revalidatePath("/admin/profile");
  redirect("/admin/profile?success=password");
}
