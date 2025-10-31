export default function Header(){
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-flex items-center justify-center h-8 px-2 rounded-lg bg-[var(--accent)] text-white">JDIS'25</span>
          Journée Doctorale 2025
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a className="nav-link" href="#about">À propos</a>
          <a className="nav-link" href="#program">Programme</a>
          <a className="nav-link" href="#speakers">Intervenants</a>
          <a className="nav-link" href="#committees">Comités</a>
          <a className="nav-link" href="#cfp">Appel à communication</a>
          <a className="nav-link" href="#fees">Frais</a>
          <a className="nav-link" href="#form">Soumission</a>
          <a className="nav-link" href="#venue">Lieu</a>
          <a className="nav-link" href="#faq">FAQ</a>
        </nav>
      </div>
    </header>
  )
}
