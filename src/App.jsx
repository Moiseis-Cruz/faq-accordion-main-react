import { Card } from "./components/Card";
import { Title } from "./components/Title";

import ImgStar from "./images/icon-star.svg"

function App() {
  return (
    <>
      <Card>
        <div>
          <img src={ImgStar} alt="" />
          <Title />
        </div>
      </Card>
    </>
  );
}

export default App;
