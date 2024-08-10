// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useTheme } from '../ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import images from '../assets';

const Navbar = () => {
  const { toggleTheme } = useTheme();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <Nav>
      <Logo to="/">
        <BorderWrapper>
          <img src={images.nachito_logo} alt="Cat Logo" />
        </BorderWrapper>
      </Logo>
    
      <NavLinks open={isMenuOpen}>
        <CloseButton onClick={() => setMenuOpen(false)}>
          <CloseIcon />
        </CloseButton>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Inicio</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>Sobre Nosotros</NavLink>
        <NavLink to="/donations" onClick={() => setMenuOpen(false)}>Donaciones</NavLink>
        <NavLink to="/sorteo" onClick={() => setMenuOpen(false)}>Sorteo</NavLink>
        <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Galeria</NavLink>
        <SocialIcons>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          {/* Agrega más íconos aquí */}
        </SocialIcons>
      </NavLinks>
      <NavIcons>
        <MenuIconButton onClick={handleMenuToggle}>
          <MenuIcon />
        </MenuIconButton>
        <DarkModeButton onClick={toggleTheme}>
          <Brightness4Icon />
        </DarkModeButton>
      </NavIcons>
    </Nav>
  );
};

// Animaciones para el menú
const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const Nav = styled.nav`
  padding: 1rem 4rem 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  backdrop-filter: blur(25px);
  z-index: 100;
  border-bottom: 1px solid ${(props) => props.theme.color};
`;

const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  position: relative;
`;

const BorderWrapper = styled.div`
  position: relative;
  width: 70px; 
  height: 70px; 
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.theme.secondary};
  border-radius: 50%;
  background-color: #e9dbb6;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  a {
    color: ${(props) => props.theme.color};
    text-decoration: none;
    font-weight: bold;
    margin-right: 1rem;

    @media (max-width: 768px) {
      color: ${(props) => props.theme.primary};
    }

    &:hover {
      color: ${(props) => props.theme.hover_nv};
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    background: ${(props) => props.theme.secondary};
    width: 70vw;
    height: 100vh;
    padding: 2rem;
    gap: 1rem;
    visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.open ? '1' : '0')};
    transition: visibility 0.3s ease, opacity 0.3s ease;
    animation: ${(props) => (props.open ? slideIn : slideOut)} 0.3s ease;
    z-index: 2;
    align-items: flex-start;
  }
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.color};
  display: none;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 1rem;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media (min-width: 769px) {
    display: none;
  }
  
  @media (max-width: 768px) {
      color: ${(props) => props.theme.primary};
    display: block; 
  }
`;

const DarkModeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.color};
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  
  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: ${(props) => props.theme.color};
    font-size: 1.5rem;

    &:hover {
      color: ${(props) => props.theme.secondary};
    }
  }
`;

const InstagramIcon = styled.i`
  /* Aquí puedes poner el estilo para tu icono de Instagram */
  font-size: 1.5rem;
`;

export default Navbar;
