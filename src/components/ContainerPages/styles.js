import styled from 'styled-components';

export const Container = styled.div`
  z-index: 30;
  width: calc(100% - 80px);
  margin-left: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    width: calc(100% - 10%);
  }
`;
