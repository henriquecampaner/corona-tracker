import styled from 'styled-components';

export const Container = styled.footer`
  text-align: center;
  margin: 20px auto;
  span {
    font-size: 1.8rem;
    color: #f5f5f5;

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
