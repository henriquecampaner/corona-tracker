import React from 'react';

import { Container } from './styles';
import ContainerPages from '../../components/ContainerPages';

import Map from '~/components/Map';
import Header from '../../components/Header';

export default function Main() {
  return (
    <ContainerPages>
      <Container>
        <Map />
      </Container>
    </ContainerPages>
  );
}
