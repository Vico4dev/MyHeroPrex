import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startCombat } from '../services/api';

const Combat = () => {
  const dispatch = useDispatch();
  const { selectedHero } = useSelector((state) => state.hero);
  const [opponent, setOpponent] = useState(null);
  const [combatLog, setCombatLog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulons la sélection d'un adversaire aléatoire
    const fakeOpponent = { id: 4, nom: 'Ennemi Mystérieux', type: 'Inconnu', niveau: 5 };
    setOpponent(fakeOpponent);
  }, []);

  const handleStartCombat = async () => {
    if (!selectedHero || !opponent) return;

    setLoading(true);
    setError(null);
    setCombatLog([]);

    try {
      const result = await startCombat(selectedHero.id, opponent.id);
      setCombatLog(result.combat_log);
    } catch (err) {
      setError("Une erreur est survenue lors du combat.");
    } finally {
      setLoading(false);
    }
  };

  if (!selectedHero) {
    return <div className="text-center mt-8">Veuillez sélectionner un héros pour combattre.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Combat</h1>
      <div className="flex justify-around mb-4">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{selectedHero.nom}</h2>
            <p>Type: {selectedHero.type}</p>
            <p>Niveau: {selectedHero.niveau}</p>
          </div>
        </div>
        {opponent && (
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{opponent.nom}</h2>
              <p>Type: {opponent.type}</p>
              <p>Niveau: {opponent.niveau}</p>
            </div>
          </div>
        )}
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleStartCombat} disabled={loading}>
          {loading ? 'Combat en cours...' : 'Commencer le combat'}
        </button>
      </div>
      {error && <div className="alert alert-error mt-4">{error}</div>}
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Journal de combat</h3>
        <ul className="list-disc list-inside">
          {combatLog.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Combat;