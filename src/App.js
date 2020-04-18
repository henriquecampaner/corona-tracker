import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

import store from './store';
import GlobalStyles from './styles/global';

import './config/ReactotronConfig';

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </Provider>
  );
}

export default App;
