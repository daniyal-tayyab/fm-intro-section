import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0.8rem 0;
  margin-left: 25px;

  p {
    font-size: 1.5rem;
    margin-left: 5px;
    color: ${(props) => props.theme.mediumGrey};
    margin-left: 10px;
  }
`;
