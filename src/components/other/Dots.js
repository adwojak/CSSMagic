import * as React from "react";
import "./Dots.scss";

const Dots = () => {
  return (
    <React.Fragment>
      <div class="Dot Circle" id="Circle"></div>
      <div class="Dot Moving" id="Moving"></div>
      <div class="Dot Axis" id="Axis"></div>
    </React.Fragment>
  );
};

export default Dots;
