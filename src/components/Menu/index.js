import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { FaMapMarkerAlt, FaRegListAlt, FaInfo } from 'react-icons/fa';
import { useTheme } from '../../hooks/theme';

import { Container } from './styles';

export default function Menu() {
  const { colors, title } = useContext(ThemeContext);
  const toogleTheme = useTheme();

  return (
    <Container>
      <nav>
        <NavLink exact to="/">
          <FaMapMarkerAlt size={30} />
        </NavLink>

        <NavLink to="/list">
          <FaRegListAlt size={30} />
        </NavLink>

        <NavLink to="/symptoms">
          <FaInfo size={30} />
        </NavLink>

        <Switch
          className="switch"
          onChange={toogleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={35}
          handleDiameter={20}
          offColor={shade(0.3, colors.secundary)}
          onColor={colors.secundary}
        />
      </nav>
    </Container>
  );
}
