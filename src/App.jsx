import styled from "styled-components";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <AppContainer>
      <Header />
      <Hero />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  padding: 2rem 3rem;
`;

export default App;
