"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Props = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
};

export default function ProjectCard({
  slug,
  title,
  description,
  tech,
  image,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <Link href={`/projects/${slug}`}>
        <Card className="overflow-hidden transition hover:shadow-lg">
          
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="h-48 w-full object-cover"
          />

          <CardContent className="p-6">
            <h3 className="text-lg font-semibold">
              {title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {tech.map((item) => (
                <Badge key={item}>
                  {item}
                </Badge>
              ))}
            </div>
          </CardContent>

        </Card>
      </Link>
    </motion.div>
  );
}