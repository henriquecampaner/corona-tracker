import React from 'react';

import { Container } from './styles';

import Map from '~/components/Map';
import Header from '../../components/Header';
import TotalCases from '../../components/TotalCases';

export default function Main() {
  return (
    <Container>
      <Header />
      <TotalCases />
      <Map />
    </Container>
  );
}
