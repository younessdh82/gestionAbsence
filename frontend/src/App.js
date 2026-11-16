import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AdminLayout from './components/layouts/AdminLayout';
import TeacherLayout from './components/layouts/TeacherLayout';
import ManagerLayout from './components/layouts/ManagerLayout';
import StudentLayout from './components/layouts/StudentLayout';
import RoleDashboard from './components/RoleDashboard';
import './App.css';

const roleRoutes = [
  { path: '/admin/*', element: <AdminLayout /> },
  { path: '/enseignant/*', element: <TeacherLayout /> },
  { path: '/responsable/*', element: <ManagerLayout /> },
  { path: '/etudiant/*', element: <StudentLayout /> },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/espaces" replace />} />
        <Route path="/espaces" element={<RoleDashboard />} />
        {roleRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<Navigate to="/espaces" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
