"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  BarChart3,
  LayoutDashboard,
  UserRound,
  UsersRound,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LogoutConfirmButton from "./logout-confirm-button";

type AdminShellProps = {
  active: "dashboard" | "leads" | "profile";
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
};

const navItems = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
    active: "dashboard",
  },
  {
    label: "Leads",
    href: "/admin/leads",
    icon: UsersRound,
    active: "leads",
  },
  {
    label: "Profile",
    href: "/admin/profile",
    icon: UserRound,
    active: "profile",
  },
] as const;

export default function AdminShell({
  active,
  title,
  eyebrow = "Legacy85 CRM",
  children,
}: AdminShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="flex min-h-screen">
        <aside className="hidden w-56 shrink-0 border-r border-slate-200 bg-white lg:block">
          <div className="flex h-full flex-col">
            <div className="border-b border-slate-200 px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white shadow-sm">
                  <Image
                    src="/logo.png"
                    alt="Legacy85"
                    width={34}
                    height={34}
                    className="h-8 w-8 object-contain"
                    priority
                  />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-950">
                    Legacy85
                  </p>
                  <p className="text-xs font-medium text-slate-500">
                    Lead CRM
                  </p>
                </div>
              </div>
            </div>

            <nav className="flex-1 space-y-1 px-2.5 py-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.active;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex h-10 items-center gap-3 rounded-md px-3 text-sm font-bold transition ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-slate-200 p-2.5">
              <LogoutConfirmButton />
            </div>
          </div>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur lg:px-8">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                  {eyebrow}
                </p>
                <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950">
                  {title}
                </h1>
              </div>
              <div className="flex items-center gap-3 lg:gap-2">
                {/* Mobile Navigation Drawer */}
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="md:hidden"
                    >
                      <Menu className="h-4 w-4" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-56 p-0">
                    <div className="flex h-full flex-col">
                      <div className="border-b border-slate-200 px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white shadow-sm">
                            <Image
                              src="/logo.png"
                              alt="Legacy85"
                              width={34}
                              height={34}
                              className="h-8 w-8 object-contain"
                              priority
                            />
                          </div>
                          <div>
                            <p className="text-sm font-extrabold text-slate-950">
                              Legacy85
                            </p>
                            <p className="text-xs font-medium text-slate-500">
                              Lead CRM
                            </p>
                          </div>
                        </div>
                      </div>

                      <nav className="flex-1 space-y-1 px-2.5 py-4">
                        {navItems.map((item) => {
                          const Icon = item.icon;
                          const isActive = active === item.active;

                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex h-10 items-center gap-3 rounded-md px-3 text-sm font-bold transition ${
                                isActive
                                  ? "bg-primary/10 text-primary"
                                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                              }`}
                            >
                              <Icon className="h-4 w-4" />
                              {item.label}
                            </Link>
                          );
                        })}
                      </nav>

                      <div className="border-t border-slate-200 p-2.5">
                        <LogoutConfirmButton />
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>

                <div className="hidden items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-600 lg:flex">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  Sales Workspace
                </div>
              </div>
            </div>
          </header>

          <div className="px-4 py-6 lg:px-8">{children}</div>
        </section>
      </div>
    </main>
  );
}
