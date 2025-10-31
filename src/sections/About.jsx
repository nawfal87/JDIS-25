export default function About(){
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold">À propos</h2>
        <div className="mt-4 space-y-3 text-slate-700">
          <p>Le Laboratoire d’Informatique et des Systèmes (LIS) de la Faculté des Sciences Ain Chock – Université Hassan II de Casablanca, en collaboration avec le Centre d’Études Doctorales : Sciences Mathématiques et Informatique, organise la première édition de la <strong>Journée Doctorale en Informatique et Systèmes (JDIS’25)</strong> Sous le thème <strong>« L’Intelligence Artificielle et ses Applications »</strong>.</p>
          <p>📅 <strong>Date :</strong> 29 novembre 2025<br/>📍 <strong>Lieu :</strong> Faculté des Sciences Ain Chock – Casablanca</p>
          <p>Cette journée vise à créer un espace privilégié d’échanges et de partage autour des travaux de recherche menés dans les domaines de l’Informatique, des Mathématiques et de l’Intelligence Artificielle. Elle a pour ambition de :</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Favoriser la rencontre entre doctorants, enseignants-chercheurs et acteurs industriels ;</li>
            <li>Mettre en valeur les résultats et perspectives de la recherche en IA ;</li>
            <li>Encourager la collaboration interdisciplinaire entre les différentes branches scientifiques ;</li>
            <li>Ouvrir les étudiants de Master à la recherche et à l’innovation technologique.</li>
          </ul>

          <div className="mt-6 space-y-3">
            <p><strong>Les sujets d'intérêt</strong> incluent les axes suivants, mais ne se limitent pas à :</p>

            <h3 className="mt-2 text-lg font-semibold">Intelligence Artificielle, Data Science et Ingénierie des Données</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Apprentissage Automatique et Profond (Machine Learning, Deep Learning)</li>
              <li>Traitement du Langage Naturel et Traduction Automatique</li>
              <li>Vision par Ordinateur et Reconnaissance d’Images</li>
              <li>Systèmes de Recommandation Intelligents</li>
              <li>Analyse Prédictive et Fouille de Données</li>
              <li>Développement de Modèles d'Apprentissage Multimodal</li>
              <li>Optimisation des Architectures de Réseaux Neuronaux pour Données Massives Hétérogènes</li>
              <li>IA Éthique et Explicable</li>
              <li>MLOps et Déploiement de Modèles dans le Cloud</li>
              <li>Plateformes Cloud pour le Machine Learning</li>
              <li>AutoML et Plateformes ML à Code Faible</li>
              <li>Applications Cognitive AI et Applications Intelligentes</li>
              <li>Compression et Optimisation des Modèles d'IA pour le Déploiement</li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold">Cybersécurité et Intelligence Artificielle</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Sécurité des Systèmes Intelligents</li>
              <li>Détection d'Intrusions avec Machine Learning</li>
              <li>Confidentialité et Protection des Données Sensibles</li>
              <li>Cryptographie Adaptative et Authentification Intelligente</li>
              <li>Sécurité des Réseaux Neuronaux</li>
              <li>Détection des Cyberattaques en Temps Réel (Deep Learning)</li>
              <li>IA pour la Cybersécurité Prédictive (IoT)</li>
              <li>Protection contre les Attaques Adversariales</li>
              <li>Sécurité des Conteneurs et Kubernetes</li>
              <li>Zero Trust Architecture</li>
              <li>DevSecOps, SIEM et Automatisation des SOC</li>
              <li>Cryptographie Post-Quantique</li>
              <li>Sécurité des API et Protection des Données</li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold">Cloud Computing et Infrastructures Intelligentes</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Orchestration des Ressources Cloud et Microservices</li>
              <li>Optimisation Énergétique, Edge Computing</li>
              <li>Virtualisation et Automatisation des Systèmes Distribués</li>
              <li>Big Data, Interopérabilité et Sécurité des Architectures Cloud</li>
              <li>Gestion Prédictive des Ressources (Multi-Cloud)</li>
              <li>Optimisation Énergétique des DC via Apprentissage</li>
              <li>Répartition Autonome des Charges de Calcul</li>
              <li>Stratégies Multi-Cloud et Cloud Hybride</li>
              <li>IaC, Migration Cloud, Observabilité et AIOps</li>
              <li>Gouvernance et Conformité Cloud</li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold">Méthodes Numériques, Calcul Scientifique et Intelligence Computationnelle</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Optimisation Numérique et Simulation Haute Performance</li>
              <li>Algorithmes Évolutifs et Intelligence Computationnelle</li>
              <li>Modélisation Mathématique de Systèmes Complexes</li>
              <li>GPU Computing appliqué à l'IA, Résolution d'EDP</li>
              <li>Hybridation Méthodes Numériques & Apprentissage Profond</li>
              <li>Approximation de Solutions de Systèmes Dynamiques</li>
              <li>HPC et Calcul Scientifique dans le Cloud</li>
            </ul>

            <h3 className="mt-4 text-lg font-semibold">Analyse Mathématique et Modélisation des Systèmes Dynamiques</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Théorie des Systèmes Dynamiques, Contrôle Optimal</li>
              <li>Méthodes Mathématiques pour l'Interprétation des Modèles d’IA</li>
              <li>Simulation Numérique et Validation de Modèles Complexes</li>
              <li>Applications en Physique, Biologie, Finance, Ingénierie</li>
              <li>EDP et Dynamique des Réseaux Neuronaux</li>
              <li>Théorie du Contrôle & IA pour Systèmes Autonomes</li>
              <li>Modèles Multimodaux et LLMs (vision, audio, texte)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
