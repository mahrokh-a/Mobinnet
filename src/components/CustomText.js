import React from "react";

const CustomText = ({ children, customStylesClass, type }) => {
  let main_text = children;
  let font_size =
    type == "small"
      ? 10
      : type == "medium"
      ? 15
      : type == "x-medium"
      ? 11
      : type == "large"
      ? 22
      : type == "x-large"
      ? 27
      : type == "no-font"
      ? 0
      : 14;

  return (
    <span style={{ fontSize: !!font_size ? font_size : null }} className={`${customStylesClass}`}>
      {" "}
      {main_text}{" "}
    </span>
  );
};

export default CustomText;
