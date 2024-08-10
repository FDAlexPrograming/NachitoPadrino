// src/pages/Donations.js
import React from 'react';
import styled from 'styled-components';
import DonationForm from '../components/DonationForm';

const Donations = () => {
  return (
    <PageContainer>
      <DonationForm />
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

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.primary}; /* Asegúrate de definir este color en tu tema */
  margin-bottom: 1.5rem;
`;

export default Donations;
