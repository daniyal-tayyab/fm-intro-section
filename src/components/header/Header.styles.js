import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  height: 5rem;
`;

export const Navigation = styled.nav`
  margin-left: 5rem;

  ul {
    display: flex;
    list-style: none;

    li {
      margin-right: 4rem;
      font-size: 1.3rem;
      color: ${(props) => props.theme.mediumGrey};
      cursor: pointer;
      position: relative;
      transition: all 0.5s;

      img {
        margin-left: 0.5rem;
        transition: all 0.5s;
      }

      :hover {
        color: #000;
      }
    }
  }

  @media (max-width: 770px) {
    display: none;
  }
`;

export const AuthSection = styled.div`
  margin-left: auto;

  button {
    margin-right: 1.5rem;
  }

  @media (max-width: 770px) {
    display: none;
  }
`;

export const Features = styled.div`
  position: absolute;
  width: 15rem;
  height: 15rem;
  left: 10rem;
  top: 7rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.19), 0 3px 15px rgba(0, 0, 0, 0.23);
  border-radius: 10px;

  display: ${(props) => (props.toggleFeatures ? "flex" : "none")};
  flex-direction: column;
  padding: 1rem 0;
`;

export const Company = styled.div`
  position: absolute;
  width: 12rem;
  height: 12rem;
  left: 28rem;
  top: 7rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.19), 0 3px 15px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  display: ${(props) => (props.toggleCompany ? "flex" : "none")};
  flex-direction: column;
  padding: 10px 0;
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  margin-left: auto;

  @media (min-width: 770px) {
    display: none;
  }
`;
