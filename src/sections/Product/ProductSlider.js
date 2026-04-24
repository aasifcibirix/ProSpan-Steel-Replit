import React, { useRef } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import { PointerLeftIcon, PointerRightIcon } from 'src/components/Icons';

const SlickSlider = styled.div`
  position:relative;
  z-index: 1;
  overflow: hidden;
  border-radius:10px;
  margin:10px;  
  @media (min-width:992px) {
    border-radius:20px;
  }
  @media (min-width:1200px) {
    border-radius:30px;
    margin:10px 0 2px 10px;  
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
    >svg{
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
`
const SlickItem = styled.div`
  .gatsby-image-wrapper, img{
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

  }
`
function CirclePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
      aria-hidden="true"
    >
      <PointerLeftIcon />
    </div>
  );
}

function CircleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
      aria-hidden="true"
    >
      <PointerRightIcon />
    </div>
  );
}


const HeroCarousel = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    focusOnSelect: true,
    arrows: true,
    nextArrow: <CircleNextArrow />,
    prevArrow: <CirclePrevArrow />,
  };
  const sliderRef = useRef(null);

  return (
    <SlickSlider>
      <Slider  {...settings} ref={sliderRef}>
        <SlickItem>
          <StaticImage src="../../images/product-img.jpg" alt="Product Name" />
        </SlickItem>
        <SlickItem>
          <StaticImage src="../../images/product-img.jpg" alt="Product Name" />
        </SlickItem>
        <SlickItem>
          <StaticImage src="../../images/product-img.jpg" alt="Product Name" />
        </SlickItem>
      </Slider>
    </SlickSlider>
  );
}


export default HeroCarousel;