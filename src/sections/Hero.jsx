export default function Hero(){
  return (
    <section id="hero" className="section bg-gradient-to-b from-white to-card">
      <div className="container">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Journée Doctorale en Informatique et Système <span className="text-[var(--accent)]">2025</span>
        </h1>

        <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
          {/* Colonne gauche */}
          <div className="space-y-3 text-slate-800">
            <p className="text-xl md:text-2xl font-semibold">Sous le thème : intelligence artificielle et ses applications</p>
            <p className="text-lg md:text-xl font-medium">Organisée par le Laboratoire Informatique et Système (LIS)</p>
            <p className="text-lg">Une journée dédiée aux doctorants : présentations, networking et échanges scientifiques.</p>
            <p className="text-slate-700">Date&nbsp;: 29 novembre 2025 — Lieu&nbsp;: Faculté des Sciences Ain Chock - Casablanca</p>

            <div className="mt-4 flex gap-3">
              <a href="#form" className="btn-primary">Soumettre</a>
              <a href="#program" className="btn-primary">Voir le programme</a>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="card">
            <ul className="space-y-3 text-slate-700">
              <li>• Sessions posters & orales</li>
              <li>• Intervenants académiques & industriels</li>
              <li>• Ateliers méthodes & outils</li>
              <li>• Prix du meilleur poster</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
