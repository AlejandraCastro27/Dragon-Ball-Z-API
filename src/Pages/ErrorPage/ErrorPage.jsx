import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">¡RUTA DESTRUIDA!</h1>
        <h2 className="error-subtitle">Esta página no existe en nuestro radar</h2>
        
        <div className="video-wrapper">
          <iframe
            src="https://gifgifs.com/animations/anime/dragon-ball-z/Goku/goku_70.gif"
            title="DBZ Montage"
            frameBorder="0"
            allowFullScreen
            className="error-video"
          ></iframe>
        </div>

        <p className="error-message">
          Parece que han destruido esta página.
        </p>

        <button 
          className="error-button"
          onClick={() => navigate('/')}
        >
          <span className="button-text">VOLVER AL INICIO</span>
          <span className="button-ki">⚡</span>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;