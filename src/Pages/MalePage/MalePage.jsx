import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./MalePage.css";

const MalePage = () => {
  const [males, setMales] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://dragonball-api.com/api/characters?limit=100")
      .then(res => {
        const filteredMales = res.data.items.filter(
          character => character.gender.toLowerCase() === 'male'
        );
        setMales(filteredMales);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="db-male-page">
      <div className="db-title-container">
        <h1 className="db-main-title">Personajes Masculinos</h1>
        <p className="db-subtitle">Los guerreros más poderosos del universo</p>
      </div>

      {isLoading ? (
        <div className="db-loading">
          <div className="db-spinner"></div>
        </div>
      ) : (
        <div className="db-characters-grid">
          {males.map((character) => (
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

export default MalePage;
