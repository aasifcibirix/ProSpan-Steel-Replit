/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Container, SectionImageBkg } from "src/components/Section";
import CallUs from "src/components/CallUs";
import AddressList from "src/components/AddressList";
import { ArrowLeftIcon } from "src/components/Icons";
import SocialNetwork from "src/components/SocialNetwork";

const FooterWrap = styled.footer`
  position: relative;
`;

const FooterContainer = styled.div`
  position: relative;
  background-color: #111415;
`;

const FooterTop = styled.div`
  position: relative;
  /* padding: 40px 0 0 0;
  @media (min-width: 1200px) {
    padding: 60px 0 0 0;
  }
  @media (min-width: 1600px) {
    padding: 80px 0 0 0;
  } */
`;

const MenuGrid = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -5px;
  @media (min-width: 576px) {
    margin: 0 -10px;
  }
`;

const MenuItemGrid = styled.div`
  position: relative;
  width: 100%;
  padding: 0 5px;
  @media (min-width: 576px) {
    padding: 0 10px;
  }
  &.menu-item {
    @media (min-width: 576px) {
      flex: 0 0 50%;
      max-width: 50%;  
    }
    @media (min-width: 1200px) {
      flex: 0 0 25%;
      max-width: 25%;
    }   
    &:nth-child(2), &:last-child{
      @media (min-width: 1200px) {
        flex: 0 0 auto;
        width: auto;
        max-width: 100%;
      }
    }
  }
`;

const MenuTitle = styled.div`
  color: #fff;
  font-weight: 300;  
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 30px;
  @media (min-width: 992px) {
    margin-bottom: 20px;
  }
`;

const AddressBlock = styled.div`
  margin: 0 0 30px;
  .list-title {
    color: #E9242A;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 30px;
  color: #fff;  
  &.menu-bdr{
    border:1px solid #fff;
    border-radius:10px;
    padding:15px;
    background: #0A0C0D;
    @media(min-width:992px){		
      border-radius:20px;
      padding:20px;
	  }
    @media(min-width:1600px){		      
      padding:30px;
	  }
    li{
      position: relative;
      display: flex;
      align-items: flex-start;
      color: #fff;
      font-weight: 400;
      gap:10px;
      i{
        svg{fill:#fff}
      }
      + li {
        margin-top: 6px;
        @media (min-width: 992px) {
          margin-top: 10px;
        }
      }
    }
  }
`;

const MenuItem = styled.li`
  margin: 0;
  padding: 0;
  + li {
    margin-top: 10px;
    @media (min-width: 992px) {
      margin-top: 20px;
    }
  }
  & a {
    position:relative;
    display:inline-flex;
    align-items:flex-start;
    color: #fff;
    position: relative;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    -webkit-transition: color 0.3s;
    -moz-transition: color 0.3s;
    transition: color 0.3s;
    &:before {
      position: absolute;
      top: 70%;
      left: 50%;
      color: transparent;
      content: '•';
      text-shadow: 0 0 transparent;
      font-size: 13pt;
      -webkit-transition: text-shadow 0.3s, color 0.3s;
      -moz-transition: text-shadow 0.3s, color 0.3s;
      transition: text-shadow 0.3s, color 0.3s;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      transform: translateX(-50%);
      pointer-events: none;
    }

    &:hover:before, &:focus:before {
      color: #fff;
      text-shadow: 10px 0 #fff, -10px 0 #fff;
    }

    &:hover, &:focus {
      color: #F32435;
    }


    @media (min-width: 992px) {
      font-size: 18px;
      line-height: 30px;
    }
    i{
      margin-right:10px;
      svg{
        fill:#fff;
        @media(min-width:576px){		
          fill:#000;
        }
      }
    }
    &:hover {
      color: #F32435;
      i{
        svg{fill:#F32435}
      }
    }
  }
`;

const FooterMiddle = styled.div`
  position: relative;
  padding: 30px 0 0 0;
  @media (min-width: 992px) {
    padding:40px 0 10px 0;
  }
  @media (min-width: 1200px) {
    padding:60px 0 30px 0;
  }
  @media (min-width: 1600px) {
    padding:90px 0 60px 0;
  }
`;

const FooterBottom = styled.div`
  position: relative;
  border-top:1px solid #000;
  background: #222628;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding: 6px 0;
  @media (min-width: 992px) {
    padding: 12px 0;
  }
`;

const Copyright = styled.div`  
  color: #6F6F6F;
  font-weight:300;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  @media (min-width: 576px) {
    font-size: 14px;
    line-height: 24px;
  }
  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 26px;
  }
  & span{
    display:inline-block;
    margin:0 15px;
  }
  & a {
    position: relative;
    display: inline-block;
    color: #6F6F6F;    
    &:hover {
      color: #fff;     
    }
  }
  & i{
    display:inline-block;
    font-style: normal;
    color: #6F6F6F;
    padding:0 10px;
  }
`;

const NavBrandBlock = styled.div`
  margin:0 0 30px;
  + div{
    border-top:1px solid #000;
    padding-top:20px;
  }
`;

const NavBrand = styled(Link)`  
  display:block;
  margin-bottom:15px;
  .gatsby-image-wrapper{
    display: inline-block;
    width:100px;
    @media (min-width: 992px) {
      width:138px;
    }
    @media (min-width: 1200px) {
      width:158px;
    }
    @media (min-width: 1600px) {
      width:auto;
    }
  }
`;

const NavTextBrand = styled.p`  
  display: block;
  font-size: 16px;
  line-height: 28px;
  color: #fff;
  max-width: 340px;
  width: 100%;
  margin-bottom:20px;
`;

const Footer = ({ location }) => {
  const [thanksURL] = useState("");

  return (
    <FooterWrap>
      <FooterContainer>
        <FooterTop><CallUs location={location} thanksURL={thanksURL} /></FooterTop>
        <FooterMiddle>
          <SectionImageBkg $top="auto" $bottom="0" $width="auto" $height="auto"><StaticImage src="../../images/structure.png" placeholder="blurred" alt="ProSpan Steel" /></SectionImageBkg>
          <Container $maxWidth="1600px">
            <MenuGrid className="menu-grid">
              <MenuItemGrid className="menu-item">
                <NavBrandBlock>
                  <NavBrand to="/"><StaticImage src="../../images/footer-logo.svg" placeholder="blurred" alt="ProSpan Steel" /></NavBrand>
                  <NavTextBrand>ProSpan Steel delivers engineered red iron buildings with expert design, fast delivery, and nationwide service for commercial and industrial needs.</NavTextBrand>
                  <SocialNetwork />
                </NavBrandBlock>
                <NavBrandBlock>
                  <MenuTitle>Parent Company</MenuTitle>
                  <NavBrand to="https://www.buildingsandmore.com/" target="_blank"><StaticImage src="../../images/bam-logo.svg" placeholder="blurred" alt="Buildings And More" /></NavBrand>
                </NavBrandBlock>
              </MenuItemGrid>
              <MenuItemGrid className="menu-item">
                <MenuTitle>Quick Links</MenuTitle>
                <MenuList>
                  <MenuItem><Link to="/red-iron-buildings"><i><ArrowLeftIcon /></i>Red Iron Buildings</Link></MenuItem>
                  <MenuItem><Link to="/building-packages"><i><ArrowLeftIcon /></i>Building Packages</Link></MenuItem>
                  <MenuItem><Link to="/service-area"><i><ArrowLeftIcon /></i>Service Area</Link></MenuItem>
                  <MenuItem><Link to="/about-us"><i><ArrowLeftIcon /></i>About Us</Link></MenuItem>
                  <MenuItem><Link to="/contact-us"><i><ArrowLeftIcon /></i>Contact Us</Link></MenuItem>
                </MenuList>
              </MenuItemGrid>

              <MenuItemGrid className="menu-item">
                <MenuTitle>Contact Info</MenuTitle>
                <AddressBlock><AddressList /></AddressBlock>
              </MenuItemGrid>

              <MenuItemGrid className="menu-item">
                <MenuTitle>Why Trust Us?</MenuTitle>
                <MenuList className="menu-bdr">
                  <MenuItem><i><ArrowLeftIcon /></i>Assembled in USA</MenuItem>
                  <MenuItem><i><ArrowLeftIcon /></i>Pre-Engineered Structures</MenuItem>
                  <MenuItem><i><ArrowLeftIcon /></i>Red Iron Specialists</MenuItem>
                  <MenuItem><i><ArrowLeftIcon /></i>100% Steel Framing</MenuItem>
                  <MenuItem><i><ArrowLeftIcon /></i>Nationwide Delivery</MenuItem>
                  <MenuItem><i><ArrowLeftIcon /></i>High R-Value Insulation</MenuItem>
                  <MenuItem><i><ArrowLeftIcon /></i>Quick Turnaround</MenuItem>
                </MenuList>
              </MenuItemGrid>
            </MenuGrid>
          </Container>
        </FooterMiddle>
        <FooterBottom>
          <Container $maxWidth="1600px">
            <Copyright>© {new Date().getFullYear()} ProSpan Steel Buildings <i>|</i> <Link to="/privacy-policy/">Privacy Policy</Link> <i>|</i> <Link to="/terms-and-conditions">Terms of Use</Link> <i>|</i> Site by <a target="_blank" href="https://www.cibirix.com/">Cibirix</a> </Copyright>
          </Container>
        </FooterBottom>
      </FooterContainer>
    </FooterWrap>
  );
};

export default Footer;
