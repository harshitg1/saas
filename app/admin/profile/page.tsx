import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { LockKeyhole, Mail, ShieldCheck, UserRound } from "lucide-react";
import AdminShell from "../admin-shell";
import { updateAdminPasswordAction } from "../actions";
import { authOptions } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { db } from "@/lib/db";
import { adminUsers } from "@/lib/db/schema";

export const dynamic = "force-dynamic";

type ProfilePageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function paramValue(
  params: Record<string, string | string[] | undefined>,
  key: string,
) {
  const value = params[key];
  return Array.isArray(value) ? value[0] : value;
}

const errorMessages: Record<string, string> = {
  missing: "Please fill all password fields.",
  short: "New password must be at least 8 characters.",
  mismatch: "New password and confirmation do not match.",
  current: "Current password is incorrect.",
  session: "Your admin account could not be found. Please log in again.",
};

export default async function AdminProfilePage({
  searchParams,
}: ProfilePageProps) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/admin/login");
  }

  const [admin] = await db
    .select()
    .from(adminUsers)
    .where(eq(adminUsers.id, session.user.id))
    .limit(1);

  if (!admin) {
    redirect("/admin/login");
  }

  const params = searchParams ? await searchParams : {};
  const success = paramValue(params, "success");
  const error = paramValue(params, "error");

  return (
    <AdminShell active="profile" title="Profile">
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <Card className="gap-0 rounded-lg border-slate-200 py-0 shadow-sm">
          <CardHeader className="border-b border-slate-100 p-5">
            <CardTitle className="flex items-center gap-2 text-lg font-extrabold">
              <UserRound className="h-5 w-5 text-primary" />
              Admin Details
            </CardTitle>
            <CardDescription>
              Your CRM account identity and access role.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 p-5">
            <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Name
              </p>
              <p className="mt-1 text-base font-extrabold text-slate-950">
                {admin.name}
              </p>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                <Mail className="h-4 w-4" />
                Email
              </p>
              <p className="mt-1 break-all text-base font-extrabold text-slate-950">
                {admin.email}
              </p>
            </div>
            <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                <ShieldCheck className="h-4 w-4" />
                Role
              </p>
              <p className="mt-1 text-base font-extrabold capitalize text-slate-950">
                {admin.role}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="gap-0 rounded-lg border-slate-200 py-0 shadow-sm">
          <CardHeader className="border-b border-slate-100 p-5">
            <CardTitle className="flex items-center gap-2 text-lg font-extrabold">
              <LockKeyhole className="h-5 w-5 text-primary" />
              Update Password
            </CardTitle>
            <CardDescription>
              Enter your current password before setting a new one.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-5">
            {success === "password" && (
              <div className="mb-5 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm font-bold text-green-700">
                Password updated successfully.
              </div>
            )}
            {error && errorMessages[error] && (
              <div className="mb-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
                {errorMessages[error]}
              </div>
            )}

            <form action={updateAdminPasswordAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current password</Label>
                <Input
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="Enter current password"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New password</Label>
                  <Input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    required
                    minLength={8}
                    autoComplete="new-password"
                    placeholder="Minimum 8 characters"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm new password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    minLength={8}
                    autoComplete="new-password"
                    placeholder="Retype new password"
                  />
                </div>
              </div>
              <Button type="submit" className="mt-2">
                Update password
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </AdminShell>
  );
}
