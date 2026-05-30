"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type LogoutConfirmButtonProps = {
  compact?: boolean;
};

export default function LogoutConfirmButton({
  compact = false,
}: LogoutConfirmButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          className={
            compact
              ? "h-10 shrink-0 border border-slate-200 bg-white px-3 text-slate-700 hover:bg-slate-50"
              : "w-full justify-start"
          }
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Logout from CRM?</DialogTitle>
          <DialogDescription>
            You will need to sign in again to view leads and CRM activity.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="button"
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
          >
            Yes, logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
