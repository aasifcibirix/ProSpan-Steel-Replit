/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby"
import { InsulationIcon, NationIcon, IBeamFrameIcon, FinIcon } from "src/components/Icons";
import { Container } from "src/components/Section";
import { CloseIcon, DownArrowIcon } from "src/components/Icons";
import CallToActon from "src/components/CallToActon";
import SearhBox from "src/components/SearchBox";
import RedIronBuildings from "./DropDown/red-iron-buildings";
import ResourcesDropdown from "./DropDown/resources-dropdown";
import ServiceDropdown from "./DropDown/service-dropdown";
import CompanyDropdown from "./DropDown/company-dropdown";
import logoImage from "../../images/logo.svg";


const HeaderWrap = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  height: 70px;
  background-color:#fff;
  display: flex;
  align-items: center;
  @media (min-width: 1200px) {
    height:144px;
    background-color:transparent;
    align-items: flex-start;
  }
  @media (max-width: 1199.98px) {
    /* overflow: hidden; */
    .container{
      padding-left:15px;
      padding-right:15px;
      height: 100%;
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 100%;
      /* overflow: hidden; */
    }
    .header-bottom{
      border-radius:0;
      margin:0;
      /* padding-left:15px;
      padding-right:15px; */
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      /* overflow: hidden; */
    }
  }
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:10px 30px;
  position:relative;
  &:after{
    content:'';
    position:absolute;
    left:0;
    right:0;
    height:94px;
    border-radius: 0px 0px 10px 10px;
    background: rgba(13, 10, 11, 0.95);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
  }
  @media (max-width: 1199.98px) {
    display:none;
  }
`;

const HederLeftTop = styled.div`
  position:relative;
  width:100%;
  flex: 0 0 auto;
  width: auto;
  max-width: none;
`;

const HeaderCenterTop = styled.div`
  position:relative;
  width:100%;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding: 0 30px;
`;

const HederRightTop = styled.div`
  position:relative;
  width:100%;
  flex: 0 0 auto;
  width: auto;
  max-width: none;
`;

const HeaderBottom = styled.div`
  position:relative;
  z-index:1;
  background: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;  
  box-sizing: border-box;
  /* @media (max-width: 1199.98px) {
    min-height: 70px;
    height: 70px;
    margin: 0;
    border-radius: 0;
    padding: 10px 15px;
    overflow: hidden;
    } */
  @media (min-width: 1200px) {
    border-radius:0 0 10px 10px;
    box-shadow: 0px 8px 12.7px -4px rgba(0, 0, 0, 0.10);
    border-radius: 10px;
    margin:0 20px;
    padding:10px;
    min-height: auto;
    height: auto;
  }
  @media (min-width: 1600px) {
    margin:0 30px;
  }
`;

const NavBrand = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  a {
    display: block;
    margin: 0;
    line-height: 0;
  }
  img {
    width: 80px;
    height: auto;
    display: block;
    margin: 0;
    @media (min-width: 1366px) {
      width: auto;
      height: 70px;
    }    
  }
`;

const NavbarNav = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: 0;
  @media (max-width: 1199.98px) {
    flex-direction:column;
    width:100%;
    flex: auto;
    justify-content: inherit;
  }
`;

const NavItem = styled.li`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  @media (min-width: 1200px) {
    width:auto;
  }
  + li {
    border-top: 1px solid #c6c6c6;
    @media (min-width: 1200px) {
      border-top:none;
      &:after{
        content: '/';
        position:absolute;
        left:-4px;
        top:50%;
        transform:translateY(-50%);
        color:#2B2B2B;
        font-weight: 300;
      }
    }
  }
  .dropdown-menu {
    @media (min-width: 1200px) {
      display: block;
      visibility: hidden;
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.3, 0, 0, 1.3) 0s;
    }
  }

  .nav-link {
    color: #161420;
    transition: all 0.5s ease-in-out;
    &:hover, &:focus{
      color: #F32435;
    }
    > a {
      color: #161420;
      transition: all 0.5s ease-in-out;
      &:hover, &:focus{
        color: #F32435;
      }
      @media (min-width: 1200px) {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        &:before,
        &:after {
          content: "";
          transition: 0.5s all ease;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          position: absolute;
          width: 0;
          height: 1px;
          background: rgba(255, 255, 255, 0.5);
        }
        &:before {
          right: 0;
          top: 0;
        }
        &:after {
          left: 0;
          bottom: 0;
        }
      }
    }
    .text {
      display:flex;
      padding:10px;
      width:100%;
      @media (min-width: 1200px) {
        display: inline-flex;
        width: auto;
        padding:0;
      }
      + .icon {
        margin-left: 5px;
      }
    }
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      > img {
        margin-bottom: 0;
      }
    }
    .caret {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease 0s;
      padding: 0;
      transform: rotate(0deg);
      width: 30px;
      height: 30px;
      @media (min-width: 1200px) {
        display: none;
        width: 10px;
        height: 10px;
      }
      > svg {
        fill: #161420;
        width: 14px;
        height: 14px;
        @media (min-width: 1200px) {
          width: 14px;
          height: 14px;
        }
      }
    }
  }

  &:hover,
  &.active {
    .nav-link {
      /* color:#e9242a; */
      font-weight: 600;
      > a {
        /* color:#e9242a; */       
      }
      @media (min-width: 1200px) {
        .caret {
          transform: rotate(180deg);
          > svg {
            fill: #161420;
          }
        }
      }
    }
    .dropdown-menu {
      @media (min-width: 1200px) {
        display: block;
        visibility: visible;
        opacity: 1;
        pointer-events: auto;
        transform: none;
      }
    }
  }

  &:last-child {
    .dropdown-menu {
      @media (min-width: 1200px) {
        right:0;
        left:auto;
      }
    }
  }
`;

const NavLink = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;  
  color: #2B2B2B;
  font-family: 'Rajdhani', serif;
  font-weight: 600; 
  padding:0;    
  font-size: 18px;
  line-height: 28px;
  @media (min-width: 1200px) {
    padding:0 15px;
    font-size: 16px;
    line-height: 28px;
  }
  @media (min-width: 1280px) {
    font-size: 18px;
    line-height: 28px;
  }
  @media (min-width: 1600px) {
    font-size: 20px;
    line-height: 30px;
    padding:0 20px;
  }
  .text {
    @media (min-width: 1200px) {

    }
    + .caret {
      margin-left: auto;
      @media (min-width: 1200px) {
        margin-left: 5px;
      }
    }
  }
  .caret {
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease 0s;
    width: 10px;
    height: 10px;
    padding: 0;
    transform: rotate(0deg);
    display: flex;
  }
  .icon {
    align-items: center;
    justify-content: center;
    display: none !important;
    @media (min-width: 1200px) {
      display: flex !important;
    }
  }
`;

const Navbar = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  min-width: 0;
  /* overflow: hidden; */
`;

const MainNavBar = styled.div`
  flex: 1;
  justify-content:flex-start;
  position:relative;
  display: flex;
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position:relative;
  @media (min-width: 1600px) {
    padding-left:20px;
  }
  
  .close-menu {
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 99;
    display: block;
    svg {
      fill: #161420;
      width: 20px;
      height: 15px;
    }
    @media (min-width: 1200px) {
      display: none;
    }
    &:hover {
      svg {
        fill: #e08932;
      }
    }
  }
  .search-form{
    .search-container{max-width:100%;}
    @media (min-width: 1200px) {
      display:none;
    }
  }

  @media (max-width: 1199.98px) {
    padding:30px 20px;
    flex-direction: column-reverse;
    width: 0;
    position: fixed;
    top: 64px;
    right: 0;
    height: calc(100vh - 64px);
    z-index: 99;
    transition: all 0.4s cubic-bezier(0.4,0,0.2,1) 0s;
    transform: translate3d(100%,0,0);
    overflow-y: auto;
    display: block;
    background: #fff;
    z-index: -1;
  }
`;

const TopNav = styled.div`
  position: relative;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  margin: 0;
  gap: 8px;
  flex-shrink: 0;
  @media (min-width: 768px) {
    gap: 12px;
  }
  @media (max-width: 575.98px) {
    gap: 6px;
  }
  .call-action{
    .btn{     
      
      @media (max-width: 1365.98px) {
        padding: 4px 12px;
        font-size: 18px;
        line-height: 24px;
        .icon{
          svg{
            width:20px;
            height:20px;
          }
        }
      }
      @media (max-width: 575.98px) {
      padding: 4px 8px;
      .text{display:none;}
      }

    }
   
     button{
    .btn{
        padding:0;
      }
    }

  }
`;

const TopNavItem = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0;
  flex-shrink: 0;

  &.hamburger-menu {
    display: flex;
    @media (min-width: 1200px) {
      display: none;
    }
  }
  .hamburger {
    vertical-align: middle;
    display: inline-block;
    padding: 8px;
    margin: 0;
  }
`;

const NavMenu = styled.div`
  position:relative;
  z-index:1;
  display:flex;
  flex-wrap:wrap;
  margin: 0 -5px;
  @media (min-width: 768px) {
    margin: 0 -10px;
  }
  @media (min-width: 1200px) {
    margin: 0 -15px;
  }
  @media (min-width: 1600px) {
    margin: 0 -20px;
  }
`;

const NavItemMenu = styled.div`
  position:relative;
  padding: 0 5px;
  @media (min-width: 768px) {
    padding: 0 10px;
  }
  @media (min-width: 1200px) {
    padding: 0 15px;
  }
  @media (min-width: 1600px) {
    padding: 0 20px;
  }
  + .nav-item-menu{
    border-left:1px solid #000;
  }
`;

const NavLinkMenu = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:14px;
  line-height:20px;
  color:#CACACA;
  .icon{
    height:20px;
    svg{
      fill:#CACACA;
    }
    + .text{
      margin-left:10px;
    }
  }
  .text{
    @media (max-width:991.98px) {
      display:none;
    }
  }
  a{
    display:flex;
    align-items:center;
    justify-content:center;
    color:#CACACA;
    &:hover{
      color:#fff;
      & svg{
        fill:#fff;
      }
    }
  }
`;



const Header = ({ location }) => {
  console.log("location:", location)
  const [isMenu, setisMenu] = useState(false);
  const [isDropDown, setDropDown] = useState(false);

  function hangleDropDown(index) {
    if (isDropDown === index) {
      return setDropDown(null);
    }
    setDropDown(index);
  }

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenu);
  }, [isMenu, setisMenu]);


  return (
    <>
      <HeaderWrap id="myHeader">
        <Container>
          <HeaderTop className="header-top">
            <HederLeftTop>
              <NavMenu className="nav-menu">
                <NavItemMenu className="nav-item-menu">
                  <NavLinkMenu className="link-menu">
                    <Link to="/service-area">
                      <span className="icon"><NationIcon /></span>
                      <span className="text">Nationwide Delivery</span>
                    </Link>
                  </NavLinkMenu>
                </NavItemMenu>
                <NavItemMenu className="nav-item-menu">
                  <NavLinkMenu className="link-menu">
                    <span className="icon"><IBeamFrameIcon /></span>
                    <span className="text">I-Beam Framing</span>
                  </NavLinkMenu>
                </NavItemMenu>
              </NavMenu>
            </HederLeftTop>
            <HeaderCenterTop>
              {location?.pathname !== "/search-result/" && <SearhBox />}
            </HeaderCenterTop>
            <HederRightTop>
              <NavMenu className="nav-menu">
                <NavItemMenu className="nav-item-menu">
                  <NavLinkMenu className="link-menu">
                    <Link to="/insulation">
                      <span className="icon"><InsulationIcon /></span>
                      <span className="text">Insulation</span>
                    </Link>
                  </NavLinkMenu>
                </NavItemMenu>
                {/* <NavItemMenu className="nav-item-menu">
                  <NavLinkMenu className="link-menu">
                    <Link to="/financing">
                      <span className="icon"><FinIcon /></span>
                      <span className="text">Financing</span>
                    </Link>
                  </NavLinkMenu>
                </NavItemMenu> */}
              </NavMenu>
            </HederRightTop>
          </HeaderTop>
          <HeaderBottom className="header-bottom">
            <NavBrand>
              <Link to="/">
                <img src={logoImage} alt="ProSpan Steel" loading="eager" fetchPriority="high" />
              </Link>
            </NavBrand>
            <Navbar>
              <MainNavBar>
                <Nav className="nav">
                  <SearhBox />
                  <NavbarNav>
                    <NavItem>
                      <NavLink className="nav-link">
                        <Link to="/shop" role="button" tabIndex="0" className="text">Shop</Link>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link">
                        <Link to="/red-iron-buildings" role="button" tabIndex="0" className="text">Red Iron Buildings</Link>
                        <button
                          aria-label="span"
                          className="caret"
                          onClick={() => hangleDropDown(1)}
                        >
                          {isDropDown === 1 ? <CloseIcon /> : <DownArrowIcon />}
                        </button>
                      </NavLink>
                      <RedIronBuildings
                        isActive={isDropDown === 1 ? true : false}
                      />
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link">
                        <Link to="/building-packages" role="button" tabIndex="0" className="text">Building Packages</Link>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink className="nav-link">
                        <Link to="/service-area" role="button" tabIndex="0" className="text">Service Area</Link>
                        <button
                          aria-label="span"
                          className="caret"
                          onClick={() => hangleDropDown(2)}
                        >
                          {isDropDown === 2 ? <CloseIcon /> : <DownArrowIcon />}
                        </button>
                      </NavLink>
                      <ServiceDropdown
                        isActive={isDropDown === 2 ? true : false}
                      />
                    </NavItem>

                    <NavItem>
                      <NavLink className="nav-link">
                        <span role="button" tabIndex="0" className="text">Resources</span>
                        <button
                          aria-label="span"
                          className="caret"
                          onClick={() => hangleDropDown(3)}
                        >
                          {isDropDown === 3 ? <CloseIcon /> : <DownArrowIcon />}
                        </button>
                      </NavLink>
                      <ResourcesDropdown
                        isActive={isDropDown === 3 ? true : false}
                      />
                    </NavItem>

                    <NavItem>
                      <NavLink className="nav-link">
                        <span role="button" tabIndex="0" className="text">Company</span>
                        <button
                          aria-label="span"
                          className="caret"
                          onClick={() => hangleDropDown(4)}
                        >
                          {isDropDown === 4 ? <CloseIcon /> : <DownArrowIcon />}
                        </button>
                      </NavLink>
                      <CompanyDropdown
                        isActive={isDropDown === 4 ? true : false}
                      />
                    </NavItem>
                  </NavbarNav>
                </Nav>
              </MainNavBar>
              <TopNav className="topnav">
                <TopNavItem className="topnav-item"><CallToActon location={location} /></TopNavItem>
                <TopNavItem className="topnav-item hamburger-menu">
                  <button
                    type="button"
                    aria-label="Hamburger Menu"
                    onClick={() => setisMenu(!isMenu)}
                    className="hamburger icon"
                  >
                    <i className="line icn"></i>
                  </button>
                </TopNavItem>
              </TopNav>
            </Navbar>
          </HeaderBottom>
        </Container>
      </HeaderWrap>
    </>
  );
};

export default Header;