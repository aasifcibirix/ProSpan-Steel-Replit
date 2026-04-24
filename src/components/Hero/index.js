import styled from "styled-components";

export const HeroBanner = styled.section`
    position:relative;  
    padding-top:70px;
    @media (min-width: 1200px) {
        padding-top:0;        
    }
`
export const HeroCover = styled.div`
    position:relative;
    @media (min-width: 992px) {
        &:after{
            content:'';
            position:absolute;
            top:0;
            left:0;
            bottom:0;
            right:0;
            background: linear-gradient(212deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 80%);  
                     
        }
    }
`
export const HeroImage = styled.div`
    position: relative;
    width: 100%;
    height:100%;    
    .gatsby-image-wrapper, img{
        width:100%;
        margin:0;
        padding:0;
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
export const HeroSubTitle = styled.div`
    color:#fff;
    font-weight:500;
    margin-bottom:15px;
    font-size: 20px;
    line-height: 30px;
    max-width:${(props) => props.$maxWidth};
    @media (min-width: 768px) {
        font-size: 24px;
        line-height: 34px;
    }
    @media (min-width: 992px) {
        font-size: 30px;
        line-height: 40px;
    }
    @media (min-width: 1200px) {
        font-size: 36px;
        line-height: 40px;
    }
    @media (min-width: 1600px) {
        font-size: 40px;
        line-height: 50px;
    }
`
export const HeroLead = styled.div`
    max-width:${(props) => props.$maxWidth};
    margin-bottom:15px;
    @media (min-width: 992px) {
        margin-bottom:20px;
    }
    @media (min-width: 1200px) {
        margin-bottom:30px;
    }
    p{
        font-weight: 300;
        color:#fff;
        margin-bottom:0;
        + p {
            margin-top:15px;
        }
    }
`
export const HeroButton = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    margin:0 -5px;
    @media (min-width: 576px) {
        margin:0 -10px;
    }
    @media (min-width: 992px) {
        justify-content:flex-start;
    }
    @media (max-width: 575.98px) {
        .btn{
            padding:4px 8px;
            font-size:16px;
            line-height:24px;
            .icon{
                svg{
                  width:20px;
                  height:20px;
                }
            }
        }
    }
`
export const HeroItemBtn = styled.div`
    position:relative;
    padding:0 5px;
    @media (min-width: 576px) {
        padding:0 10px;
    }
`
export const HeroControler = styled.div` 
    text-align:center;
    padding:30px 0;
    @media (min-width: 992px) {
        padding:0;
        text-align:left;
        position: absolute;
        bottom: 30px;
        left: 0;
        right: 0;
    }
`
export const HeroCaption = styled.div`    
    position: relative;
    width: 100%;
    @media (min-width: 992px) {
        padding:0 15px;
        flex: 0 0 70%;
        max-width: 70%;
    }
`
export const HeroRow = styled.div`    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: end;
    @media (min-width: 992px) {
        margin: 0 -15px;
    }
`
export const SlickItem = styled.div`
    position:relative;
    margin:0;
    @media (min-width: 576px) {
        display: flex !important;
    }
`
export const SlickNavItem = styled.div`
    position: relative;
    
`
export const SlickNavImage = styled.div`
    position: relative;
    margin: 0 10px;
    border-radius: 15px;
    overflow: hidden;
    border: 3px solid #fff;
   
`
export const SlickAsNav = styled.div`   
    position: relative;
    width: 100%;
    padding:0 15px;
    @media (max-width: 991.98px) {  
        display:none;
    }
    @media (min-width: 992px) {
        flex: 0 0 50%;
        max-width: 50%;
    }
    @media (min-width: 1200px) {
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
    }
`;