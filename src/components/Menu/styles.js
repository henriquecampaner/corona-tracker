import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 10%;
  max-width: 80px;
  background: ${(props) =>
    props.theme.title === 'dark'
      ? props.theme.colors.primary
      : props.theme.colors.secundary};
  margin-right: 10%;

  box-shadow: 1px 0px 6px 0px rgba(0, 0, 0, 0.75);

  nav {
    display: flex;

    flex-direction: column;

    .switch {
      margin-top: 100px;
    }

    a {
      margin: 30px auto;
    }

    svg {
      fill: ${(props) => lighten(0.1, props.theme.colors.background)};
      transition: all 0.2s;

      &:hover {
        fill: ${(props) => props.theme.colors.text};
      }
    }
  }

  a.active {
    svg {
      fill: ${(props) => props.theme.colors.text};
    }
  }
`;
