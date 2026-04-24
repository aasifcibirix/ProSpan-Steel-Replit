import styled from "styled-components";
import Pointer from "../../images/pointer.svg";

export const Section = styled.section`
  background-image: ${(props) => props.$bgImg || "inherit"};
  background-color: ${(props) => props.$bgcolor || "#000"};
  background-size: ${(props) => props.$bgSize || "inherit"};
  height: ${(props) => props.$ht};
  text-align: ${(props) => props.$textAlign || "left"};
  position: relative;
  z-index: ${(props) => props.$zIndex};
  padding-top: ${(props) => props.$pt || "40px"};
  padding-bottom: ${(props) => props.$pb || "40px"};
  overflow: ${(props) => props.$overflow};
  &:before,
  &:after {
    content: "";
    position: absolute;
  }
  &:before {
    display: ${(props) => (props.$bgBefore ? "block" : "none")};
    top: ${(props) => props.$topBefore || 0};
    right: ${(props) => props.$rightBefore};
    bottom: ${(props) => props.$bottomBefore};
    left: ${(props) => props.$leftBefore};
    background: ${(props) => props.$bgBefore};
    background-size: ${(props) => props.$bgBeforeSize};
    background-repeat: ${(props) => props.$bgBeforeRepeat};
    width: ${(props) => props.$bgBeforeWidth};
    height: ${(props) => props.$bgBeforeHeight};
    opacity: ${(props) => props.$opacityBefore};
  }
  &:after {
    display: ${(props) => (props.$bgAfter ? "block" : "none")};
    top: ${(props) => props.$topAfter || 0};
    right: ${(props) => props.$rightAfter};
    bottom: ${(props) => props.$bottomAfter};
    left: ${(props) => props.$leftAfter};
    background: ${(props) => props.$bgAfter};
    background-size: ${(props) => props.$bgAfterSize};
    background-repeat: ${(props) => props.$bgAfterRepeat};
    width: ${(props) => props.$bgAfterWidth};
    height: ${(props) => props.$bgAfterHeight};
    opacity: ${(props) => props.$opacityAfter};
  }
  @media(min-width:992px){
		padding-top: ${(props) => props.$lpt};
		padding-bottom: ${(props) => props.$lpb};
		margin-top: ${(props) => props.$lmt};
	}
  @media(min-width:1200px){
		padding-top: ${(props) => props.$xpt || "60px"};
		padding-bottom: ${(props) => props.$xpb || "60px"};
	}
	@media(min-width:1600px){
		padding-top: ${(props) => props.$ept || "80px"};
		padding-bottom: ${(props) => props.$epb || "80px"};
	}
`;

export const Container = styled.div`
  position: relative;
  z-index: ${(props) => props.$zIndex};
  max-width: ${(props) => props.$maxWidth};
  width: 100%;  
  margin-left: ${(props) => props.$ml};
  margin-right: ${(props) => props.$mr};
  padding: 0 20px;
  @media(min-width:1200px){
    padding: 0 30px;
  }
  @media(min-width:1600px){
    padding: 0 50px;
  }
`;

Container.defaultProps = {
  $zIndex: "inherit",
  $maxWidth: "1920px",
  $ml: "auto",
  $mr: "auto"
};
export const ContainerFluid = styled.div`
  position: relative;
  z-index: ${(props) => props.$zIndex || "inherit"};
  max-width: ${(props) => props.$maxWidth || "100%"};
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  @media(min-width:1200px){
    padding: 0 30px;
  }
  @media(min-width:1600px){
    padding: 0 50px;
  }
`;

export const SectionImageBkg = styled.div`
  position: absolute;
  z-index: 0;
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "100%"};
  top: ${(props) => props.$top || 0};
  bottom: ${(props) => props.$bottom};
  left: ${(props) => props.$left || 0};
  right: ${(props) => props.$right || "auto"};
  opacity: ${(props) => props.$opacity || "inherit"};
  background-color: ${(props) => props.$bgcolor};
  overflow: ${(props) => props.$overflow};
  > .gatsby-image-wrapper {
    opacity: ${(props) => props.$opacityImg};
    width:100%;
    height:100%;
  }
  &:after {
    content: "";
    display: ${(props) => (props.$bgAfter ? "block" : "none")};
    position: absolute;
    top: ${(props) => props.$topAfter || 0};
    left: ${(props) => props.$leftAfter || 0};
    right: ${(props) => props.$rightAfter};
    background-color: ${(props) => props.$bgAfter};
    width: ${(props) => props.$widthAfter || "100%"};
    height: ${(props) => props.$HeightAfter || "100%"};
  }
`;

export const SectionPageTitle = styled.h1`
  max-width: ${(props) => props.$maxWidth || "100%"};
  color: ${(props) => props.$textColor || "#fff"};
  text-align: ${(props) => props.$textAlign || "left"};
  margin-top: ${(props) => props.$mt || 0};
  margin-bottom: ${(props) => props.$mb || "10px"};
  margin-left: ${(props) => props.$ml || "auto"};
  top: ${(props) => props.$top || "auto"};
  margin-right: auto;
  width: 100%;
  text-transform: ${(props) => props.$textTransform};
  position: relative;
  z-index: 1;
  letter-spacing: -0.5px; 
  @media (min-width: 768px) {
    letter-spacing: -1px;
  }
`;

export const SectionTitle = styled.h2`
  max-width: ${(props) => props.$maxWidth || "100%"};
  color: ${(props) => props.$textColor || "#0D0A0B"};
  text-align: ${(props) => props.$textAlign || "left"};
  margin-top: ${(props) => props.$mt || "auto"};
  margin-bottom: ${(props) => props.$mb || "10px"};
  margin-left: ${(props) => props.$ml || "auto"};
  top: ${(props) => props.$top || "auto"};
  margin-right: auto;
  width: 100%;
  position: relative;
  z-index: 1;
  letter-spacing: -0.5px;
  @media (max-width: 767.98px) {
    text-align: ${(props) => props.$mdTextAlign};
  }
  @media (min-width: 768px) {
    letter-spacing: -1px;
  }
  text-transform: ${(props) => props.$textTransform || "uppercase"};  
  span{
    display:block;
  }
  p{
    margin:0;
    font-size: 30px;
    line-height: 34px;

    @media (max-width: 767.98px) {
      margin-bottom: ${(props) => props.$md || "0"};
    }
    
    @media (min-width: 576px) {
      font-size: 36px;
      line-height: 40px;
    }

    @media (min-width: 768px) {
      font-size: 42px;
      line-height: 46px;
    }

    @media (min-width: 992px) {
      font-size: 48px;
      line-height: 52px;
    }

    @media (min-width: 1200px) {
      font-size: 54px;
      line-height: 58px;
    }

    @media (min-width: 1600px) {
      font-size: 60px;
      line-height: 64px;
    }
  }
`;

export const SectionSubTitle = styled.span`
  max-width: ${(props) => props.$maxWidth || "100%"};
  color: ${(props) => props.$textColor};
  text-align: ${(props) => props.$textAlign};
  margin-bottom: ${(props) => props.$mb || 0};
  width: 100%;
`;

export const SectionDescription = styled.div`
  position: relative;
  margin-left: ${(props) => props.$ml || "auto"};
  margin-right: ${(props) => props.$mr || "auto"};
  margin-bottom: ${(props) => props.$mb || "30px"};
  text-align: ${(props) => props.$textAlign || "left"};
  max-width: ${(props) => props.$maxWidth || "100%"};
  color: ${(props) => props.$textColor || "#2B2B2B"};
  font-style: ${(props) => props.$fontStyle || "inherit"};
  width: 100%;
  z-index: ${(props) => props.$zIndex};
  & p {
    margin-bottom: 0;    
    + p {
      margin-top: 15px;
      @media (min-width: 1200px) {
        margin-top: 20px;
      }
      @media (min-width: 1600px) {
        margin-top: 30px;
      }
    }
    & a {
      text-decoration: ${(props) => props.$textDecoration};
      font-weight:500;
      &:hover,
      &:focus {
        text-decoration: none;
      }
    }
    & strong{
      font-weight:500;
    }
  }
`;

export const ExploreMore = styled.div`
  display: flex;
  align-items: center;  
  justify-content: ${(props) => props.$justifyContent || "center"};
  margin-top: ${(props) => props.$mt || 0};
  margin-right: ${(props) => props.$mr || 0};
  margin-bottom: ${(props) => props.$mb || 0};
  margin-left: ${(props) => props.$ml || 0};
  @media (max-width:575.98px) {
    margin: ${(props) => props.$smmx};
  }

`;
export const ExploreItemMore = styled.div`
  position:relative;
  padding: ${(props) => props.$px || "10px"};
  @media (max-width:575.98px) {
    padding: ${(props) => props.$smpx};
  }

`;

export const BreadCrumb = styled.div`
  position: relative;
  z-index: 2;
  font-family: Rajdhani;
  top: 0;
  left: ${(props) => props.$left || 0};
  text-align: ${(props) => props.$textAlign || "left"};
  font-size: 14px;
  line-height: 24px;
  margin-bottom: ${(props) => props.$mb || "0px"};
  font-weight:500;
  @media (min-width:1200px) {
    font-size: 16px;
    line-height: 26px;
  }
  @media (max-width:991.98px) {
    text-align: ${(props) => props.$lgTextAlign};
  }
  & a, & span {
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }
  & a {
    padding-right: 8px;
    @media (min-width:768px) {
      padding-right: 12px;
    }
  }
  & a {
    color: #fff;
    &:hover,
    &:focus {
      color: #F32435;
    }
    + a,
    + span {
      padding: 0 8px;
      @media (min-width:768px) {
        padding: 0 12px;
      }
      &:before {
        color: #fff;
        content: "/";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -2px;
        @media (min-width:768px) {
         left: -3px;
        }
      }
    }
  }
  & span {
    color: #fff;
    letter-spacing: 0.5px;
    + span {
      padding: 0 12px;
      &:before {
        color: #fff;
        content: "/";
        position: absolute;
        top: 50%;
        left: -3px;
        transform: translateY(-50%);
      }
    }
    &.sm-ellipsis{
      @media (max-width:576.98px) {
        max-width: 420px;
        width:100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;

export const MarkdownContent = styled.div`
  display: ${(props) => props.$display || "block"};
  max-width: ${(props) => props.$maxWidth || "none"};
  width: 100%;
  margin: 0 auto;
  padding-left: ${(props) => props.$pl || 0};
  padding-right: ${(props) => props.$pr || 0};
  text-align: ${(props) => props.$textAlign || "left"};
  color: ${(props) => props.$textColor};

  & blockquote{
    background: #e0e5e9;
    margin: 0 0 20px;
    padding: 20px;
    border-radius: 8px;
     p{
      margin-bottom:0;
     }
  }
  & p {
    text-align: ${(props) => props.$textAlign || "left"};
    color: ${(props) => props.$textColor};
    margin-bottom: 20px;    
  }
  a {
    position: relative;
  }
  & h2:first-child {
    padding-top: 0;
  }
  & h1 {
    font-size: 30px;
    line-height: 34px;

    @media (min-width: 576px) {
      font-size: 36px;
      line-height: 40px;
    }

    @media (min-width: 768px) {
      font-size: 42px;
      line-height: 46px;
    }

    @media (min-width: 992px) {
      font-size: 48px;
      line-height: 52px;
    }

    @media (min-width: 1200px) {
      font-size: 54px;
      line-height: 58px;
    }

    @media (min-width: 1600px) {
      font-size: 60px;
      line-height: 64px;
    }
  }
  & h2 {
    font-size: 24px;
    line-height: 28px;

    @media (min-width: 576px) {
      font-size: 30px;
      line-height: 34px;
    }

    @media (min-width: 768px) {
      font-size: 36px;
      line-height: 40px;
    }

    @media (min-width: 992px) {
      font-size: 42px;
      line-height: 46px;
    }

    @media (min-width: 1200px) {
      font-size: 48px;
      line-height: 52px;
    }

    @media (min-width: 1600px) {
      font-size: 54px;
      line-height: 58px;
    }
  }
  & h3 {
    font-size: 18px;
    line-height: 22px;
    
    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 28px;
    }
    
    @media (min-width: 992px) {
      font-size: 30px;
      line-height: 34px;
    }
    
    @media (min-width: 1200px) {
      font-size: 36px;
      line-height: 40px;
      
    }
    
    @media (min-width: 1600px) {
      font-size: 42px;
      line-height: 46px;
    }
  }
  & h2,
  & h3,
  & h4 {
    padding-top: 15px;
    @media (min-width: 1200px) {
      padding-top: 20px;
    }
    @media (min-width: 1600px) {
      padding-top: 30px;
    }
  }
  & ul,
  & ol {
    list-style: none;
    margin: 0 0 30px;
    padding: 0;

    font-size: 16px;
    line-height: 28px;
    @media (min-width: 1200px) {
      font-size: 18px;
      line-height: 30px;
    }
    & li {
      padding-left: 30px;
      vertical-align: text-top;
      margin: 0;
      > strong {
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        @media (min-width: 1200px) {
          font-size: 22px;
          line-height: 26px;
        }
        /* @media (min-width: 1600px) {
          font-size: 26px;
          line-height: 30px;
        } */
      }
      + li {
        margin-top: 10px;
        @media (min-width: 1200px) {
          margin-top: 15px;
        }
      }
      &:before {
        content: url(${Pointer});
        display: inline-block;
        vertical-align: text-top;
        margin-left: -30px;
        width: 30px;
      }
    }
  }
  table {
    border-collapse: collapse;
	}
	table {
		width: 100%;
		margin-bottom:15px;
		font-size: 16px;
    line-height: 28px;
    background-color:#E2EAEF;
    border:1px solid #E2EAEF;
		@media (min-width: 1200px) {
			font-size: 18px;
			line-height: 30px;
		}
	}
	table td, table th {
		padding: 6px 12px;
		vertical-align: top;
    border:none;
	}
	table thead th {
		vertical-align: bottom;
		border-bottom: 1px solid #C7C7C7;
		font-weight:600;
	}
  @media (max-width: 768px) {
    table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }
  }
  hr{
    background-color:#C7C7C7;
  }
`;

export const BaseButton = styled.span`
  font-family: "Rajdhani", sans-serif;
  position: relative;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  transition: all 0.5s ease-in-out;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  font-weight: 600;
  border:2px solid transparent; 

  font-size: 18px;
  line-height: 24px;
  border-radius:6px;
  padding: 6px 12px;
  @media (min-width: 576px) {
    padding: 6px 18px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 26px;
    padding: 8px 24px;
  }
  @media (min-width: 1600px) {
    font-size:22px;
    line-height:32px;
    border-radius:8px;
    padding: 12px 30px;
  }
  > .text {
    display: inline-flex;
    align-items: center;    

    + .icon {
      margin-left: 5px;
      @media (min-width: 1200px) {
        margin-left: 10px;
      }
    }
  }
  > .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;   
    &:empty {
      display: none;
    }
    + .text {
      margin-left:5px;
      @media (min-width: 1200px) {
        margin-left:10px;
      }
    }
  } 

  

  &.btn.btn-lg{
    font-size: 18px;
    line-height: 32px;
    padding: 8px 20px;
    border-radius:10px;
    @media(min-width:1200px){    
      font-size: 22px;
      line-height: 34px;
      padding: 16px 30px;
      border-radius:12px;
    }
    @media(min-width:1600px){
      font-size: 24px;
      line-height: 38px;
      padding: 20px 40px;
      border-radius:15px;
    }
    .text {    
      + .icon {
        margin-left:10px;
      }
    }
    .icon {    
      + .text {
        margin-left:10px;
      }
    }
  }
  &.btn.btn-xl{
    font-size: 18px;
    line-height: 32px;
    padding: 12px 20px;
    border-radius:12px;
    @media(min-width:1200px){    
      font-size: 24px;
      line-height: 38px;
      padding: 20px 40px;
      border-radius:12px;
    }
    @media(min-width:1600px){
      font-size: 28px;
      line-height: 38px;
      padding: 30px 60px;
      border-radius:15px;
    }
    .text {    
      + .icon {
        margin-left:10px;
      }
    }
    .icon {    
      + .text {
        margin-left:10px;
      }
    }
  }

  &.btn.btn-sm{
    padding: 4px 12px;
    font-size: 16px;
    line-height: 22px;
    border-radius:4px;
    @media(min-width:1200px){        
      padding: 6px 18px;
      font-size: 18px;
      line-height: 24px;
      border-radius:6px;
    }
    @media(min-width:1600px){
      padding: 8px 24px;
      font-size:20px;
      line-height:24px;
      border-radius:8px;
    }
    .text {    
      + .icon {
        margin-left:5px;
      }
    }
    .icon {    
      + .text {
        margin-left:5px;
      }
    }
  }
`;

export const ListPointer = styled.ul`
  list-style: none;
  padding: 0;

  font-size: 18px;
  line-height: 36px;
  font-weight: 500;
  margin: 0 0 40px 0;
  @media (min-width: 768px) {
    margin: 0 0 40px 30px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 40px;
  }
  @media (min-width: 1600px) {
    font-size: 22px;
    line-height: 42px;
  }
`;

export const ListItemPointer = styled.li`
  padding-left: 40px;
  vertical-align: text-top;
  margin: 0;
  > strong {
    font-weight: 700;
  }
  + li {
    margin-top: 20px;
  }
  &:before {
    content: url(${Pointer});
    display: inline-block;
    margin-left: -40px;
    width: 40px;
  }
`;

export const MainPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
  @media (min-width: 1200px) {
    margin: 0 -15px;
  }
`;

export const LeftPanel = styled.div`
  position: relative;
  width: 100%;
  padding: 0 10px;
  @media (min-width: 992px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  @media (min-width: 1200px) {
    flex: 0 0 25%;
    max-width: 25%;
    padding: 0 15px;
  }
`;

export const RightPanel = styled.div`
  position: relative;
  width: 100%;
  padding: 0 10px;
  @media (min-width: 992px) {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
  @media (min-width: 1200px) {
    flex: 0 0 75%;
    max-width: 75%;
    padding: 0 15px;
  }
`;

export const DropSearch = styled.div`
    position: absolute;
    background-color: #000;
    box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.3);
    max-width: calc(100vw - 60px);
    top: 100%;
    left: 0;
    right: 0;
    z-index: 2;
    text-align: left;
    overflow-y: auto;
    max-height: 310px;
    border-radius: 8px;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background-color: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background: #272828;
      border-radius: 4px;
    }
    &.bg-white{
      background-color: #fff;
      .drop-item-search{
        border-bottom: 1px solid #E2EAEF;
        color:#2B2B2B;
        &:hover {
          background: #E2EAEF;
          color:#0D0A0B;
        }
        & a {
          
          color: #2B2B2B;
          & svg {
            fill: #2B2B2B;
          &:hover {
            color: #0D0A0B;
            svg {
              fill: #0D0A0B;
            }
          }
        }
      }
    }
  }
`;

export const DropSearchBody = styled.div``;

export const DropSearchItem = styled.div`
  cursor: pointer;
  padding: 8px 15px;
  border-bottom: 1px solid #272828;
  color:#fff;
  font-size: 14px;
  line-height: 24px;
  font-weight: 300;
  &:last-child {
    border-bottom: none;
  }
  & a {
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: 500;
    justify-content: space-between;
    padding: 8px 15px;
    font-size: 14px;
    line-height: 24px;

    & svg {
      fill: #fff;
      transition: transform 0.3s ease-out;
      width: 12px;
      display: none;
      @media (min-width:1200px) {
				display:block;
			}
    }
    &:hover {
      color: #fff;
      svg {
        transform: translateX(4px);
        fill: #fff;
      }
    }
  }
  &:hover {
    background: #272828;
    color:#fff;
  }
`;


export const SectionBox = styled.div`
  background-color: ${(props) => props.$bgcolor || "#111415"};
  border: 1px solid ${(props) => props.$borderColor || "#111415"};   
  border-radius:10px;
  margin-bottom:${(props) => props.$mb || "0"};
  padding:${(props) => props.$p || "20px"};
  @media(min-width:992px){		
    border-radius:20px;
    padding:${(props) => props.$p || "40px"};
	}
  @media(min-width:1200px){		
    border-radius:25px;
    padding:${(props) => props.$p || "50px"};
	}
	@media(min-width:1600px){
    border-radius:35px;
		padding:${(props) => props.$p || "70px"};
	}

   
`;

export const ListLocation = styled.div`    
  position:relative;  
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom:30px;
  @media(min-width:768px){		
    grid-template-columns: repeat(3, 1fr);
  }
  @media(min-width:992px){		
    grid-template-columns: repeat(4, 1fr);
  }
  @media(min-width:1200px){		
    grid-template-columns: repeat(6, 1fr);
  }
  @media(min-width:1600px){		
    gap: 15px;
    grid-template-columns: repeat(8, 1fr);
  }

`;
export const ListItemLocation = styled.div`    
  display:flex;
  flex-wrap: nowrap;
  gap: 10px;
  .icon{min-width: 26px;
    width:26px; 
    height:26px; 
    background-color:#2B2B2B;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    svg{
      fill:#fff
    }       
  }
  .text{
    color: #fff;
    font-family: "Rajdhani", sans-serif;
    font-weight: 500;
    text-transform: capitalize;
  }
  a{
    display:flex;
    flex-wrap: nowrap;
    gap: 10px;
  }
`;

export const PanelDefault = styled.div`
  border: 1px solid #E2EAEF;
  background: #FFF;
  box-shadow: 7px 12px 20px -15px rgba(118, 149, 168, 0.19);
  height:calc(100% - 20px);
  margin-bottom:20px;
  overflow:hidden;
  border-radius: 10px;
  @media (min-width: 1200px) {
    border-radius: 20px;
  }
  @media (min-width: 1600px) {
    border-radius: 30px;
  }
`;
export const PanelDefaultHeader = styled.div`
  border: 1px solid #E2EAEF;
  background: #F8FBFD;
  display:flex;
  flex-wrap:nowrap;
  border-radius: 10px 10px 0 0;  
  padding:20px 15px;
  @media (min-width: 992px) {
    padding:20px;
  }
  @media (min-width: 1200px) {
    border-radius: 20px 20px 0 0;
    padding:20px 30px;
  }
  @media (min-width: 1600px) {
    padding:20px 40px;
    border-radius: 30px 30px 0 0;
  }
  .icon{
    display:flex;
    align-items:center;
    justify-content:center;
    height:24px;
    @media (min-width: 576px) {
      height:28px;
    }
    @media (min-width: 768px) {
      height:32px;
    }
    > svg{
      fill:#0D0A0B;
    }
    + .text{
      margin-left:20px;
    }
  }
  .text{
    font-size: 20px;
    line-height: 24px;
    @media (min-width: 576px) {
      font-size: 24px;
      line-height: 28px;
    }
    @media (min-width: 768px) {
      font-size: 28px;
      line-height: 32px;
    }
    strong{
      display:block;
      font-weight:500;      
    }
    p{
      margin-bottom:0;
      font-size: 14px;
      line-height: 20px;
      @media (min-width: 576px) {
        font-size: 16px;
        line-height: 20px;
      }
      @media (min-width: 768px) {
        font-size: 18px;
        line-height: 22px;
      }
    }
  }
`;
export const PanelDefaultBody = styled.div`
  padding:15px;
  @media (min-width: 992px) {
    padding:20px;
  }
  @media (min-width: 1200px) {
    padding:30px;
  }
  @media (min-width: 1600px) {
    padding:40px;
  }
  ul{
    margin:0 0 0 30px;
    padding:0;
    font-size:16px;
    line-height:26px;
    @media(min-width:1200px){
      font-size:18px;
      line-height:30px; 
    } 
    li{
      margin-bottom:0;
      + li{
        margin-top:10px
      }
      strong{
        font-weight:500;
      }
    }
  }
`;


export const PanelGrid = styled.div`
    display: grid;
    gap: 15px;
    @media(min-width:992px){		
        grid-template-columns: repeat(2, 1fr);
    }
    @media(min-width:1200px){		
        gap: 20px;
    }
    @media(min-width:1600px){		
        gap: 40px;
    }
`;
export const PanelItemGrid = styled.div`
    position:relative;
`;

export const StickySidebar = styled.div`
  max-width: 100%;
  width: 100%;
  position: sticky;
  top: 90px;
  z-index: 1;

  @media (min-width: 1200px) {
    top: 140px;
  }

  @media (min-width: 1366px) {
    top: 160px;
  }

`;