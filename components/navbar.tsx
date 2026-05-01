"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/projects/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded"
          />

          <span className="font-bold text-lg">Sameer</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link href="/contact" className="hidden md:block">
            <Button size="sm">Hire Me</Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <SheetTitle className="mb-6">Menu</SheetTitle>

              <div className="mt-6 flex flex-col gap-6">
                <Link href="/about">About</Link>

                <Link href="/projects">Projects</Link>

                <Link href="/contact">Contact</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
