import styled from "styled-components";
import { Card } from "./components/Card";
import ImgBgDesktop from "./images/background-pattern-desktop.svg";
import ImgBgMobile from "./images/background-pattern-mobile.svg"

function App() {
  return (
    <MainContainer>
      <Card/>
    </MainContainer>
  );
};

export default App;

const MainContainer = styled.section`
  width: 100%;
  max-width: 1440px;
  min-height: 100dvh;
  background: top center / contain no-repeat #e5c6f2 url(${ImgBgDesktop});
  display: flex;
  align-items: center;
  justify-content: center;
  /* !!!  Observar se o padding é necessário  !!! */
  padding: 20px;
  @media (max-width: 375px) {
    background: top center / contain no-repeat #e5c6f2 url(${ImgBgMobile});
    padding: 0;
  }
`