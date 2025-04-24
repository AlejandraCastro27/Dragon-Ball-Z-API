import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ErrorCharacter.css';

const ErrorCharacter = () => {
  const navigate = useNavigate();

  return (
    <div className="error-character-container">
      <div className="error-character-content">
        <h1>¡PERSONAJE NO ENCONTRADO!</h1>
        <h2>Este guerrero no está en nuestra base de datos</h2>
        
        <div className="error-character-video">
          <iframe
            src="https://gifgifs.com/animations/anime/dragon-ball-z/Goku/goku_70.gif"
            title="DBZ Error"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <p className="error-character-message">
          Parece que este personaje ha sido eliminado por Dragon Ball o nunca existió.
        </p>

        <div className="error-character-buttons">
          <button 
            className="error-character-button"
            onClick={() => navigate('/')}
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorCharacter;