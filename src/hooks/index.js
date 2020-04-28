import React from 'react';

import { ThemeWrappProvider } from './theme';

const AppProvider = ({ children }) => {
  return <ThemeWrappProvider>{children}</ThemeWrappProvider>;
};

export default AppProvider;
