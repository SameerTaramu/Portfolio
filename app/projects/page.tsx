import ProjectCard from "@/components/projectcard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="text-sm text-muted-foreground">Projects</p>

        <h1 className="mt-2 text-4xl font-bold">
          My Projects
        </h1>

        <p className="mt-4 text-muted-foreground">
          Here are some of the projects I have built.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  );
}