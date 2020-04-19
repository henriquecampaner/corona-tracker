import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: auto;
  color: #f5f5f5;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin: 20px 0;
    text-align: center;
  }

  p {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  span {
    font-size: 1.6rem;
  }

  h2 {
    font-size: 2.5rem;
    margin: 10px 0;
  }

  section {
    display: flex;
    justify-content: space-between;

    div {
      width: 80%;
    }

    img {
      width: 10%;
    }

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
      text-align: center;

      div {
        order: 2;
        width: 100%;
      }

      img {
        order: 0;
        margin-top: 30px;
      }
    }
  }

  .symptoms {
    flex-direction: column;
    margin-top: 30px;

    div {
      display: flex;
      margin-top: 30px;

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
          width: 100px;
          margin-top: 10px;
        }
      }
    }

    @media (max-width: 600px) {
      div {
        flex-direction: column;
      }
    }
  }
`;
