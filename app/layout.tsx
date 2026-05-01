import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sameer | Frontend Developer",
    template: "%s | Sameer",
  },
  description:
    "Frontend Developer portfolio showcasing projects built using Next.js, TypeScript, Tailwind CSS and modern UI tools.",
  keywords: [
    "Sameer",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "TypeScript Developer",
    "Tailwind CSS",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Sameer" }],
  openGraph: {
    title: "Sameer | Frontend Developer",
    description: "Explore my frontend projects and modern web applications.",
    url: "https://sameer-taramu-portfolio.vercel.app",
    siteName: "Sameer Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sameer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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