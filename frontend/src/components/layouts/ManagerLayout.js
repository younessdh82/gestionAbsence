import { Route, Routes } from 'react-router-dom';
import RoleLayout from './RoleLayout';
import RoleHome from '../pages/RoleHome';

const navigation = [
  { label: 'Vue d’ensemble', path: '', icon: '⌂' },
  { label: 'Suivi de l’assiduité', path: 'assiduite', icon: '◷' },
  { label: 'Justificatifs', path: 'justificatifs', icon: '▤' },
  { label: 'Étudiants', path: 'etudiants', icon: '○' },
  { label: 'Rapports', path: 'rapports', icon: '▥' },
];

function ManagerLayout() {
  return <Routes><Route element={<RoleLayout role="Responsable pédagogique" initials="RP" basePath="/responsable" navigation={navigation} />}><Route index element={<RoleHome role="Responsable pédagogique" subtitle="Suivez l’assiduité et accompagnez le traitement des justificatifs." />} /><Route path="*" element={<RoleHome role="Responsable pédagogique" subtitle="Cette section sera disponible dans une prochaine étape." />} /></Route></Routes>;
}

export default ManagerLayout;
