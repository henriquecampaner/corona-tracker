import React from 'react';

import { Container } from './styles';
import Header from '../Header';
import Footer from '../Footer';

export default function ContainerPages({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
