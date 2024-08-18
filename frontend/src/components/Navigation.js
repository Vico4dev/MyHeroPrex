import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';

const Navigation = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">MyHeroPex</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {isAuthenticated ? (
            <>
              <li><Link to="/heros">Héros</Link></li>
              <li><Link to="/combat">Combat</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><button onClick={handleLogout}>Déconnexion</button></li>
            </>
          ) : (
            <>
              <li><Link to="/connexion">Connexion</Link></li>
              <li><Link to="/inscription">Inscription</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;