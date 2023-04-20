import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  padding: 4rem 11rem;

  @media (max-width: 1020px) {
    padding: 4rem 7rem;
  }

  @media (max-width: 940px) {
    padding: 4rem 5rem;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 700px) {
    padding: 4rem 0;
  }
`;

export const ContentSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    margin: 2rem 0;
    font-size: 6rem;
    width: 100%;

    span {
      display: block;

      @media (max-width: 900px) {
        display: inline;
      }
    }

    @media (max-width: 1070px) {
      font-size: 5rem;
    }

    @media (max-width: 500px) {
      font-size: 4rem;
    }
  }

  p {
    margin: 2rem 0;
    color: ${(props) => props.theme.mediumGrey};
    line-height: 1.5;
    font-size: 1.6rem;
  }

  button {
    margin: 2rem 0;
    margin-bottom: 8rem;
    font-size: 1.8rem;
    @media (max-width: 900px) {
      align-self: center;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
    margin-top: 5rem;
  }
`;

export const ClientSection = styled.div`
  width: 100%;
  display: flex;

  img {
    margin-right: 3rem;
    height: 2rem;

    @media (max-width: 500px) {
      margin-left: 2rem;
    }
  }

  @media (max-width: 900px) {
    justify-content: center;
  }

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 3rem;
    column-gap: 2rem;
    text-align: center;
    place-items: center;
  }
`;

export const MediaSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;

  img {
    width: 80%;

    @media (max-width: 1070px) {
      width: 90%;
    }

    @media (max-width: 900px) {
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 5rem;
  }
`;
