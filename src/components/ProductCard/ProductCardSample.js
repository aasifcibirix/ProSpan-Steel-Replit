/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react"
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { StyleProductCard, StyleProductBody, StyleProductSku, StyleProductFigure, StyleProductName, StyleProductAction, StyleProductInfo, StyleProductCta, StyleProductItemCta, StyleRtoInfo, StyleRtoItemInfo } from "../ProductStyle";
import DefaultLinkButton from "src/components/Button/DefaultLinkButton";
import WhiteLinkButton from "src/components/Button/WhiteLinkButton";
import { FastDeliveryIcon, CircleArrowIcon, CallIcon } from "src/components/Icons";
import { Context } from "../context"

const ProductCardSample = ({ thanksURL }) => {
  const { popupContext, setPopupContext } = useContext(Context);
  const HandleModalOpen = () => {
    setPopupContext({
      isVisible: true,
      thanksURL: thanksURL
    })
  }
  useEffect(() => {
    if (popupContext.isVisible === true) {
      document.querySelector("body").classList.add("modal-open")
    } else {
      document.querySelector("body").classList.remove("modal-open")
    }
  }, [popupContext, setPopupContext])
  return (
    <StyleProductCard className="card card-product">
      <StyleProductFigure className="card-figure">
        <Link to="/"><StaticImage src="../../images/product.jpg" alt="product" /></Link>
      </StyleProductFigure>
      <StyleProductBody className="card-body">
        <StyleProductName className="product-name"><Link to="/">40x80 Red Iron Utility Building</Link></StyleProductName>
        <StyleProductSku className="product-sku">SKU:PSS 150</StyleProductSku>
        <StyleRtoInfo className="rto-info">
          {/* <StyleRtoItemInfo className="rto-item">
            <span className="icon"><FinanceIcon /></span>
            <span className="text">Financing Available</span>
          </StyleRtoItemInfo> */}
          <StyleRtoItemInfo className="rto-item">
            <span className="icon"><FastDeliveryIcon /></span>
            <span className="text">Delivery & Installation Included</span>
          </StyleRtoItemInfo>
        </StyleRtoInfo>
        <StyleProductInfo className="product-info">
          {/* <StyleProductPrice className="product-price">
            <small>Starting Price:</small> <span>$21,120</span>
          </StyleProductPrice> */}
          <StyleProductCta>
            <StyleProductItemCta className="product-item-cta">
              <button type="button" onClick={HandleModalOpen}>
                <WhiteLinkButton icon={<CircleArrowIcon />} text="Get A Quote" />
              </button>
            </StyleProductItemCta>
            <StyleProductItemCta className="product-item-cta">
              <a href="tel:3862470255" aria-label="phone number">
                <WhiteLinkButton icon={<CallIcon />} text="(386) 247-0255" />
              </a>
            </StyleProductItemCta>
          </StyleProductCta>
        </StyleProductInfo>
        <StyleProductAction className="card-footer">
          <Link to="/"><DefaultLinkButton text="View Details" /></Link>
        </StyleProductAction>
      </StyleProductBody>
    </StyleProductCard>
  );
};
export default ProductCardSample;
