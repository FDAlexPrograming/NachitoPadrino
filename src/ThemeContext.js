// src/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import Pacifico from './components/Pacifico';

const ThemeContext = createContext();

const lightTheme = {
  name: 'lightTheme',
  background: '#F7F7F7',
  color: '#2C2C2C',
  primary: '#FEC825',
  secondary: '#000',
  hover: '#E2E6EA',
  highlight: '#FFD700',
  blanco_negro: '#fff',
  negro_blanco: '#000',
  hover_nv: '#F8CA21',
  pacifico: 'green'
};

const darkTheme = {
  name: 'darkTheme',
  background: '#121212',
  color: '#E0E0E0',
  primary: '#000',
  secondary: '#F8CA21',
  hover: '#333333',
  highlight: '#FF4081',
  blanco_negro: '#000',
  negro_blanco: '#fff',
  hover_nv: '#F8CA21',
  pacifico: 'green'
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }
`;


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
