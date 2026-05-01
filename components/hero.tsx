"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 rounded-full border px-4 py-2 text-3xl text-muted-foreground"
      >
        Frontend Developer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl"
      >
        Building clean, modern and responsive web interfaces.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 max-w-2xl text-muted-foreground md:text-lg"
      >
        I create frontend applications using React, Next.js, TypeScript,
        Tailwind CSS, shadcn/ui and modern animation libraries.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        <Link href="/projects">
          <Button className="cursor-pointer hover:bg-green-500">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <a href="/resume.pdf" download>
          <Button variant="outline" className="cursor-pointer">
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </a>

        <Link href="https://github.com/SameerTaramu" target="_blank">
          <Button variant="outline" className="cursor-pointer">
            <FaGithub className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </Link>

        <Link
          href="https://www.linkedin.com/in/sameer-taramu-a62032301/"
          target="_blank"
        >
          <Button variant="outline" className="cursor-pointer">
            <FaLinkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
