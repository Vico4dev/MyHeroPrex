import React from 'react';
import { Link } from 'react-router-dom';

const Accueil = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Bienvenue sur MyHeroPex</h1>
          <p className="py-6">Préparez-vous à vivre des combats épiques avec vos héros préférés !</p>
          <Link to="/inscription" className="btn btn-primary mr-2">S'inscrire</Link>
          <Link to="/connexion" className="btn btn-secondary">Se connecter</Link>
        </div>
      </div>
    </div>
  );
};

export default Accueil;