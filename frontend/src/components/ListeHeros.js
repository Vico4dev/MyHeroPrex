import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHeroes, selectHero } from '../store/slices/heroSlice';
import AjouterHero from './AjouterHero';

function ListeHeros() {
    const heroes = useSelector((state) => state.hero.heroes);
  
    if (!Array.isArray(heroes)) {
      return <div>No heroes available</div>;
    }
  
    return (
      <div>
        {heroes.map((hero) => (
          <div key={hero.id}>{hero.name}</div>
        ))}
      </div>
    );
  }
  

export default ListeHeros;