import React from 'react';
import styled from 'styled-components';
import qrCode1 from '../assets/qr-code.jpeg'; 
import pepe from '../assets/pepe.png'; 
import barnabas from '../assets/barnabas.png';

const DonationForm = () => {
  return (
    <Container>
      <Section>
        <Title>Donaciones para los michis de Pacífico</Title>
        <SectionPacifico>
        <QRContainer>
          <QRImage src={barnabas} alt="Código QR para donaciones por cuenta DNI" />
        </QRContainer>
        <QRContainer>
          <QRImage src={qrCode1} alt="Código QR para donaciones por cuenta DNI" />
        </QRContainer>
        </SectionPacifico>
        <Text>Si querés darle una patita a Barni, Fiona y los michis de la colonia de Pacífico, podés hacerlo escaneando el código QR con <Highlight>cuenta DNI</Highlight>.</Text>
        <Text>
          O al siguiente alias: <Highlight> <br /> nachitopadrinobb <br /> (Alex Farias Dos Santos)</Highlight>
        </Text>
      </Section>

      <Section>
        <Title>Donaciones para Pepe</Title>
        <QRContainer>
          <QRImage src={pepe} alt="Código QR para donaciones por alias" />
        </QRContainer>
        <Text>
          Si querés darle una patita a Pepe, podés hacerlo al siguiente alias: <Highlight> <br /> nachitopadrino <br /> (Lucía Belén Astradas)</Highlight>
        </Text>

      </Section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: center;
  margin: 0 auto;
  padding: 2rem;
  gap: 20px;
  background-color: ${(props) => props.theme.background_d};
  border-radius: 10px;
  max-width: 100%;
  width: 100%;
  align-items: stretch;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 1.5rem;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
  box-shadow: 0 0 20px rgb(0 0 0 / 12%);
  justify-content: center;
  align-items: center;
  width: 50%;
  justify-content: flex-start;
  &:last-child {
    margin-bottom: 0;
  }
    @media (max-width: 768px) {
      width: 100%;
      padding: 1rem;
    }
`;

const SectionPacifico  = styled.div`
display: flex;
width: 50%;
gap: 2rem;
justify-content: center;
align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 1.75rem;
  color: ${(props) => props.theme.secondary};
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const Text = styled.p`
 
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
  align-items: flex-start;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  filter: drop-shadow(2px 4px 6px rgb(0 0 0 / 31%));
  max-width: 250px;
 
`;

const QRImage = styled.img`
  width: 250px; 
  height: 250px; 
  

`;

const Highlight = styled.span`
  color: ${(props) => props.theme.secondary};
  font-weight: bold;
`;

export default DonationForm;
