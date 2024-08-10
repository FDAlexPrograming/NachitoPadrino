// src/pages/Donations.js
import React from 'react';
import styled from 'styled-components';
import Gallery from '../components/Gallery';

const Donations = () => {
  return (
    <PageContainer>
      <Gallery />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${(props) => props.theme.background}; /* Asegúrate de definir este color en tu tema */
`;



export default Donations;
