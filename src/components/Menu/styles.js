import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 10%;
  max-width: 80px;
  background: #141619;
  margin-right: 10%;

  box-shadow: 1px 0px 1px 0px rgba(0, 0, 0, 0.75);

  nav {
    display: flex;
    flex-direction: column;

    svg {
      margin-top: 50px;

      &:hover {
        fill: #f5f5f5;
      }
    }
  }
`;
