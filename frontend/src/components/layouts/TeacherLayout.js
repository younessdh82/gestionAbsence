import { Route, Routes } from 'react-router-dom';
import RoleLayout from './RoleLayout';
import RoleHome from '../pages/RoleHome';

const navigation = [
  { label: 'Vue d’ensemble', path: '', icon: '⌂' },
  { label: 'Mon emploi du temps', path: 'emploi-du-temps', icon: '▦' },
  { label: 'Mes groupes', path: 'groupes', icon: '○' },
  { label: 'Saisir les présences', path: 'presences', icon: '✓' },
  { label: 'Historique', path: 'historique', icon: '◷' },
];

function TeacherLayout() {
  return <Routes><Route element={<RoleLayout role="Enseignant" initials="EN" basePath="/enseignant" navigation={navigation} />}><Route index element={<RoleHome role="Enseignant" subtitle="Retrouvez vos séances et gérez les présences de vos groupes." />} /><Route path="*" element={<RoleHome role="Enseignant" subtitle="Cette section sera disponible dans une prochaine étape." />} /></Route></Routes>;
}

export default TeacherLayout;
