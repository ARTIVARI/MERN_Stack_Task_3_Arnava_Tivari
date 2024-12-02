import React, { createContext, useContext, useState } from 'react';

// Create the context
const ThemeContext = createContext();

// Create a provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


const useTheme = () => useContext(ThemeContext);    // Custom hook for using the theme context

export { ThemeContext, ThemeProvider, useTheme };