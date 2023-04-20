import styled from "styled-components";

// type => border, inverted

export const Container = styled.button`
  padding: 1rem 1.5rem;
  border: ${(props) =>
    props.type === "border" ? "1px solid #000" : "1px solid transparent"};
  border-radius: 1rem;
  cursor: pointer;
  background-color: ${(props) => (props.type === "inverted" ? "#000" : "#fff")};
  color: ${(props) => (props.type === "inverted" ? "#fff" : "#000")};
  transition: all 0.2s;

  &:hover {
    color: ${(props) => props.type === "inverted" && "#000"};
    background-color: ${(props) => props.type === "inverted" && "#fff"};
    border: ${(props) => props.type === "inverted" && "1px solid #000"};
  }
`;
