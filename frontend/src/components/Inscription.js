import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser, clearError } from '../store/slices/authSlice';

const Inscription = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/heros');
    }
    return () => {
      dispatch(clearError());
    };
  }, [isAuthenticated, navigate, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser({ username, email, password }));
  };

  // Fonction pour afficher les erreurs
  const renderError = (error) => {
    if (typeof error === 'string') {
      return error;
    } else if (error && typeof error === 'object') {
      return Object.values(error).join(', ');
    }
    return 'Une erreur est survenue';
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Inscription</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            {error && <div className="alert alert-error">{renderError(error)}</div>}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nom d'utilisateur</span>
              </label>
              <input
                type="text"
                placeholder="Nom d'utilisateur"
                className="input input-bordered"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mot de passe</span>
              </label>
              <input
                type="password"
                placeholder="Mot de passe"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Inscription...' : 'S\'inscrire'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inscription;