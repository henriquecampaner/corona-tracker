import styled from 'styled-components';

export const Container = styled.div``;

export const Cases = styled.div`
  @media (max-width: 800px) {
    height: 90%;
  }
  height: 100%;
  display: flex;
  flex-direction: column;

  padding: 5px;

  div {
    display: flex;
    align-items: center;

    img {
      height: 40px;
      margin-right: 20px;
    }
  }

  h2 {
    text-align: center;
    font-size: 3rem;
  }

  span {
    margin-top: 10px;
    font-size: 2rem;
    svg {
      margin-right: 10px;
    }
  }
`;
