import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

import store from './store';
import GlobalStyles from './styles/global';
import AppProvider from './hooks';

import './config/ReactotronConfig';

function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </AppProvider>
    </Provider>
  );
}

export default App;
