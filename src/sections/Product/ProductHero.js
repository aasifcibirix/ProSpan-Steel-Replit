import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import { CallIcon, CircleArrowIcon, FinanceIcon, FastDeliveryIcon } from 'src/components/Icons';
import { BreadCrumb, Container } from "src/components/Section";
import { HeroBanner, HeroCover, HeroImage } from "src/components/Hero";
import ProductSlider from "./ProductSlider"
import styled from "styled-components";
import PrimaryButton from "src/components/Button/PrimaryButton";
import WhiteOutlineButton from "src/components/Button/WhiteOutlineButton";

const HeroCovers = styled(HeroCover)`
  &:after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    opacity: 0.9;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) -22.39%, #000 100%);
    backdrop-filter: blur(150px);
    -webkit-backdrop-filter: blur(150px);
  }
`
const Row = styled.div`
  display:flex;
  flex-wrap:wrap; 
`;

const ColLeft = styled.div`
  position:relative;
  width:100%;
  @media(min-width:1200px){
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
  }  
`;
const ColRight = styled.div`
  position:relative;
  width:100%;
  @media(min-width:1200px){
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }  
`;


const HeroProduct = styled.section`
   background-color:#fff;
`;

const ProductWrap = styled.div`
    margin-top:-25%;
  @media (min-width:1200px) {
    margin-top:-15%;
  }
  @media (min-width:1600px) {
  margin-top:-20%;
  }
  .breadcrumb{
    padding:0;
    @media (min-width:768px) {
      padding:0 30px;
    }
    @media (min-width:992px) {
      padding:0 40px;
    }
  }
`;

const ProductBox = styled.div`
  position:relative;
  overflow: hidden;    
  @media (max-width:767.98px) {
    margin:0 -20px;
  }
  &:after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    background: #0C0F10;
    overflow:hidden;
    width:100%;
    height:100%;
    @media (min-width:992px) {
      border-radius:20px;    
    }
    @media (min-width:1200px) {
      width:calc(100% - 55px);
      height:100%;
      border-radius:30px;    
    }
    @media (min-width:1600px) {
      border-radius:40px;    
    }        
  }
   
`;

const ProductInfo = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  background: rgba(0, 0, 0, 0.85);    
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-radius:5px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  padding:15px;
  margin: 0;    
  text-align: center;
  @media (min-width:768px) {
    margin: 10px;    
  }
  @media (min-width:992px) {
    padding:15px 20px;
    border-radius:15px;
  }
  @media (min-width:1200px) {
    left: -55px;
    height: calc(100% - 20px);
    border-radius:25px;
    padding:15px 25px;
    text-align: left;
  }
  @media (min-width:1600px) {
    border-radius:35px;
    padding:15px 70px;
  }
   
`;

const ProductBodyInfo = styled.div`
   
`;


const ProductSku = styled.div` 
  position:relative;
  background-color:#F32435;
  display: inline-flex;
  padding: 5px 10px 5px 30px;
  color: #FFF;
  font-family: Rajdhani;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  margin-bottom:10px;
  border-radius:15px;
  &:after{
    content:'';
    position:absolute;
    left:10px;
    top:50%;
    transform:translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: #B6111E;
    border-radius:50%;
  }
`;

const ProductName = styled.h1`
  margin-bottom: 10px;
  color: #fff;
  font-size: 22px;
  line-height: 26px;
  @media (min-width: 992px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media (min-width: 1200px) {
    font-size: 34px;
    line-height: 38px;
  }
  @media (min-width: 1600px) {
    font-size: 40px;
    line-height: 46px;
  }  

`;


const ProductPrice = styled.div`
  background: #1C1C1C;
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  margin-bottom:20px;
  padding:15px;
  border-radius: 8px;
  flex-direction:column;
  @media (min-width: 1400px) {
    gap:20px;    
    padding:20px;
    border-radius: 12x;
    max-width:470px;
    width:100%;
    flex-direction:row;
  }
  @media (min-width: 1600px) {
    margin-bottom:30px;
    border-radius: 15px;
  }
`;


const PriceValue = styled.div`
  display:flex;
  flex:wrap;
  align-items:center;
  font-weight: 600;
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  gap:10px;    
  @media (min-width: 576px) {
    font-size: 24px;
    line-height: 34px;
  }
  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }
  @media (min-width: 992px) {
    font-size: 36px;
    line-height: 46px;
  }
  @media (min-width: 1200px) {
    font-size: 40px;
    line-height: 50px;
  }
  
  small {
    color: #fff;
    font-weight:300;
    font-size: 14px;
    line-height: 24px;
    @media (min-width: 576px) {
    font-size: 16px;
    line-height: 26px;
    }
    @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 28px;
    }
    @media (min-width: 1600px) {
    font-size: 20px;
    line-height: 30px;
    }
  }
`;
const PriceHelpText = styled.div`
  font-size:12px;
  line-height:18px;
  font-weight:300;
  color: #fff;
  @media (min-width: 1400px) {
    max-width:140px;
    width:100%;
  }
`;

const RtoInfo = styled.div`
  display: flex;
  flex-wrap: wrap;  
  font-weight:300;
  margin: 0 -5px 20px  -5px;
  justify-content:center;
  @media (min-width: 1200px) {
    justify-content:left;
  }
  @media (min-width: 1600px) {
  margin: 0 -10px 30px -10px;
  }
`;
const RtoItemInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding:0 5px;
  @media (min-width: 1600px) {
  padding:0 10px;
  }
  .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  @media (min-width: 576px) {
    height: 20px;
  }
  > svg {
    fill: #5D5D5D;
    width: 14px;
    @media (min-width: 576px) {
    width: auto;
    }
  }
  + .text {
    margin-left: 10px;
  }
  }
  .text {
  color: #5D5D5D;
  font-size: 10px;
  line-height: 18px;
  font-weight:400;
  @media (min-width: 576px) {
    font-size: 12px;
    line-height: 18px;
  }
  @media (min-width: 1600px) {
    font-size: 16px;
  }
  }  

`;
const ProductCta = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  margin: 0 -5px 20px -5px;
  @media (min-width: 1600px) {
  margin: 0 -10px 30px -10px;;
  }
`;

const ProductItemCta = styled.div`
  position: relative;
  width: 100%;
  padding: 0 5px;
  
  @media (min-width: 576px) {    
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  }
  @media (min-width: 1600px) {
  padding: 0 10px;
  }
  
  a, button{
  display:block;
  width:100%;
  height:100%;
  .btn{
    display:flex;
    padding-left:0;
    padding-right:0;
    border-radius:8px;
    @media (min-width: 1200px) {
    border-radius:10px;
    }
    @media (min-width: 1600px) {
    border-radius:12px;
    }
    .icon{
    svg{
      width:20px;
      height:20px;
      @media (min-width: 1600px) {
      width:auto;
      height:auto;
      }
    }
    }
    &:hover, &:focus{
    .icon{
      svg{
      @media (min-width: 1200px) {
        width:20px;
        height:20px;
      }
      @media (min-width: 1600px) {
        width:auto;
        height:auto;
      }
      }
    }
    }
  }
  }
`;

const ColorList = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
  margin:0 -8px;
  padding:0 10px;
  @media (min-width: 1600px) {
    padding:0;
    margin:0 -10px;
  }
`
const ColorItemList = styled.div`
  position:relative;
  flex: 0 0 auto;
  width: auto;
  max-width: none;
  padding:8px;
  @media (min-width: 1600px) {
    padding:10px;
  }
  &:nth-child(1){.color-image{background-color: #BDA790;}}
  &:nth-child(2){.color-image{background-color: #8E3C3E;}}
  &:nth-child(3){.color-image{background-color: #8B9093;}}
  &:nth-child(4){.color-image{background-color: #CDC6B4;}}
  &:nth-child(5){.color-image{background-color: #70A6D1;}}
  &:nth-child(6){.color-image{background-color: #1D478E;}}
  &:nth-child(7){.color-image{background-color: #436246;}}
  &:nth-child(8){.color-image{background-color: #BCA487;}}
  &:nth-child(9){.color-image{background-color: #8E5744;}}
  &:nth-child(10){.color-image{background-color: #5B5145;}}
  &:nth-child(11){.color-image{background-color: #000000;}}
  &:nth-child(12){.color-image{background-color: #B4AFAC;}}
  &:nth-child(13){.color-image{background-color: #706B67;}}
  &:nth-child(14){.color-image{background-color: #B31E2D;}}
  
`
const ColorBox = styled.div`
  display: flex;
  flex-direction:column;    
  .color-image{
    display: flex;
    justify-content:center;
    width:30px;
    height:30px;
    border-radius:50%;
    border:1px solid #2F3233;
    background-color: #D7D7D7;
    box-shadow: 0px -3px 0px 0px rgba(0, 0, 0, 0.25) inset;
    filter: drop-shadow(0px 7px 6.1px rgba(0, 0, 0, 0.60));
    overflow: hidden;
  }
   .color-name{
    position: absolute;
    transform: translate(-50%, 0px);
    left: 50%;
    display: block;
    top: -10px;
    color:#fff;
    text-align: center;
    letter-spacing: 0.5px;
    opacity: 0;
    transition-duration: 0.3s;
    transition-property: transform, opacity;
    white-space: nowrap;
    text-transform: capitalize;
    font-size: 10px;
    line-height: 20px;
    @media (min-width: 1200px) {
      font-size: 12px;
      line-height: 24px;
    }
    
  }
  &:hover{    
    .color-name{
      opacity: 1;
      transform: translate(-50%, -5px);
    }
  }
`
const ColorTitle = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  color: #5D5D5D;
  font-size: 16px;
  line-height: 26px;
  font-weight: 300;
  margin-bottom:15px;
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #1B1B1B;
  }
`

const ProductHero = () => {
  const colorData = [
    {
      colorcode: "#5B5145",
      colorname: "burnished slate",
    },
    {
      colorcode: "#364037",
      colorname: "fern green",
    },
    {
      colorcode: "#A99F93",
      colorname: "desert sand",
    },
    {
      colorcode: "#706B67",
      colorname: "charcoal gray",
    },
    {
      colorcode: "#000000",
      colorname: "Black",
    },
    {
      colorcode: "#BDA790",
      colorname: "Saddle Tan",
    },
    {
      colorcode: "#8E3C3E",
      colorname: "rustic red",
    },
    {
      colorcode: "#DAD8DB",
      colorname: "polar white",
    },
    {
      colorcode: "#CDC6B4",
      colorname: "light stone",
    },
    {
      colorcode: "#627B8F",
      colorname: "Hawaiian blue",
    },
    {
      colorcode: "#6B4B40",
      colorname: "cocoa brown",
    },
    {
      colorcode: "#BDBEC8",
      colorImg: (
        <StaticImage
          src="../../images/galvalume.png"
          alt="Galvalume"
        />
      ),
      colorname: "galvalume",
    },
    {
      colorcode: "#A72734",
      colorname: "crimson red",
    },
    {
      colorcode: "#2B4673",
      colorname: "gallery blue",
    },
    {
      colorcode: "#B4AFAC",
      colorname: "ash gray",
    },
  ]
  return (
    <>
      <HeroBanner>
        <HeroCovers>
          <HeroImage><StaticImage src="../../images/product-banner.jpg" alt="product Banner" /></HeroImage>
        </HeroCovers>
      </HeroBanner>
      <HeroProduct>
        <Container>
          <ProductWrap>
            <BreadCrumb className="breadcrumb"><Link to="/">Home</Link><span>40x80 Red Iron Utility Building</span></BreadCrumb>
            <ProductBox>
              <Row>
                <ColLeft>
                  <ProductSlider />
                </ColLeft>
                <ColRight>
                  <ProductInfo>
                    <ProductBodyInfo>
                      <ProductSku>SKU PSS 150</ProductSku>
                      <ProductName>40x80 Red Iron Utility Building</ProductName>
                      <ProductPrice>
                        <PriceValue>
                          <small>Starting Price:</small> <span>$21,120</span>
                        </PriceValue>
                        <PriceHelpText>(Prices vary by state, location, & customization)</PriceHelpText>
                      </ProductPrice>

                      <RtoInfo>
                        <RtoItemInfo >
                          <span className="icon"><FinanceIcon /></span>
                          <span className="text">Financing Available</span>
                        </RtoItemInfo>
                        <RtoItemInfo>
                          <span className="icon"><FastDeliveryIcon /></span>
                          <span className="text">Delivery & Installation Included</span>
                        </RtoItemInfo>
                      </RtoInfo>

                      <ProductCta>
                        <ProductItemCta>
                          <a href="tel:3862470255" aria-label="phone number"><PrimaryButton icon={<CallIcon />} text="(386) 247-0255" /></a>
                        </ProductItemCta>
                        <ProductItemCta>
                          <Link to="/"><WhiteOutlineButton icon={<CircleArrowIcon />} text="Add To Cart" /></Link>
                        </ProductItemCta>
                      </ProductCta>

                      <ColorTitle><span>Available Colors:</span></ColorTitle>
                      <ColorList className="color-list">
                        {colorData.map((item, index) => (
                          <ColorItemList className="color-item" key={index}>
                            <ColorBox>
                              <span className="color-image"
                                style={!item.colorImg ? { backgroundColor: item.colorcode } : {}}
                              >
                                {item.colorImg}
                              </span>
                              <span className="color-name">{item.colorname}</span>
                            </ColorBox>
                          </ColorItemList>
                        ))}
                      </ColorList>


                      {/* <ColorList className="color-list">
                        <ColorItemList className="color-item">
                          <ColorBox>
                            <span className="color-image"></span>
                            <span className="color-name">Galvalume</span>
                          </ColorBox>
                        </ColorItemList>
                        <ColorItemList className="color-item">
                          <ColorBox>
                            <span className="color-image"></span>
                            <span className="color-name">Burgundy</span>
                          </ColorBox>
                        </ColorItemList>
                        <ColorItemList className="color-item">
                          <ColorBox>
                            <span className="color-image"></span>
                            <span className="color-name">Slate Blue</span>
                          </ColorBox>
                        </ColorItemList>
                        <ColorItemList className="color-item">
                          <ColorBox>
                            <span className="color-image"></span>
                            <span className="color-name">Barn Red</span>
                          </ColorBox>
                        </ColorItemList>
                        <ColorItemList className="color-item">
                          <ColorBox>
                            <span className="color-image"></span>
                            <span className="color-name">Pebble Beige</span>
                          </ColorBox>
                        </ColorItemList>
                        <ColorItemList className="color-item">
                          <ColorBox>
                            <span className="color-image"></span>
                            <span className="color-name">Rawhide</span>
                          </ColorBox>
                        </ColorItemList>
                        <ColorItemList className="color-item">
                          <ColorBox>
                            <span className="color-image"></span>
                            <span className="color-name">Bright Red</span>
                          </ColorBox>
                        </ColorItemList>
                        <ColorItemList className="color-item">
                          <ColorBox>
                            <span className="color-image"></span>
                            <span className="color-name">Quaker Gray</span>
                          </ColorBox>
                        </ColorItemList>
                        <ColorItemList className="color-item">
                          <ColorBox>
                            <span className="color-image"></span>
                            <span className="color-name">Royal Blue</span>
                          </ColorBox>
                        </ColorItemList>
                        <ColorItemList className="color-item">
                          <ColorBox>
                            <span className="color-image"></span>
                            <span className="color-name">Pewter Gray</span>
                          </ColorBox>
                        </ColorItemList>
                        <ColorItemList className="color-item">
                          <ColorBox>
                            <span className="color-image"></span>
                            <span className="color-name">Burnished Slate</span>
                          </ColorBox>
                        </ColorItemList>

                        <ColorItemList className="color-item">
                          <ColorBox>
                            <span className="color-image"></span>
                            <span className="color-name">Evergreen</span>
                          </ColorBox>
                        </ColorItemList>
                        <ColorItemList className="color-item">
                          <ColorBox>
                            <span className="color-image"></span>
                            <span className="color-name">White</span>
                          </ColorBox>
                        </ColorItemList>
                        <ColorItemList className="color-item">
                          <ColorBox>
                            <span className="color-image"></span>
                            <span className="color-name">Clay</span>
                          </ColorBox>
                        </ColorItemList>

                        <ColorItemList className="color-item">
                          <ColorBox>
                            <span className="color-image"></span>
                            <span className="color-name">Sandstone</span>
                          </ColorBox>
                        </ColorItemList>
                        <ColorItemList className="color-item">
                          <ColorBox>
                            <span className="color-image"></span>
                            <span className="color-name">Black</span>
                          </ColorBox>
                        </ColorItemList>
                        <ColorItemList className="color-item">
                          <ColorBox>
                            <span className="color-image"></span>
                            <span className="color-name">Earth Brown</span>
                          </ColorBox>
                        </ColorItemList>
                      </ColorList> */}
                    </ProductBodyInfo>
                  </ProductInfo>
                </ColRight>
              </Row>
            </ProductBox>
          </ProductWrap>
        </Container>
      </HeroProduct>
    </>
  );
}


export default ProductHero;