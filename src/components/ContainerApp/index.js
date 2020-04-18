import React from 'react';
import Menu from '../Menu';

import { Wrapper } from './styles';

export default function ContainerApp({ children }) {
  return (
    <Wrapper>
      <Menu />
      {children}
    </Wrapper>
  );
}
