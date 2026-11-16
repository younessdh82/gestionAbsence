import { Route, Routes } from 'react-router-dom';
import RoleLayout from './RoleLayout';
import RoleHome from '../pages/RoleHome';

const navigation = [
  { label: 'Vue d’ensemble', path: '', icon: '⌂' },
  { label: 'Étudiants', path: 'etudiants', icon: '○' },
  { label: 'Enseignants', path: 'enseignants', icon: '◇' },
  { label: 'Groupes et modules', path: 'organisation', icon: '▦' },
  { label: 'Absences', path: 'absences', icon: '◷' },
];

function AdminLayout() {
  return <Routes><Route element={<RoleLayout role="Administrateur" initials="AD" basePath="/admin" navigation={navigation} />}><Route index element={<RoleHome role="Administrateur" subtitle="Gérez les utilisateurs et l’organisation de l’établissement." />} /><Route path="*" element={<RoleHome role="Administrateur" subtitle="Cette section sera disponible dans une prochaine étape." />} /></Route></Routes>;
}

export default AdminLayout;
