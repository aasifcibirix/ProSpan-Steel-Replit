import styled from "styled-components";

export const HeroBanner = styled.section`
  position:relative;  
  padding:120px 0 15px;
  @media (min-width: 768px) {
    padding:160px 0 15px;
  }
  @media (min-width: 1200px) {
    padding:180px 0 30px;
  }
  @media (min-width: 1366px) {
    padding:200px 0 30px;
  }
  @media (min-width: 1600px) {
    padding: 220px 0 60px;
  }
`

export const HeroCover = styled.div` 
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
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
    .gatsby-image-wrapper{
        height:100%;
    }
`
export const HeroTitle = styled.h1`
    color:#fff;
    margin-bottom:${(props) => props.$mb || "10px"};
    text-transform: uppercase;
    max-width:${(props) => props.$maxWidth};
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
      font-size: 60px;
      line-height: 64px;
    }

    @media (min-width: 1600px) {
      font-size: 80px;
      line-height: 84px;
    }
`
export const HeroControler = styled.div` 
    
`
export const HeroCaption = styled.div`    
    position: relative;
    width: 100%;
    @media (min-width: 992px) {
        padding:0 15px;
        flex: 0 0 50%;
        max-width: 50%;
    }
    @media (min-width: 1200px) {
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
    }    
`