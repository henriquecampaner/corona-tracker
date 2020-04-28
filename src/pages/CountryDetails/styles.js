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
      background: ${(props) =>
        props.theme.title === 'dark'
          ? props.theme.colors.primary
          : props.theme.colors.secundary};
      border-radius: 4px;

      svg {
        fill: ${(props) => props.theme.colors.text};
      }

      strong {
        font-size: 2.5rem;
        color: ${(props) => props.theme.colors.text};
      }

      svg {
        margin-right: 20px;
      }

      @media (max-width: 600px) {
        padding: 20px;
        strong {
          font-size: 2rem;
        }
        svg {
          margin-right: 10px;
        }
      }
    }
  }
`;
