import { Link } from 'react-router-dom';

const spaces = [
  { name: 'Administration', role: 'Administrateur', path: '/admin', tone: 'violet', description: 'Gérer les utilisateurs, les groupes et les données de l’établissement.' },
  { name: 'Espace enseignant', role: 'Enseignant', path: '/enseignant', tone: 'blue', description: 'Retrouver les séances et suivre les présences de vos groupes.' },
  { name: 'Espace pédagogique', role: 'Responsable pédagogique', path: '/responsable', tone: 'green', description: 'Suivre l’assiduité et traiter les justificatifs.' },
  { name: 'Espace étudiant', role: 'Étudiant', path: '/etudiant', tone: 'orange', description: 'Consulter vos absences et suivre vos justificatifs.' },
];

function RoleDashboard() {
  return (
    <main className="portal-page">
      <div className="portal-topline"><span className="brand-mark">A</span><span>Assiduité</span><span className="portal-topline-label">Portail de l’établissement</span></div>
      <section className="portal-intro">
        <p className="eyebrow">GESTION DES ABSENCES</p>
        <h1>Bienvenue sur votre espace</h1>
        <p>Choisissez votre profil pour accéder aux outils adaptés à votre rôle.</p>
      </section>
      <section className="space-grid" aria-label="Espaces par rôle">
        {spaces.map((space, index) => (
          <Link className="space-card" to={space.path} key={space.path}>
            <span className={`space-icon ${space.tone}`} aria-hidden="true">{['A', 'E', 'P', 'É'][index]}</span>
            <span className="space-role">{space.role}</span>
            <span className="space-title">{space.name}</span>
            <span className="space-description">{space.description}</span>
            <span className="space-link">Ouvrir l’espace <span aria-hidden="true">↗</span></span>
          </Link>
        ))}
      </section>
      <footer className="portal-footer">Plateforme de suivi de l’assiduité</footer>
    </main>
  );
}

export default RoleDashboard;
