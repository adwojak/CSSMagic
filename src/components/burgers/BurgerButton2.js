import * as React from "react";
import "./BurgerButton2.scss";

const BurgerButton2 = () => {
  return (
    <div id="BurgerButton2">
      <input type="checkbox" class="BurgerButtonCheckbox" />
      <span class="BurgerBarLong"></span>
      <span class="BurgerBarShortGroup">
        <span class="BurgerBarShort"></span>
        <span class="BurgerBarShort"></span>
      </span>
      <span class="BurgerBarLong"></span>
    </div>
  );
};

export default BurgerButton2;
