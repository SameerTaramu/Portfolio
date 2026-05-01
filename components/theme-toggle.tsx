"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
    className="cursor-pointer"
      variant="outline"
      size="icon"
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
    >
      <Sun className="h-[1.2rem] w-[1.2rem] dark:hidden" />

      <Moon className="hidden h-[1.2rem] w-[1.2rem] dark:block" />
    </Button>
  );
}