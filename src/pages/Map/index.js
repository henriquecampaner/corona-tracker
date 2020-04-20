import React from 'react';

import { Container } from './styles';
import ContainerPages from '../../components/ContainerPages';

import Map from '~/components/Map';

export default function Main() {
  return (
    <ContainerPages>
      <Container>
        <Map />
      </Container>
    </ContainerPages>
  );
}
