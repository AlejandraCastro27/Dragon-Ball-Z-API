import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DetailsPage.css';
import ErrorCharacter from '../../Components/ErrorCharacter/ErrorCharacter'; 

const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://dragonball-api.com/api/characters/${id}`);
        
        if (!response.data || !response.data.id) {
          throw new Error('Personaje no encontrado');
        }
        
        setCharacter(response.data);
        setError(false);
      } catch (err) {
        console.error('Error fetching character:', err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return (
      <div className="details-loading">
        <div className="db-spinner"></div>
        <p>Cargando información del guerrero...</p>
      </div>
    );
  }

  if (error || !character) {
    return <ErrorCharacter />;
  }

  return (
    <main className="details-page">
      <div className="details-container">
        <div className="details-image-container">
          <img
            src={character.image || 'https://via.placeholder.com/400x600?text=Imagen+no+disponible'}
            alt={character.name}
            className="details-image"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x600?text=Imagen+no+disponible';
            }}
          />
        </div>

        <div className="details-info-container">
          <h1 className="details-title">{character.name}</h1>

          <div className="details-grid">
            <div className="detail-card">
              <span className="detail-label">Especie</span>
              <span className="detail-value">{character.race || 'Desconocida'}</span>
            </div>

            <div className="detail-card">
              <span className="detail-label">Género</span>
              <span className="detail-value">{character.gender || 'Desconocido'}</span>
            </div>

            <div className="detail-card">
              <span className="detail-label">Ki</span>
              <span className="detail-value">{character.ki || 'Desconocido'}</span>
            </div>

            <div className="detail-card">
              <span className="detail-label">Ki Máximo</span>
              <span className="detail-value">{character.maxKi || 'Desconocido'}</span>
            </div>

            <div className="detail-card">
              <span className="detail-label">Afiliación</span>
              <span className="detail-value">{character.affiliation || 'Desconocida'}</span>
            </div>

            {character.description && (
              <div className="detail-card full-width">
                <span className="detail-label">Descripción</span>
                <p className="detail-description">{character.description}</p>
              </div>
            )}
          </div>

          <button 
            className="details-back-button"
            onClick={() => navigate(-1)}
          >
            Volver atrás
          </button>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;