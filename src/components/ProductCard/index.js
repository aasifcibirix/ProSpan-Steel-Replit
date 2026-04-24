/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react"
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { StyleProductCard, StyleProductBody, StyleProductSku, StyleProductFigure, StyleProductName, StyleProductAction, StyleProductInfo, StyleProductCta, StyleProductItemCta, StyleRtoInfo, StyleRtoItemInfo } from "src/components/ProductStyle";
import DefaultLinkButton from "src/components/Button/DefaultLinkButton";
import WhiteLinkButton from "src/components/Button/WhiteLinkButton";
import { FastDeliveryIcon, CircleArrowIcon, CallIcon } from "src/components/Icons";
import { cleanUrlSlash } from "src/utils";
import { Context } from "../context"


const ProductCard = ({ data, location }) => {
  const productLink = cleanUrlSlash(`${data.pageTemplate.url}/${data.slug}`)
  const { popupContext, setPopupContext } = useContext(Context);
  const HandleModalOpen = () => {
    setPopupContext({
      isVisible: true,
      thanksURL: "thank-you-quote-popup",
      sourceURL: productLink,
      productDetail: `ProductName:${data.title}, ProductSKU:${data.sku}`
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
        <Link to={productLink}>
          <GatsbyImage image={data.imageMain.gatsbyImageData} alt={data.title} />
        </Link>
      </StyleProductFigure>
      <StyleProductBody className="card-body">
        <StyleProductName className="product-name">
          <Link to={productLink}>
            {data.title}
          </Link>
        </StyleProductName>
        <StyleProductSku className="product-sku">
          SKU:{data.sku}
        </StyleProductSku>
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
            <small>Starting Price:</small> <span>${data.price.toLocaleString()}</span>
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
          <Link to={productLink}>
            <DefaultLinkButton text="View Details" />
          </Link>
        </StyleProductAction>
      </StyleProductBody>
    </StyleProductCard>
  );
};
export default ProductCard;
