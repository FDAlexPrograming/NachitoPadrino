// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <Title>Sobre Nosotros</Title>
      <Text>Información sobre la asociación...</Text>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.secondary};
`;

const Text = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.color};
`;

export default About;
