// src/RafflePage.js
import React from 'react';
import styled from 'styled-components';
import iPadProImage from '../assets/oliva.png';
import amazonGiftCardImage from '../assets/oliva.png';
import petBasketImage from '../assets/oliva.png';

const RafflePage = () => {
  const prizes = [
    {
      title: 'Primer Premio: iPad Pro',
      image: iPadProImage,
      description: 'Un iPad Pro de última generación para que disfrutes de la mejor tecnología.',
    },
    {
      title: 'Segundo Premio: Gift Card Amazon',
      image: amazonGiftCardImage,
      description: 'Una tarjeta de regalo de $200 para usar en Amazon.',
    },
    {
      title: 'Tercer Premio: Cesta de Productos para Mascotas',
      image: petBasketImage,
      description: 'Una cesta llena de productos para mimar a tu gato.',
    },
    {
      title: 'Tercer Premio: Cesta de Productos para Mascotas',
      image: petBasketImage,
      description: 'Una cesta llena de productos para mimar a tu gato.',
    },
    {
      title: 'Tercer Premio: Cesta de Productos para Mascotas',
      image: petBasketImage,
      description: 'Una cesta llena de productos para mimar a tu gato.',
    },
    {
      title: 'Tercer Premio: Cesta de Productos para Mascotas',
      image: petBasketImage,
      description: 'Una cesta llena de productos para mimar a tu gato.',
    },
    {
      title: 'Tercer Premio: Cesta de Productos para Mascotas',
      image: petBasketImage,
      description: 'Una cesta llena de productos para mimar a tu gato.',
    },
  ];

  const participants = [
    { name: 'Ana López', number: '12345' },
    { name: 'Luis Martínez', number: '12346' },
    { name: 'Marta Rodríguez', number: '12347' },
    { name: 'Marta Rodríguez', number: '12347' },
    { name: 'Marta Rodríguez', number: '12347' },
    { name: 'Marta Rodríguez', number: '12347' },
    { name: 'Marta Rodríguez', number: '12347' },
    { name: 'Marta Rodríguez', number: '12347' },
    { name: 'Marta Rodríguez', number: '12347' },
    { name: 'Marta Rodríguez', number: '12347' },
    { name: 'Marta Rodríguez', number: '12347' },
    { name: 'Marta Rodríguez', number: '12347' },
    { name: 'Marta Rodríguez', number: '12347' },
    { name: 'Marta Rodríguez', number: '12347' },
    { name: 'Marta Rodríguez', number: '12347' },
    // Agrega más participantes según sea necesario
  ];

  return (
    <Container>
      <Title>Participa en Nuestro Sorteo</Title>
      <IntroText>
        ¡Únete a nuestro sorteo y gana increíbles premios mientras ayudas a nuestros queridos gatitos! Cada participación cuenta y nos ayuda a continuar con nuestra labor.
      </IntroText>

      <Section>
        <Subtitle>Cómo Participar</Subtitle>
        <Text>
          Para participar, haz una donación utilizando el alias <Highlight>nachitopadrinobb</Highlight>. Por cada donación de $100, recibirás un número de participación.
        </Text>
        <Text>
          Una vez realizada tu donación, recibirás un correo electrónico con tu número de participación. ¡No te lo pierdas!
        </Text>
      </Section>

      <Section>
        <Subtitle>Premios del Sorteo</Subtitle>
        <PrizeList>
          {prizes.map((prize, index) => (
            <PrizeItem key={index}>
              <PrizeImage src={prize.image} alt={prize.title} />
              <PrizeDetails>
                <PrizeTitle>{prize.title}</PrizeTitle>
                <PrizeDescription>{prize.description}</PrizeDescription>
              </PrizeDetails>
            </PrizeItem>
          ))}
        </PrizeList>
      </Section>

      <Section>
        <Subtitle>Métricas de Participación</Subtitle>
        <MetricsContainer>
          <Metric>
            <MetricValue>1,230</MetricValue>
            <MetricLabel>Total de Participaciones</MetricLabel>
          </Metric>
          <Metric>
            <MetricValue>600</MetricValue>
            <MetricLabel>Total de Donantes</MetricLabel>
          </Metric>
          <Metric>
            <MetricValue>75%</MetricValue>
            <MetricLabel>Progreso hacia la Meta</MetricLabel>
          </Metric>
        </MetricsContainer>
      </Section>

      <Section>
        <Subtitle>Testimonios de Ganadores</Subtitle>
        <TestimonialList>
          <Testimonial>
            <TestimonialText>"¡Gané el iPad Pro en el sorteo y no puedo estar más feliz! Además, saber que mi donación ayudó a los gatos es lo mejor."</TestimonialText>
            <TestimonialAuthor>- Ana, Ganadora del Sorteo</TestimonialAuthor>
          </Testimonial>
          <Testimonial>
            <TestimonialText>"Participé con una pequeña donación y terminé ganando una gift card de Amazon. ¡Qué sorpresa tan agradable!"</TestimonialText>
            <TestimonialAuthor>- Luis, Ganador del Sorteo</TestimonialAuthor>
          </Testimonial>
        </TestimonialList>
      </Section>

      <Section>
        <Subtitle>Lista de Participantes</Subtitle>
        <ParticipantList>
          {participants.map((participant, index) => (
            <ParticipantItem key={index}>
              <ParticipantName>{participant.name}</ParticipantName>
              <ParticipantNumber>{participant.number}</ParticipantNumber>
            </ParticipantItem>
          ))}
        </ParticipantList>
      </Section>
    </Container>
  );
};

// Estilos
const Container = styled.div`
  padding: 2rem;
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.secondary};
  margin-bottom: 1rem;
`;

const IntroText = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.color};
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.color};
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: ${(props) => props.theme.color};
  margin-bottom: 1rem;
`;

const Highlight = styled.span`
  color: ${(props) => props.theme.secondary};
  font-weight: bold;
`;

const PrizeList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PrizeItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.background_light};
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.box_shadow};
  padding: 1rem;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PrizeImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 1rem;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 250px;
    height: 150px;
  }
`;

const PrizeDetails = styled.div`
  text-align: left;
`;

const PrizeTitle = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.color};
  margin-bottom: 0.5rem;
`;

const PrizeDescription = styled.div`
  color: ${(props) => props.theme.color};
`;

const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const Metric = styled.div`
  text-align: center;
  flex: 1;
  margin: 0 1rem;
`;

const MetricValue = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.secondary};
  margin-bottom: 0.5rem;
`;

const MetricLabel = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.color};
`;

const TestimonialList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
`;

const Testimonial = styled.div`
  background-color: ${(props) => props.theme.background_light};
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem 0;
  box-shadow: ${(props) => props.theme.box_shadow};
  text-align: center;
`;

const TestimonialText = styled.p`
  color: ${(props) => props.theme.color};
  margin-bottom: 0.5rem;
`;

const TestimonialAuthor = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme.secondary};
`;

const ParticipantList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 10px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ParticipantItem = styled.li`
  background-color: ${(props) => props.theme.background_light};
  border-radius: 10px;
  padding: 1rem;
  box-shadow: ${(props) => props.theme.box_shadow};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ParticipantName = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.color};
`;

const ParticipantNumber = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.secondary};
`;

export default RafflePage;
