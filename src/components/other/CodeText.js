import * as React from "react";
import classNames from "classnames";
import "./CodeText.scss";

const CodeTab = props => {
  const { children, activeTab, ...properties } = props;

  return (
    <span
      id={children}
      className={classNames({
        __Tab: true,
        Active: activeTab == children
      })}
      {...properties}
    >
      {children}
    </span>
  );
};

const CodeText = () => {
  const [activeTab, setActiveTab] = React.useState("CSS");

  const changeActiveTab = event => {
    setActiveTab(event.target.id);
  };

  return (
    <div className="CodeText">
      <div className="__Header">
        <CodeTab onClick={changeActiveTab} activeTab={activeTab}>
          CSS
        </CodeTab>
        <CodeTab onClick={changeActiveTab} activeTab={activeTab}>
          SCSS
        </CodeTab>
        <CodeTab onClick={changeActiveTab} activeTab={activeTab}>
          LESS
        </CodeTab>
      </div>
      <textarea className="__Textarea" readOnly>
        text
      </textarea>
    </div>
  );
};

export default CodeText;
