import styled from "styled-components";
import { Card } from "./components/Card";

function App() {
  return (
    <Container>
      <Card/>
    </Container>
  );
}

export default App;

const Container = styled.section`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
`