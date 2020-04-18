import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 3rem;
    color: #f5f5f5;
  }

  p {
    color: #f5f5f5;
    font-size: 2rem;
    margin-bottom: 30px;
  }

  @media (max-width: 800px) {
    margin-left: 30px;

    text-align: center;
  }
`;
