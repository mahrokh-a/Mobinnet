import React from "react";
import "../styles/packageItem.css";
import CustomText from "./CustomText";

const RowItemInformation = ({ image, title, value }) => {
  return (
    <div className="title-section">
      <div className="text-section">
        <img src={image} className="package-data-icon" />
      </div>
      <div className="text-section">
        <CustomText
          type={"x-medium"}
          children={title}
          customStylesClass={"package-data-title"}
        />
      </div>
      <div className="colon-text">
        <CustomText children={":"} customStylesClass={"package-data-title"} />
      </div>
      <div className="package-data-describe">
        <CustomText
          type="no-font"
          children={value}
          customStylesClass={"package-data-text"}
        />
      </div>
    </div>
  );
};

export default React.memo(RowItemInformation);
