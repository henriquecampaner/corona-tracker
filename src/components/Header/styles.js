import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  align-self: center;
  text-align: center;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.75);

  margin-bottom: 30px;
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
    text-align: center;
  }

  header {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;

    @media (max-width: 800px) {
      justify-content: space-between;
    }

    div {
      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
      }

      strong {
        font-size: 2rem;
        color: #fff;
      }
    }
    @media (max-width: 800px) {
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        flex: 1;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        svg {
          margin-right: 0px;
        }

        strong {
          font-size: 1.3rem;
          color: #fff;
          text-align: center;
        }
      }
    }
  }
`;
