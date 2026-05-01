import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetails({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      <div>
        <h1 className="text-4xl font-bold">{project.title}</h1>

        <p className="mt-4 max-w-3xl text-muted-foreground">
          {project.longDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <Image
        src={project.image}
        alt={project.title}
        width={1000}
        height={600}
        className="mt-10 rounded-xl border object-cover"
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold">Features</h2>

        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="rounded-lg border p-4 text-sm text-muted-foreground"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}