import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: auto;

  header {
    display: flex;
    align-items: center;

    img {
      height: 100px;
      margin-right: 30px;
    }

    h1 {
      font-size: 3rem;
      color: #fff;
    }
  }

  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    margin: auto;

    div {
      display: flex;
      padding: 30px;
      background: #141619;
      border-radius: 4px;

      strong {
        font-size: 2.5rem;
        color: #fff;
      }

      svg {
        margin-right: 20px;
      }
    }
  }
`;
