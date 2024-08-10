// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Home from './pages/Home';
import About from './pages/About';
import Donations from './pages/Donations';
import { ThemeProvider as ThemeContextProvider } from './ThemeContext';
import styled from 'styled-components';
import RafflePage from './pages/Sorteo';

// Renombrar el contenedor estilizado
const AppContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  transition: all .3s;
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
              <Route path="/about" element={<About />} />
              <Route path="/donations" element={<Donations />} />
              <Route path="/sorteo" element={<RafflePage />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </main>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeContextProvider>
  );
};

export default App;
