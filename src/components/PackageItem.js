import { useCallback, useEffect, useState } from "react";
import "../styles/packageItem.css";
import CustomText from "./CustomText";
import tokens from "../utils/tokens";
import images from "../utils/images";
import RowItemInformation from "./RowItemInformation";

function PackageItem(props) {
  let convert_price = useCallback((price) => {
    if (!price) return null;
    let _price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return _price;
  }, []);

  return (
    <div className="package-item-container" key={props.id}>
      <div
        className={
          "item" +
          (props.selectedPackage == props.id ? " package-item-selected" : "")
        }
      >
        {props.selectedPackage == props.id && (
          <div className="package-item-selected-icon">
            <img src={images.submit_icon} className="selected-icon" />
          </div>
        )}
        <div className="package-image">
          <div className="package-image-box">
            <img
              src={images.background_products}
              className="background-product"
            />
            <img
              src={images.background_products_margin}
              className="background-product-margin"
            />
            <img src={images[props.packageName]} className="product-image" />
            {!!props.discountPercent && (
              <div className="percent-discount">
                <CustomText
                  type={"medium"}
                  children={`%${props.discountPercent}`}
                  customStylesClass={"percent-discount-text"}
                />
              </div>
            )}
          </div>
        </div>
        <div className="package-name">
          <CustomText
            type={"large"}
            children={props.packageName}
            customStylesClass={"package-name-text"}
          />
        </div>
        <div className="row package-price">
          <div className="w-auto">
            <div className="package-price-box">
              <CustomText
                type={"medium"}
                children={convert_price(props.discount)}
                customStylesClass={"package-discount-percent"}
              />
            </div>
            <div className="package-price-box">
              <CustomText
                type={"x-large"}
                children={convert_price(props.price)}
                customStylesClass={"package-price-text"}
              />
            </div>
          </div>
          <div className="w-auto package-unit-price-box center-content">
            <CustomText
              type={"x-medium"}
              children={`${tokens.RIAL}/${tokens.MONTHLY}`}
              customStylesClass={"package-unit-price"}
            />
          </div>
        </div>
        <div className="package-data">
          <div className="row section-data m-0">
            <RowItemInformation
              image={images.hdd}
              title={`${tokens.TRAFFIC}`}
              value={props.trafficCapacity}
            />
            <RowItemInformation
              image={images.ram}
              title={`${tokens.RAM}`}
              value={`${tokens.GIG} ${props.ramCapcity}`}
            />
          </div>
          <div className="row section-data m-0">
            <RowItemInformation
              image={images.cpu}
              title={`${tokens.CPU}`}
              value={`${tokens.CORE} ${props.cpuCapacity}`}
            />
            <RowItemInformation
              image={images.hdd}
              title={`${tokens.SSD}`}
              value={`${tokens.GIG} ${props.storageCapacity}`}
            />
          </div>
        </div>
        <div className="package-cycle">
          <img src={images.arrow_down} className="arrow-down" />
          <select className="form-control form-selection">
            <option>{props.duration}</option>
          </select>
        </div>
        <div className="btn-submit-box">
          <button
            className="btn-submit"
            onClick={() => props.selectPackage(props.id)}
          >
            <div className="btn-text-box">
              <CustomText
                type={"medium"}
                children={
                  props.selectedPackage == props.id
                    ? tokens.PAYMENT
                    : tokens.SUBMIT
                }
                customStylesClass={"btn-text"}
              />
            </div>
            <div className="btn-icon-box">
              <img src={images.submit_icon} className="submit-icon" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackageItem;
