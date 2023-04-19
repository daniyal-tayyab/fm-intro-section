import styled from "styled-components";
import Header from "./components/header/Header";

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  padding: 2rem 3rem;
`;

export default App;
