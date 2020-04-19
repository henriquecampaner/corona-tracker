import React from 'react';

import { Container } from './styles';
import Header from '../Header';

export default function ContainerPages({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}
