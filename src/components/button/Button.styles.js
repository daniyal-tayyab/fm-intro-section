import styled from "styled-components";

// type => border, inverted

export const Container = styled.button`
  padding: 1rem 1.5rem;
  border: ${(props) => (props.type === "border" ? "1px solid #000" : "none")};
  border-radius: 1rem;
  cursor: pointer;
  background-color: ${(props) => (props.type === "inverted" ? "#000" : "#fff")};
  color: ${(props) => (props.type === "inverted" ? "#fff" : "#000")};
`;
