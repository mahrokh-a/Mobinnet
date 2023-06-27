import React from "react";
import '../styles/customText.css';

const CustomText = ({ children, customStylesClass, type }) => {
  let main_text = children;
  let fontSizeTypes = 
    type == "medium"
    ? 'medium-font'
    : type == "large"
    ? 'large-font'
    : type == "x-large"
    ? 'x-large-font'
    :
    'normal-font';

  return (
    <span className={`${customStylesClass} ${fontSizeTypes}`}>
      {" "}
      {main_text}{" "}
    </span>
  );
};

export default CustomText;
