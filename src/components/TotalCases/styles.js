import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
    margin: 50px 100px 50px 0px;

    svg {
      margin-right: 10px;
    }

    strong {
      font-size: 2rem;
      color: #fff;
    }
  }
  @media (max-width: 600px) {
    margin-left: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin: auto;

      svg {
        margin-right: 0px;
      }

      strong {
        font-size: 1.5rem;
        color: #fff;
        text-align: center;
      }
    }
  }
`;
