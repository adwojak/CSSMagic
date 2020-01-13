import * as React from "react";
import "./BurgerButton1.scss";

const BurgerButton1 = () => {
  return (
    <div class="BurgerButton">
      <input type="checkbox" class="BurgerButtonCheckbox" />
      <span class="BurgerBar"></span>
      <span class="BurgerBar"></span>
      <span class="BurgerBar"></span>
    </div>
  );
};

export default BurgerButton1;
