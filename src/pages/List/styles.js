import styled from 'styled-components';

export const Container = styled.main`
  width: 90%;
  margin: auto;
  color: ${(props) => props.theme.colors.text};
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    div {
      display: flex;
      flex-direction: column;
      padding: 5px;
      background: ${(props) =>
        props.theme.title === 'dark'
          ? props.theme.colors.primary
          : props.theme.colors.secundary};
      border-radius: 8px;
      transition: transform 0.2s;

      &:hover {
        transform: translateY(10px);
      }

      section {
        display: flex;
        flex-direction: column;

        span {
          font-size: 1.5rem;

          svg {
            margin-right: 10px;
            margin-top: 10px;
          }
        }
      }

      .header-country {
        display: flex;
        flex-direction: row;
        align-items: center;

        h2 {
          font-size: 2rem;
        }

        img {
          margin-right: 10px;
        }
      }

      a {
        width: 100%;
        background: #282b2d;
        border-radius: 4px;
        padding: 10px;
        color: ${(props) =>
          props.theme.title === 'dark'
            ? props.theme.colors.text
            : props.theme.colors.primary};
        font-size: 1.5rem;
        text-align: center;
        margin-top: 10px;
        transition: all 0.2s;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`;
