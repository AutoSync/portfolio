export default function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-secondary)]">
        <p>&copy; {new Date().getFullYear()} Erick Andrade. Todos os direitos reservados.</p>
        <p>
          Feito com{" "}
          <span className="text-gradient font-medium">Next.js</span> &{" "}
          <span className="text-gradient font-medium">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
