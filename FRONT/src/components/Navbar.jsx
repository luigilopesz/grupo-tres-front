import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './Navbar.css';

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const isAdmin = user?.email === "admin@curso.com";

  return (
    <nav className="navbar">
      <h1 className="logo">Certificados Online 🧾</h1>
      <div className="links">
        <Link to="/">Emitir</Link>
        <Link to="/lista">Listar</Link>
        {isAuthenticated && isAdmin && <Link to="/cancelar">Cancelar</Link>}
      </div>
      <div className="auth-section">
        {isAuthenticated ? (
          <>
            <span>{user.name || user.email}</span>
            <button onClick={() => logout({ returnTo: window.location.origin })}>Sair</button>
          </>
        ) : (
          <button onClick={() => loginWithRedirect()}>Entrar</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
