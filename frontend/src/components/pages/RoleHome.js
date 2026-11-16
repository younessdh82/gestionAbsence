import { Link } from 'react-router-dom';

function RoleHome({ role, subtitle }) {
  return (
    <div className="dashboard">
      <div className="dashboard-heading">
        <div><p className="eyebrow">VOTRE ESPACE</p><h1>Bonjour, {role}</h1><p className="dashboard-subtitle">{subtitle}</p></div>
        <span className="date-chip">Année universitaire · 2026–2027</span>
      </div>
      <section className="welcome-panel">
        <div className="welcome-copy"><span className="welcome-kicker">ESPACE PERSONNEL</span><h2>Tout votre suivi, au même endroit.</h2><p>Les outils de votre espace sont prêts à être complétés au fil des prochaines étapes du projet.</p><Link className="primary-link" to="/espaces">Voir les espaces <span aria-hidden="true">→</span></Link></div>
        <div className="welcome-art" aria-hidden="true"><div className="art-ring ring-one" /><div className="art-ring ring-two" /><div className="art-card"><span>Assiduité</span><strong>Suivi simplifié</strong><div className="art-bars"><i /><i /><i /><i /><i /><i /><i /></div></div><span className="art-dot" /></div>
      </section>
      <section className="dashboard-section"><div className="section-heading"><div><p className="eyebrow">POUR COMMENCER</p><h2>Accès rapides</h2></div><span className="section-note">Votre tableau de bord</span></div><div className="quick-grid"><article className="quick-card"><span className="quick-icon indigo">◷</span><div><h3>Suivi de l’assiduité</h3><p>Consultez les informations liées à votre espace.</p></div><span className="quick-arrow">↗</span></article><article className="quick-card"><span className="quick-icon mint">▤</span><div><h3>Informations à traiter</h3><p>Les éléments importants apparaîtront ici.</p></div><span className="quick-arrow">↗</span></article><article className="quick-card"><span className="quick-icon peach">◇</span><div><h3>Votre activité</h3><p>Retrouvez bientôt vos dernières actions.</p></div><span className="quick-arrow">↗</span></article></div></section>
      <p className="dashboard-footnote">Les données réelles apparaîtront après la connexion à l’API.</p>
    </div>
  );
}

export default RoleHome;
