import { NavLink, Outlet } from 'react-router-dom';

function RoleLayout({ role, initials, basePath, navigation }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <NavLink className="sidebar-brand" to="/espaces"><span className="brand-mark">A</span><span>Assiduité</span></NavLink>
        <div className="sidebar-section-label">ESPACE DE TRAVAIL</div>
        <nav className="sidebar-nav" aria-label={`Navigation ${role}`}>
          {navigation.map((item, index) => (
            <NavLink end={index === 0} className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`} to={`${basePath}${item.path}`} key={item.label}>
              <span className="nav-symbol" aria-hidden="true">{item.icon}</span>{item.label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-bottom"><span className="avatar">{initials}</span><span><strong>{role}</strong><small>Compte de démonstration</small></span></div>
      </aside>
      <div className="workspace">
        <header className="topbar"><div><span className="topbar-context">Plateforme de suivi</span><span className="breadcrumb-separator">/</span><strong>{role}</strong></div><NavLink className="switch-space" to="/espaces">Changer d’espace <span aria-hidden="true">↗</span></NavLink></header>
        <main className="page-content"><Outlet /></main>
      </div>
    </div>
  );
}

export default RoleLayout;
