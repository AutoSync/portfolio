import projects from "@/data/projects.json";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-16 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Link
              href="/"
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              ← Voltar
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mt-4">
              Todos os <span className="text-gradient">Projetos</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
