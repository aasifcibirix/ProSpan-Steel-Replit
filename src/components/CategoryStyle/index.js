import styled from "styled-components";

export const CategoryCard = styled.div`   
    position: relative;
    text-align: center;    
    background: #fff;
    border-radius:10px;
    overflow:hidden;
    transition: all 0.3s ease-in-out;
    margin-bottom: 15px;
    height: calc(100% - 15px);    
    @media (min-width: 992px) {      
        margin-bottom: 30px;
        height: calc(100% - 30px);    
    }
    @media (min-width: 1200px) {      
        margin-bottom: 40px;
        height: calc(100% - 40px);
        border-radius:15px;
        &:hover{
            box-shadow: 0px 20px 30px -10px rgba(0, 0, 0, 0.40);
            &:after{
                opacity:1;
                visibility:visible;
            }
            .card-figure{
                opacity:1;
                visibility:visible;
                .gatsby-image-wrapper{
                    transform: scale(1.2);
                }
            }
            .card-name,
            .card-summary,
            .card-action{
                color:#fff;
                border-color:#fff;
                .icon{
                    svg{
                        fill:#fff;
                    }
                }
            }
        }
    }
    @media (min-width: 1600px) {
        border-radius:20px;
    }
    &:after{
        content: '';
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-color:rgba(0,0,0,0.7);
        @media (min-width: 1200px) {      
            opacity:0;
            visibility:hidden;
         }
    }
    
     &:hover, &:focus{
        color:#fff;
    }
    
`;
CategoryCard.defaultProps = {};

export const CategoryCaption = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    position:absolute;
    z-index:1;
    top:0;
    left:0;
    width:100%;
    height:100%;
    overflow: hidden; 
    text-align:left;
    padding: 15px;
    @media (min-width: 1200px) {
        padding: 20px;
    }
    @media (min-width: 1600px) {
        padding:20px 15px;
    }
    @media (min-width: 1900px) {
        padding:20px 30px;
    }
`;

export const CategoryFigure = styled.div`    
    aspect-ratio: 16 / 12;
    @media (min-width: 576px) {
        aspect-ratio: 16 / 9;
    }
    @media (min-width: 768px) {
        aspect-ratio: 4 / 3;
    }
    @media (min-width: 1200px) {
        opacity:0;
        visibility:hidden;
    }
    @media (min-width: 1400px) {
        aspect-ratio: 4 / 2;
    }
    @media (min-width: 1600px) {
        aspect-ratio: 4 / 3;
    }
   .gatsby-image-wrapper{
        height:100%;
        transform: scale(1);
        transition: transform .4s ease-in-out;
   }
`;

export const CategoryName = styled.div` 
    display:flex;
    flex-wrap:wrap;
    color: #fff;    
    width:100%;
    
    padding-bottom:15px;
    font-size: 18px;
    line-height: 28px;
    @media (min-width: 768px) {
        font-size: 20px;
        line-height: 30px;
    }
    @media (min-width: 992px) {
        max-width:140px;
        min-height:70px;
        padding-bottom:0;
    }
    @media (min-width: 1200px) {
        font-size: 24px;
        line-height: 34px;        
        color:#0d0a0b;
        
    }
    @media (min-width: 1900px) {
        min-height:80px;
        font-size: 26px;
        line-height: 36px;
    }
   
`;
export const CategorySummary = styled.div` 
    border-top:1px solid #fff;
    display:flex;
    width:100%;   
    color: #fff;    
    padding-top: 15px;
    @media (min-width: 1200px) {
        border-top:1px solid #2B2B2B;
        color: #515151;
    }
    p{        
        margin-bottom:0;
        font-size: 16px;
        line-height: 24px;
    }   
`;

export const CategoryAction = styled.div`
    display:flex;
    flex-wrap:nowrap;
    width:100%;
    justify-content:space-between;
    color:#fff;
    @media (min-width: 1200px) {   
        color:#515151;
    }
    .text{
        font-size:16px;
        line-height:30px;
    } 
    .icon{
        svg{
            fill:#fff;
            @media (min-width: 1200px) {
                fill:#515151;
            }
        }
    }
`;