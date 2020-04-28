import styled from 'styled-components';

export const Container = styled.footer`
  text-align: center;
  margin: 20px auto;
  span {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.text};

    span {
      margin: 0 5px;
      color: red;
      font-size: 2.5rem;
    }
  }

  div {
    margin-top: 15px;

    a {
      transition: all 0.4s;

      svg {
        fill: ${(props) => props.theme.colors.text};
      }
      &:hover {
        filter: brightness(0.5);
      }
    }
    svg {
      &:first-child {
        margin-right: 15px;
      }
    }
  }
`;
