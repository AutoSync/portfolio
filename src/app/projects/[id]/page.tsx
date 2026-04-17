import { notFound } from "next/navigation";
import Link from "next/link";
import projects from "@/data/projects.json";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  const details = [
    { label: "Contexto", value: project.contexto },
    { label: "Problema", value: project.problema },
    { label: "Solução", value: project.solucao },
    { label: "Arquitetura", value: project.arquitetura },
    { label: "Resultados", value: project.resultados },
  ];

  return (
    <>
      <Header />
      <main className="pt-28 pb-16 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/projects"
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
          >
            ← Todos os projetos
          </Link>

          {/* Title area */}
          <div className="mt-6 mb-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{project.nome}</h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              {project.descricao}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tecnologias.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="glass rounded-2xl h-64 md:h-80 mb-10 flex items-center justify-center">
            {project.imagem ? (
              <img
                src={project.imagem}
                alt={project.nome}
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <div className="text-center text-[var(--color-text-secondary)]">
                <svg className="w-16 h-16 mx-auto mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                </svg>
                <span className="text-sm">Screenshot do projeto</span>
              </div>
            )}
          </div>

          {/* Detail sections */}
          <div className="space-y-6">
            {details.map((section) => (
              <div key={section.label} className="glass rounded-2xl p-6 glow-hover">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-2">
                  {section.label}
                </h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {section.value}
                </p>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-10">
            {project.link_repo && (
              <a
                href={project.link_repo}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl px-6 py-3 font-medium glow-hover hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Repositório
              </a>
            )}
            {project.link_demo && (
              <a
                href={project.link_demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-6 py-3 font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5-4.5L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Demo
              </a>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
