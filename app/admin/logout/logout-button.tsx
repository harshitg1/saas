"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLogoutButton() {
  return (
    <Button
      type="button"
      onClick={() => signOut({ callbackUrl: "/admin/login" })}
      className="mt-6 w-full gap-2"
    >
      <LogOut className="h-4 w-4" />
      Logout
    </Button>
  );
}
