import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import "./NavBar.css";
import logo from '../../assets/Logo-DBZ.png';

const NavButton = styled(Button)(({ theme }) => ({
  fontFamily: "'Barlow', sans-serif",
  fontWeight: 600,
  letterSpacing: '1px',
  textTransform: 'uppercase',
  fontSize: '0.9rem',
  margin: '0 8px',
  padding: '8px 16px',
  color: '#e0e0e0',
  position: 'relative',
  transition: 'all 0.3s ease',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: 0,
    height: '2px',
    backgroundColor: '#ff8c00',
    transition: 'all 0.3s ease',
    transform: 'translateX(-50%)',
  },
  '&:hover': {
    color: '#ffffff',
    backgroundColor: 'transparent',
    '&::after': {
      width: '100%',
    },
  },
  '&.active': {
    color: '#ff8c00',
    '&::after': {
      width: '100%',
      backgroundColor: '#ff8c00',
    },
  },
}));

const Navbar = () => {
  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className="navbar" elevation={0}>
        <Toolbar className="navbar-toolbar">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Dragon Ball Logo" className="logo" />
          </Link>
          
          <Box className="nav-buttons">
            <NavButton 
              component={Link} 
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
            >
              Inicio
            </NavButton>
            <NavButton 
              component={Link} 
              to="/male"
              className={location.pathname === '/male' ? 'active' : ''}
            >
              Masculino
            </NavButton>
            <NavButton 
              component={Link} 
              to="/female"
              className={location.pathname === '/female' ? 'active' : ''}
            >
              Femenino
            </NavButton>
            <NavButton 
              component={Link} 
              to="/AboutPage"
              className={location.pathname === '/AboutPage' ? 'active' : ''}
            >
              Acerca de
            </NavButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Navbar;