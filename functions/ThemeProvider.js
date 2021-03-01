import React, { useContext, useState, useEffect } from 'react';
import showMessage from './Toast';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

const useTheme = () => useContext(ThemeContext);
const useThemeUpdate = () => useContext(ThemeUpdateContext);

const ThemeProvider = ({ children }) => {
  const [ darkTheme, setDarkTheme ] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(preTheme => !preTheme);
  }

  useEffect(() => {
    showMessage(`Theme has been changed! Current theme: ${darkTheme ? 'Dark' : 'Light'}`);
  }, [ darkTheme ])

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>      
    </ThemeContext.Provider>
  )
}

export {
  useTheme,
  useThemeUpdate,
  ThemeProvider,
}