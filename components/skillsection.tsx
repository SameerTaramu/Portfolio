"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Redux", icon: SiRedux },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: FaGitAlt },
];

export default function SkillsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">

        <p className="text-3xl text-muted-foreground">
          Skills
        </p>

        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
          Technologies I Work With
        </h2>

      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">

        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-3 rounded-lg border p-6 text-center"
            >

              <Icon className="h-10 w-10" />

              <span className="text-sm font-medium">
                {skill.name}
              </span>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}