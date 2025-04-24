import React from 'react';
import { Link } from 'react-router-dom';
import './CharCard.css'; // Asegúrate que esta importación es correcta

const CharCard = ({ character }) => {
  return (
    <div className="char-card-root"> {/* Contenedor adicional */}
      <Link to={`/details/${character.id}`} className="char-card-link">
        <div className="char-card-white"> {/* Nombre de clase específico */}
          <div className="character-image-container">
            <img
              src={character.image}
              alt={character.name}
              className="character-image"
            />
          </div>
          <div className="character-info-white">
            <h3>{character.name}</h3>
            <p>{character.race || 'Desconocido'}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CharCard;