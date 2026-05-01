"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Smartphone, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    title: "Frontend Development",
    icon: Code2,
    description: "React, Next.js, TypeScript and modern UI development.",
  },
  {
    title: "Responsive Design",
    icon: Smartphone,
    description: "Mobile-friendly layouts using Tailwind CSS.",
  },
  {
    title: "UI Components",
    icon: Layout,
    description: "Clean interfaces using shadcn/ui and reusable components.",
  },
  {
    title: "Animation",
    icon: Zap,
    description: "Smooth user experience using Framer Motion.",
  },
];

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="text-3xl font-medium text-muted-foreground">About Me</p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          I build frontend experiences that are clean and user-friendly.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          I am a frontend developer focused on building responsive websites
          using React, Next.js, TypeScript, Tailwind CSS and modern tools.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Icon className="mb-4 h-8 w-8" />

                  <h3 className="font-semibold">{skill.title}</h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}