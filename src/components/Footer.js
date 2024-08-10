// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'; // Importa íconos adicionales si es necesario

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>&copy; 2024 Nachito Padrino. Todos los derechos reservados.</FooterText>
        <SocialMediaSection>
          <SocialMediaTitle>Nuestras Redes Sociales</SocialMediaTitle>
          <SocialMediaContainer>
            <SocialMediaLink href="https://www.instagram.com/tu_perfil" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialMediaLink>
            <SocialMediaLink href="https://www.facebook.com/tu_perfil" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialMediaLink>
            <SocialMediaLink href="https://twitter.com/tu_perfil" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialMediaLink>
            {/* Agrega más enlaces a otras redes sociales aquí */}
          </SocialMediaContainer>
        </SocialMediaSection>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: ${(props) => props.theme.background_d};
  color: ${(props) => props.theme.color};
  text-align: center;
  padding: 1rem 0;
  position: absolute;
  top:100%;
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterText = styled.p`
  margin: 0;
`;

const SocialMediaSection = styled.div`
  margin-top: 1rem;
`;

const SocialMediaTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: ${(props) => props.theme.secondaryyyy};
`;

const SocialMediaContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SocialMediaLink = styled.a`
  color: ${(props) => props.theme.color};
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.hover_nv};
  }
`;

export default Footer;
