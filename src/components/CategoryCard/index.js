/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  CategoryCard,
  CategoryCaption,
  CategoryFigure,
  CategoryName,
  CategoryAction
} from "../CategoryStyle";
import { ArrowLineIcon } from "../Icons";


const CategoryCards = ({item}) => {
  return (
    <CategoryCard className="card card-categroy">
        <CategoryFigure className="card-figure">
            <StaticImage src="../../images/product.jpg" alt="product" />
        </CategoryFigure>
        <CategoryCaption className="card-caption">
          <CategoryName className="card-name" to="/">{item}</CategoryName>  
          <CategoryAction className="card-action" to="/">
            <span className="text">View Details</span>
            <span className="icon"><ArrowLineIcon /></span>
          </CategoryAction>
        </CategoryCaption>
    </CategoryCard>
  );
};
export default CategoryCards;
