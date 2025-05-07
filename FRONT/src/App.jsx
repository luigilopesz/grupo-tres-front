import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Navbar from './components/Navbar';
import CertificateForm from './assets/pages/CertificateForm';
import CertificateList from './assets/pages/CertificateList';
import CertificateCancel from './assets/pages/CertificateCancel';

function App() {
  const { isAuthenticated, user } = useAuth0();

  const isAdmin = user?.email === "admin@curso.com"; // RBAC simples

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CertificateForm />} />
        <Route path="/lista" element={<CertificateList />} />
        <Route path="/cancelar" element={isAuthenticated && isAdmin ? <CertificateCancel /> : <Navigate to="/" />} />
        <Route path="*" element={<h2 style={{ padding: "20px" }}>Página não encontrada 😢</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
