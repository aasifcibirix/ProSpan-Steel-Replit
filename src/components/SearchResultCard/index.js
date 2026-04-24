import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { StyleProductCard, StyleProductBody, StyleProductSku, StyleProductFigure, StyleProductName, StyleProductDesc, StyleProductAction } from "src/components/ProductStyle";

import DefaultLinkButton from "src/components/Button/DefaultLinkButton";

const SearchResultCardSample = () => {
  return (
    <StyleProductCard className="card card-product">
      <StyleProductFigure className="card-figure">
        <Link to="/"><StaticImage src="../../images/product.jpg" alt="product" /></Link>
      </StyleProductFigure>
      <StyleProductBody className="card-body">
        <StyleProductName className="product-name"><Link to="/">40x80 Red Iron Utility Building</Link></StyleProductName>
        <StyleProductSku className="product-sku">SKU:PSS 150</StyleProductSku>
        <StyleProductDesc className="product-desc"><p>A barndominium (or “barndo”) is a metal building that combines living space with functional areas like workshops, garages, or barns. Originally popular in rural areas, barndominiums are now trending nationwide thanks</p></StyleProductDesc>
        <StyleProductAction className="card-footer" $justifyContent="flex-start">
          <Link to="/">
            <DefaultLinkButton text="View Details" />
          </Link>
        </StyleProductAction>
      </StyleProductBody>
    </StyleProductCard>
  );
};
export default SearchResultCardSample;
