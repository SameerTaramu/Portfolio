import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: "Sameer | Frontend Developer",
  description:
    "Frontend Developer portfolio built with Next.js, TypeScript, Tailwind CSS, shadcn/ui and Framer Motion.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors position="top-right" />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}