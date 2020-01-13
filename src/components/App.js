import * as React from "react";
import BarLoader from "./loaders/BarLoader";
import CircleLoader from "./loaders/CircleLoader";
import BurgerButton1 from "./burgers/BurgerButton1";
import BurgerButton2 from "./burgers/BurgerButton2";
import Dots from "./other/Dots";
import CodeText from "./other/CodeText";
import "./scss/stylesheet.scss";

const App = () => {
  return (
    <React.Fragment>
      {/* <BarLoader /> */}
      {/* <CircleLoader /> */}
      {/* <BurgerButton1 /> */}
      {/* <BurgerButton2 /> */}
      {/* <Dots /> */}
      <CodeText />
    </React.Fragment>
  );
};

export default App;
