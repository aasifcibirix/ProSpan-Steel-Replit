/* eslint-disable no-dupe-keys */
import React, { useRef } from "react";
import Slider from "react-slick"
import styled from "styled-components";
import ProductCard from "src/components/ProductCard";

const SlickSlider = styled.div`
  position:relative;
  z-index: 1;
  overflow: hidden;
  border-radius:10px;
  @media (min-width:992px) {
    border-radius:20px;
  }
  @media (min-width:1200px) {
    border-radius:30px;    
  }
  @media (min-width:1600px) {
    border-radius:40px;
  }
  .slick-arrow{
    border-radius:50%;
    border:1px solid #fff;
    display:flex;
    align-items:center;
    justify-content:center;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    position:absolute;
    z-index:1;
    position: absolute;
    right: 0;
    top:auto;
    width:32px;
    height:32px;
    bottom: 5px;
    @media (min-width:1200px) {
      bottom: 0;
      width:42px;
      height:42px;
     }
    &:before{
      display:none;
    }
    > svg{
      fill:#fff;
    }
    &.slick-prev{
      left:auto;
      right:55px;
      @media (min-width:1200px) {
        right:120px;
      }
    }
    &.slick-next{   
      left:auto;
      right:15px;
      @media (min-width:1200px) {
        right:65px;
      }
    }
  }
`;

const SlickItem = styled.div`   
  @media (min-width:992px) {
    padding:0 10px;
  }
`;

const ProductCardCarousel = ({ productList }) => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    focusOnSelect: true,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,

        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      }
    ],
  };
  const sliderRef = useRef(null);

  return (
    <SlickSlider>
      <Slider {...settings} ref={sliderRef}>
        {productList.map(d =>
          <SlickItem key={d.id}>
            <ProductCard data={d} />
          </SlickItem>
        )}
      </Slider>
    </SlickSlider>
  );
}


export default ProductCardCarousel;