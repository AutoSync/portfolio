export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-24">
      {/* Background orbs */}
      <div className="gradient-orb w-96 h-96 bg-indigo-500 -top-20 -left-20" />
      <div className="gradient-orb w-80 h-80 bg-pink-500 top-1/3 right-0" />
      <div className="gradient-orb w-64 h-64 bg-cyan-400 bottom-10 left-1/4" />

      <div className="relative z-10 text-center max-w-3xl">
        <div className="glass-strong inline-block rounded-full px-4 py-1.5 mb-6">
          <span className="text-sm font-medium text-[var(--color-text-secondary)]">
            Disponível para novos projetos
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Olá, eu sou {" "}
          <span className="text-gradient">Erick Andrade</span>
        </h1>

        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
          Desenvolvedor Full Stack &amp; Engenheiro de Software — apaixonado por criar
          soluções inteligentes que unem inovação, eficiência e design funcional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-3.5 font-medium transition-colors"
          >
            Ver Projetos
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 glass rounded-xl px-8 py-3.5 font-medium glow-hover transition-colors hover:text-[var(--color-accent)]"
          >
            Fale Comigo
          </a>
        </div>
      </div>
    </section>
  );
}
