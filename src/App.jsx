import styled from "styled-components";
import { Card } from "./components/Card";
import ImgBgDesktop from "./images/background-pattern-desktop.svg";
import ImgBgMobile from "./images/background-pattern-mobile.svg"

function App() {
  return (
    <Container>
      <Card/>
    </Container>
  );
};

export default App;

const Container = styled.section`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  background: top center / contain no-repeat #e5c6f2 url(${ImgBgDesktop});
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 375px) {
    background: top center / contain no-repeat #e5c6f2 url(${ImgBgMobile});
  }
`