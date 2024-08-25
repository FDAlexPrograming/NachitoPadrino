// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa'; // Importa íconos adicionales si es necesario

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>&copy; 2024 Nachito Padrino. Todos los derechos reservados.</FooterText>
        <SocialMediaSection>
          <SocialMediaTitle>Nuestras Redes Sociales</SocialMediaTitle>
          <SocialMediaContainer>
            <SocialMediaLink href="https://www.instagram.com/nachitopadrino" target="_blank" rel="noopener noreferrer" title='Nachito Padrino'>
              <FaInstagram />
            </SocialMediaLink>
            <SocialMediaLinkPacifico href="https://www.instagram.com/pacificofelino" target="_blank" rel="noopener noreferrer" title='Pacífico Felino' >
              <FaInstagram />
            </SocialMediaLinkPacifico>
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
  color: ${(props) => props.theme.hover_nv};

`;

const SocialMediaLinkPacifico = styled.a`
  color: ${(props) => props.theme.color};
  font-size: 1.5rem;
  text-decoration: none;
  color: green;
`;

export default Footer;
