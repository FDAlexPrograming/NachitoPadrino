// src/components/DonationForm.js
import React from 'react';
import styled from 'styled-components';
import qrCode from '../assets/qr-code.jpeg';

const DonationForm = () => {
    return (
        <Container>
          <Title>Donaciones</Title>
          <Text>Puedes hacer una donación escaneando el siguiente código QR con  <Highlight>cuenta DNI</Highlight>:</Text>
          <QRContainer>
            <QRImage src={qrCode} alt="Código QR para donaciones" />
          </QRContainer>
          <Text>
            O puedes hacer una donación desde el siguiente alias: <Highlight>nachitopadrinobb</Highlight>
          </Text>
        </Container>
      );
    };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${(props) => props.theme.background_d};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 80%;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.secondary};
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  margin: 1rem 0;
  color: ${(props) => props.theme.color};
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const QRContainer = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(2px 4px 6px rgb(0 0 0 / 31%));
  
  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const QRImage = styled.img`
  width: 50vw; /* Usa un porcentaje del ancho del viewport */
  height: auto; /* Mantiene la proporción de la imagen */
  max-width: 200px; /* Tamaño máximo en pantallas grandes */
  
  @media (max-width: 768px) {
    max-width: 150px;
  }

  @media (max-width: 480px) {
    max-width: 120px;
  }
`;

const Highlight = styled.span`
  color: ${(props) => props.theme.secondary};
  font-weight: bold;
`;


export default DonationForm;
