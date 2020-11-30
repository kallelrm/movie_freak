import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const MovieInfo = styled.section`
  margin-top: 20px;
  img {
    width: 100fr;
    height: 400px;
  }
  header {
    /* max-width: 800px; */
    display: flex;
    align-items: center;
  }
  div {
    display: flex;
    margin-top: 24px;

    strong {
      font-size: 36px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #737380;
      margin-top: 4px;
    }

    ul {
      margin: 10px 0 0 40px;
      display: flex;
      align-items: center;

      list-style: none;

      li {
        & + li {
          margin-left: 40px;
        }

        strong {
          display: block;
          font-size: 24px;
          color: #3d3d4d;
        }
        span {
          display: block;
          margin-top: 4px;
          color: #6c6c80;
        }
      }
    }
  }

  div + div {
    margin-top: clamp(18px, 36px, 48px);
    p {
      text-align: justify;
    }
  }
`;

export const Actors = styled.div`
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  text-decoration: none;

  transition: transform 0.2s;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      height: 250px;
      width: 180px;
    }
  }
  strong {
    font-size: 24px;
    color: #3d3d4d;
  }

  p {
    font-size: 18px;
    color: #a8a8b3;
    margin-top: 4px;
  }

  &:hover {
    transform: translateX(10px);
  }
  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;

export const Content = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 2rem;
`;
