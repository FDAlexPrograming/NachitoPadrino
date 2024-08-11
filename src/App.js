// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Home from './pages/Home';
import Pacifico from './pages/Pacifico';
import Donations from './pages/Donations';
import { ThemeProvider as ThemeContextProvider } from './ThemeContext';
import styled from 'styled-components';
import RafflePage from './pages/Sorteo';

// Renombrar el contenedor estilizado
const AppContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  min-height: calc(100vh - 58px);
   @media (max-width: 768px) {
    min-height: calc(100vh - 48px);
  }
`;

const App = () => {
  return (
    <ThemeContextProvider>
      <Router>
        <AppContainer>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/donations" element={<Donations />} />
              <Route path="/novedades" element={<RafflePage />} />
              <Route path="/apadrinados" element={<Gallery />} />
              <Route path="/pacifico_felino" element={<Pacifico />} />
            </Routes>
          </main>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeContextProvider>
  );
};

export default App;
