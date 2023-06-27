import { useCallback, useState } from "react";
import "../styles/packageItem.css";
import CustomText from "./CustomText";
import tokens from "../utils/tokens";
import images from "../utils/images";
import RowItemInformation from "./RowItemInformation";
import { convert_price } from "../utils/generalFunctions";

function PackageItem(props) {
  const [index, setIndex] = useState(0)
  let product = props.items[index] 

  const onChangePackage = useCallback((event) => {
    setIndex(event.target.value)
  }, [])

  const selectPackage = useCallback(() => {
    props.selectPackage(product.id)
  }, [index])

  return (
    <div className="package-item-container" key={product.id}>
      <div
        className={
          "item" +
          (props.selectedPackage == product.id ? " package-item-selected" : "")
        }
      >
        {props.selectedPackage == product.id && (
          <div className="package-item-selected-icon">
            <img src={images.submit_icon} className="selected-icon" />
          </div>
        )}
        <div className="package-image" >
          <div className="package-image-box">
            <img
              src={images.background_products}
              className="background-product"
            />
            <img
              src={images.background_products_margin}
              className="background-product-margin"
            />
            <img src={images[product.packageName]} className="product-image" />
            {!!product.discountPercent && (
              <div className="percent-discount">
                <CustomText
                  type={"medium"}
                  children={`%${product.discountPercent}`}
                  customStylesClass={"percent-discount-text"}
                />
              </div>
            )}
          </div>
        </div>
        <div className="package-name">
          <CustomText
            type={"large"}
            children={product.packageName}
            customStylesClass={"package-name-text"}
          />
        </div>
        <div className="row package-price">
          <div className="w-auto package-price-container">
            <div className="package-price-box">
              <CustomText
                type={"medium"}
                children={!!product.discount ? convert_price(product.price / 10) : ''}
                customStylesClass={"package-discount-percent"}
              />
            </div>
            <div className="package-price-box">
              <CustomText
                type={"x-large"}
                children={!!product.discount ? convert_price((product.price - product.discount) / 10) : convert_price(product.price/10)}
                customStylesClass={"package-price-text"}
              />
            </div>
          </div>
          <div className="w-auto package-unit-price-box center-content" >
            <CustomText
              type={"small"}
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
              value={product.trafficCapacity}
            />
            <RowItemInformation
              image={images.ram}
              title={`${tokens.RAM}`}
              value={`${tokens.GIG} ${product.ramCapcity}`}
            />
          </div>
          <div className="row section-data m-0">
            <RowItemInformation
              image={images.cpu}
              title={`${tokens.CPU}`}
              value={`${tokens.CORE} ${product.cpuCapacity}`}
            />
            <RowItemInformation
              image={images.hdd}
              title={`${tokens.SSD}`}
              value={`${tokens.GIG} ${product.storageCapacity}`}
            />
          </div>
        </div>
        <div className="package-cycle">
          <img src={images.arrow_down} className="arrow-down" />
          <select className="form-control form-selection" value={index} onChange={onChangePackage}>
            {props.items.map((item, index) => {
                return <option value={index}>{item.duration}</option>
              })
            }
          </select>
        </div>
        <div className="btn-submit-box">
          <button
            className="btn-submit"
            onClick={selectPackage}
          >
            <div className="btn-text-box">
              <CustomText
                type={"medium"}
                children={
                  props.selectedPackage == product.id
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
