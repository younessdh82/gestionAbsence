import { Route, Routes } from 'react-router-dom';
import RoleLayout from './RoleLayout';
import RoleHome from '../pages/RoleHome';

const navigation = [
  { label: 'Vue d’ensemble', path: '', icon: '⌂' },
  { label: 'Mes absences', path: 'absences', icon: '◷' },
  { label: 'Justificatifs', path: 'justificatifs', icon: '▤' },
  { label: 'Mon profil', path: 'profil', icon: '○' },
];

function StudentLayout() {
  return <Routes><Route element={<RoleLayout role="Étudiant" initials="ET" basePath="/etudiant" navigation={navigation} />}><Route index element={<RoleHome role="Étudiant" subtitle="Consultez votre situation et suivez vos demandes de justificatif." />} /><Route path="*" element={<RoleHome role="Étudiant" subtitle="Cette section sera disponible dans une prochaine étape." />} /></Route></Routes>;
}

export default StudentLayout;
