import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHero } from '../store/slices/heroSlice';

const AjouterHero = () => {
  const [nom, setNom] = useState('');
  const [type, setType] = useState('');
  const [niveau, setNiveau] = useState(1);
  const [pointsDeVie, setPointsDeVie] = useState('');
  const [attaque, setAttaque] = useState('');
  const [defense, setDefense] = useState('');
  const [vitesse, setVitesse] = useState('');
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHero({
      nom,
      type,
      niveau: parseInt(niveau),
      points_de_vie: parseInt(pointsDeVie),
      attaque: parseInt(attaque),
      defense: parseInt(defense),
      vitesse: parseInt(vitesse)
    }));
    
    // Reset form fields
    setNom('');
    setType('');
    setNiveau(1);
    setPointsDeVie('');
    setAttaque('');
    setDefense('');
    setVitesse('');
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Ajouter un nouveau héros</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Nom du héros</span>
            </label>
            <input
              type="text"
              placeholder="Nom"
              className="input input-bordered"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <input
              type="text"
              placeholder="Type"
              className="input input-bordered"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Niveau</span>
            </label>
            <input
              type="number"
              placeholder="Niveau"
              className="input input-bordered"
              value={niveau}
              onChange={(e) => setNiveau(e.target.value)}
              min="1"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Points de vie</span>
            </label>
            <input
              type="number"
              placeholder="Points de vie"
              className="input input-bordered"
              value={pointsDeVie}
              onChange={(e) => setPointsDeVie(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Attaque</span>
            </label>
            <input
              type="number"
              placeholder="Attaque"
              className="input input-bordered"
              value={attaque}
              onChange={(e) => setAttaque(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Défense</span>
            </label>
            <input
              type="number"
              placeholder="Défense"
              className="input input-bordered"
              value={defense}
              onChange={(e) => setDefense(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Vitesse</span>
            </label>
            <input
              type="number"
              placeholder="Vitesse"
              className="input input-bordered"
              value={vitesse}
              onChange={(e) => setVitesse(e.target.value)}
              required
            />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Ajouter le héros</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AjouterHero;
