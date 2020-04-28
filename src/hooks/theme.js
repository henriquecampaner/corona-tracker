import React, { createContext, useCallback, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import usePersistTheme from '../utils/usePersistTheme';

const ThemeWrappContext = createContext(null);

const ThemeWrappProvider = ({ children }) => {
  const [theme, setTheme] = usePersistTheme('theme', dark);

  const toogleTheme = useCallback(() => {
    setTheme(theme.title === 'dark' ? light : dark);
  }, [theme]);

  return (
    <ThemeWrappContext.Provider value={toogleTheme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeWrappContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeWrappContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { ThemeWrappProvider, useTheme };
