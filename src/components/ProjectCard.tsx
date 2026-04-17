import Link from "next/link";

export interface Project {
  id: string;
  nome: string;
  descricao: string;
  tecnologias: string[];
  link_repo: string;
  link_demo: string;
  imagem: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`} className="block group">
      <article className="glass rounded-2xl overflow-hidden glow-hover transition-all duration-300 group-hover:-translate-y-1">
        {/* Image placeholder */}
        <div className="h-48 bg-gradient-to-br from-indigo-500/20 to-pink-500/20 flex items-center justify-center">
          {project.imagem ? (
            <img
              src={project.imagem}
              alt={project.nome}
              className="w-full h-full object-cover"
            />
          ) : (
            <svg className="w-12 h-12 text-[var(--color-accent)] opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
            </svg>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-accent)] transition-colors">
            {project.nome}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-2">
            {project.descricao}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tecnologias.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
