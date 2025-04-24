import React from 'react';
import './AboutPage.css';
import profilePhoto from '../../assets/foto-personal.jpg'; 

const AboutPage = () => {
  return (
    <main className="about-container">
      <div className="about-content">
        <div className="profile-header">
          <img 
            src={profilePhoto} 
            alt="Tu nombre" 
            className="profile-photo"
          />
          <div className="profile-info">
            <h1 className="about-title">Lina Alejandra Castro Rojas</h1>
            <h2 className="about-subtitle">Estudiante de Ingeniería de Sistemas</h2>
            <p className="profile-age">Edad: 23años</p>
          </div>
        </div>

        <section className="about-section">
          <h2>Sobre Mí</h2>
          <p>
            Soy una estudiante de Ingeniería de Sistemas con un gran interés 
            en el desarrollo web y la tecnología. Este proyecto de Dragon Ball API 
            combina mi pasión por la programación con mi amor por esta serie.
          </p>
        </section>

        <section className="about-section">
          <h2>Tecnologías Utilizadas</h2>
          <p>
            Para desarrollar esta aplicación he utilizado las siguientes tecnologías:
          </p>
          <div className="tech-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS3</span>
            <span>HTML5</span>
            <span>React Router</span>
            <span>Dragon Ball API</span>
          </div>
        </section>

        <section className="about-section">
          <h2>Mis Redes Sociales</h2>
          <div className="social-links">
            <a href="https://www.facebook.com/share/1EkJDmhrG4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="https://www.tiktok.com/@alejandracastro.05?_t=ZS-8vmF1NZ7aIz&_r=1" target="_blank" rel="noopener noreferrer" className="social-link tiktok">
              <i className="fab fa-tiktok"></i> TikTok
            </a>
            <a href="https://www.instagram.com/alejandracastro1_?igsh=MWJmb3hpZmtjeng1NQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://github.com/AlejandraCastro27" target="_blank" rel="noopener noreferrer" className="social-link github">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </section>
        
        <div className="signature">
          <p>¡Gracias por visitar mi proyecto!</p>
          <div className="dragon-ball">★</div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;