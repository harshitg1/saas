import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { leadActivities, leads } from "@/lib/db/schema";
import { createLeadSchema } from "@/lib/validation/leads";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = createLeadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid lead payload", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const [lead] = await db.transaction(async (tx) => {
    const [createdLead] = await tx
      .insert(leads)
      .values(parsed.data)
      .returning();

    await tx.insert(leadActivities).values({
      leadId: createdLead.id,
      type: "note",
      content: "Lead submitted from contact form",
      metadata: { source: "contact_form" },
    });

    return [createdLead];
  });

  return NextResponse.json({ leadId: lead.id }, { status: 201 });
}
