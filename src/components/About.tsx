export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "REST APIs", "PostgreSQL"] },
    { category: "DevOps", items: ["Docker", "CI/CD", "Git", "Linux"] },
  ];

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Bio */}
          <div className="glass rounded-2xl p-8 glow-hover">
            <h3 className="text-xl font-semibold mb-4">Quem sou eu</h3>
            <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                Sou um desenvolvedor apaixonado por resolver problemas complexos com
                código limpo e arquitetura bem pensada.
              </p>
              <p>
                Meu foco está em construir soluções que não apenas funcionem, mas que
                sejam escaláveis, mantíveis e entreguem valor real.
              </p>
              <p>
                Busco constantemente evoluir, aprendendo novas tecnologias e
                compartilhando conhecimento.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            {skills.map((group) => (
              <div key={group.category} className="glass rounded-2xl p-6 glow-hover">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-3">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
