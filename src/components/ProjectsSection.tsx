import ProjectCard from "./ProjectCard";
import projects from "@/data/projects.json";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos em <span className="text-gradient">Destaque</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Soluções construídas com foco em arquitetura, performance e impacto real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
