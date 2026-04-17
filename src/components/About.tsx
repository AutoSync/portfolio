export default function About() {
  const skills = [
    { category: "Linguagens", items: ["JavaScript", "TypeScript", "Python", "C/C++", "C#/.NET", "Java"] },
    { category: "Frontend", items: ["React", "Next.js", "React Native", "TailwindCSS", "ShadCN/UI"] },
    { category: "Backend", items: ["Node.js", "Express", "FastAPI", "Flask"] },
    { category: "IA & Dados", items: ["OpenAI API", "TensorFlow", "Scikit-learn", "OpenCV"] },
    { category: "DevOps", items: ["Docker", "Git", "GitHub Actions", "Figma", "Postman"] },
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
                Sou apaixonado por tecnologia e por criar soluções inteligentes que
                unem inovação, eficiência e design funcional.
              </p>
              <p>
                Tenho experiência no desenvolvimento de sistemas web, aplicações em
                React, Next.js, Node.js, e integração com Python para automação e
                inteligência artificial.
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
