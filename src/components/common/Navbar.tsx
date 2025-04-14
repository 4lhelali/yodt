import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import ThemeToggle from "./ThemeToggle";
import getSession from "@/lib/getSession";

const VisuallyHidden = ({ children }: { children: React.ReactNode }) => (
  <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0">
    {children}
  </span>
);

const Navbar = async () => {
  const session = await getSession();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blogPosts", label: "Posts" },
    { href: "/blogEvents", label: "Events" },
    { href: "/contact", label: "Contact" },
    session && session.user.role === "admin"
      ? { href: "/dashboard", label: "Dashboard" }
      : session && session.user.role === "user"
        ? { href: "/", label: "Profile" }
        : { href: "/login", label: "Login" },
  ];

  return (
    <header className="mx-auto max-w-7xl">
      <nav className="flex items-center justify-between p-4">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetHeader>
                <VisuallyHidden>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </VisuallyHidden>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Button
                    key={link.label}
                    className="justify-start hover:text-red-700"
                    variant="link"
                    asChild
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 justify-start md:flex">
          <ul className="flex items-center">
            {navLinks.slice(0, 3).map((link) => (
              <li key={link.label}>
                <Button className="hover:text-red-700" variant="link" asChild>
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo - Centered on desktop, left-aligned after menu on mobile */}
        <div className="flex justify-center md:flex-1">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Right side navigation - hidden on mobile */}
        <div className="hidden flex-1 justify-end md:flex">
          <ul className="flex items-center gap-3">
            <li>
              <ThemeToggle />
            </li>
            {navLinks.slice(3).map((link) => (
              <li key={link.label}>
                <Button className="hover:text-red-700" variant="link" asChild>
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>

        {/* ThemeToggle for mobile - shown only on mobile */}
        <div className="flex flex-1 justify-end md:hidden">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
