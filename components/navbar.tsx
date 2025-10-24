"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/public/logo.png";
import clsx from "clsx";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
];

const MOBILE_ITEMS = [
  ...NAV_ITEMS,
  { label: "Pricing", href: "/pricing" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isMobile =
    typeof window !== "undefined" &&
    /Mobi|Android/i.test(window.navigator.userAgent);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto flex h-14 md:h-16 items-center justify-between px-4 md:px-8 lg:px-16 xl:px-40">
          <Link href="/" className=" flex items-center gap-2">
            <Image
              src={logo}
              alt="Legacy-85 Logo"
              width={70}
              height={70}
              className=" h-28 w-28 object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "transition-colors",
                  pathname === href
                    ? "border-b-2 font-medium"
                    : "text-slate-600 dark:text-white hover:text-theme-primary"
                )}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-slate-600 dark:text-white"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="flex h-full w-72 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-0"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 p-4">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <Image
                    src={logo}
                    alt="Legacy-85 Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                    priority
                  />
                  <span className="text-lg font-bold text-slate-600 dark:text-white">
                    Legacy-85
                  </span>
                </Link>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex-1 overflow-auto px-6 py-4">
                {MOBILE_ITEMS.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={clsx(
                      "block py-2 text-lg transition-colors",
                      pathname === href
                        ? "text-theme-primary font-medium"
                        : "text-slate-600 dark:text-white hover:text-theme-primary"
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Footer */}
              <div className="border-t border-slate-200 dark:border-slate-800 p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="w-full border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Log In
                  </Button>
                  <Button className="w-full bg-theme-primary hover:bg-theme-primary-dark text-black">
                    Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
