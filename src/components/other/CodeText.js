import * as React from "react";
import "./CodeText.scss";

const CodeText = () => {
  return (
    <div class="CodeText">
      <div class="__Header">
        <span class="__Tab">CSS</span>
        <span class="__Tab">SCSS</span>
        <span class="__Tab">LESS</span>
      </div>
      <textarea class="__Textarea" readOnly>
        text
      </textarea>
    </div>
  );
};

export default CodeText;
