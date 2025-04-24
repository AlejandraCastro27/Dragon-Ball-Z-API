import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./FemalePage.css";

const FemalePage = () => {
  const [females, setFemales] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://dragonball-api.com/api/characters?limit=100")
      .then(res => {
        const filteredFemales = res.data.items.filter(character => {
          const gender = character.gender?.toLowerCase().trim();
          return gender === 'female' || gender === 'femenino';
        });
        setFemales(filteredFemales);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="db-female-page">
      <div className="db-title-container">
        <h1 className="db-main-title">Personajes Femeninos</h1>
        <p className="db-subtitle">Las guerreras más poderosas del universo</p>
      </div>

      {isLoading ? (
        <div className="db-loading">
          <div className="db-spinner"></div>
        </div>
      ) : (
        <div className="db-characters-grid">
          {females.map((character) => (
            <Link 
              key={character.id} 
              to={`/details/${character.id}`} 
              className="db-character-link"
            >
              <div className="db-character-card">
                <div className="db-image-container">
                  <img
                    src={character.image || 'https://via.placeholder.com/300x400?text=Imagen+no+disponible'}
                    alt={character.name}
                    className="db-character-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x400?text=Imagen+no+disponible';
                    }}
                  />
                </div>
                <div className="db-character-info">
                  <h2 className="db-character-name">{character.name}</h2>
                  <div className="db-character-meta">
                    <span className="db-character-gender">{character.gender}</span>
                    {character.race && <span className="db-character-race">{character.race}</span>}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

export default FemalePage;
