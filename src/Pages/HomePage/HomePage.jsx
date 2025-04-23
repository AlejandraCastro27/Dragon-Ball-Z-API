import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./HomePage.css";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://dragonball-api.com/api/characters")
      .then(res => {
        setData(res.data.items);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="db-home-page">
      <div className="db-title-container">
        <h1 className="db-main-title">Bienvenido a Dragon Ball API</h1>
        <p className="db-subtitle">Todos los personajes del universo Dragon Ball</p>
      </div>
      
      {isLoading ? (
        <div className="db-loading">
          <div className="db-spinner"></div>
        </div>
      ) : (
        <div className="db-characters-grid">
          {data.map((character) => (
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
                    <span className="db-character-race">{character.race || 'Desconocida'}</span>
                    {character.gender && <span className="db-character-gender">{character.gender}</span>}
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

export default HomePage;
