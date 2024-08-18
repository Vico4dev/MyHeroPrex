import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-10">Tableau de Bord MyHeroPex</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Carte vers Mes Héros */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Mes Héros</h2>
            <p>Gérez vos héros, leurs statistiques et plus encore.</p>
            <div className="card-actions justify-end">
              <Link to="/heroes" className="btn btn-primary">Accéder</Link>
            </div>
          </div>
        </div>

        {/* Carte vers Mon Inventaire */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Mon Inventaire</h2>
            <p>Consultez vos objets et équipements pour les combats.</p>
            <div className="card-actions justify-end">
              <Link to="/inventory" className="btn btn-primary">Accéder</Link>
            </div>
          </div>
        </div>

        {/* Carte vers les Combats */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Combats</h2>
            <p>Accédez au système de combat et affrontez vos adversaires.</p>
            <div className="card-actions justify-end">
              <Link to="/battles" className="btn btn-primary">Accéder</Link>
            </div>
          </div>
        </div>

        {/* Carte vers les Quêtes */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Quêtes</h2>
            <p>Explorez et accomplissez des quêtes pour obtenir des récompenses.</p>
            <div className="card-actions justify-end">
              <Link to="/quests" className="btn btn-primary">Accéder</Link>
            </div>
          </div>
        </div>

        {/* Carte vers les Statistiques */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Statistiques</h2>
            <p>Consultez vos performances et vos progrès dans le jeu.</p>
            <div className="card-actions justify-end">
              <Link to="/stats" className="btn btn-primary">Accéder</Link>
            </div>
          </div>
        </div>
        
        {/* Carte vers les Paramètres */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Paramètres</h2>
            <p>Gérez les paramètres de votre compte et personnalisez le jeu.</p>
            <div className="card-actions justify-end">
              <Link to="/settings" className="btn btn-primary">Accéder</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
