import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #000;
  height: 80%;
  position: relative;
  margin: 0 auto;
`;

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

export const ButtonContainer = styled.div`
  margin-left: 10px;
  position: absolute;

  @media (max-width: 800px) {
    top: 10%;
  }

  button {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 70px;
    background: #ff5533;
    color: #fff;
    border-radius: 100%;
    border: 0;
    transition: all 0.2s;

    svg {
      font-size: 25px;
    }

    @media (max-width: 800px) {
      height: 50px;
      width: 50px;
    }

    &:hover {
      filter: brightness(0.6);
    }
  }
  button:first-child {
    margin-right: 20px;
  }
`;
