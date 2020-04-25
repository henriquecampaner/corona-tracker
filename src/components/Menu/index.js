import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaMapMarkerAlt, FaRegListAlt, FaInfo } from 'react-icons/fa';

import { Container } from './styles';

export default function Menu() {
  return (
    <Container>
      <nav>
        <NavLink exact to="/">
          <FaMapMarkerAlt size={30} color="#575659" />
        </NavLink>

        <NavLink to="/list">
          <FaRegListAlt size={30} color="#575659" />
        </NavLink>

        <NavLink to="/symptoms">
          <FaInfo size={30} color="#575659" />
        </NavLink>
      </nav>
    </Container>
  );
}
