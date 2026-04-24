import styled from "styled-components";

export const StyleProductCard = styled.div`
  position: relative;
  background-color: #fff;
  text-align: center;
  padding:5px;
  margin-bottom: 20px;
  height: calc(100% - 20px);
  border-radius:15px;
  @media (min-width: 1200px) {
    margin-bottom: 30px;
    height: calc(100% - 30px);
    border-radius:20px;
  }
  @media (min-width: 1600px) {
    margin-bottom: 40px;
    height: calc(100% - 40px);
    border-radius:35px;
    padding:10px;
  }

  .card-figure{
    img, .gatsby-image-wrapper{
      transition: transform 0.5s ease;
      display: block;
    }
    &:hover{
      img, .gatsby-image-wrapper{      
        transform: scale(1.1);
      }
    }
  }
`;

export const StyleProductBody = styled.div`
  position: relative;
  padding: 15px 5px;
  @media (min-width: 1200px) {
    padding: 20px 10px;
  }
  @media (min-width: 1600px) {
    padding: 20px;
  }
`;

export const StyleProductFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  padding: 15px 5px;
  @media (min-width: 1200px) {
    padding: 20px;
  }
  @media (min-width: 1600px) {
    padding: 20px 30px;
  }
`;

export const StyleProductFigure = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 15px;
  @media (min-width: 1200px) {
    border-radius: 20px;
  }
  @media (min-width: 1600px) {
    border-radius: 30px;
  }  
  a{
    overflow: hidden;
    position: relative;
   
  }
`;

export const StyleProductSku = styled.div`  
  font-weight: 400; 
  font-size: 14px;
  line-height: 24px;
  margin-bottom:10px;
   @media (min-width: 1600px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const StyleProductName = styled.div`
  font-weight: 500;
  margin-bottom: 0;
  color: #2B2B2B;
  font-size: 18px;
  line-height: 28px;
  @media (min-width: 992px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
    line-height: 34px;
  }
  @media (min-width: 1600px) {
    font-size: 28px;
    line-height: 38px;
  }
  > a {
    color: #2B2B2B;
    &:hover {
      color: #F32435;
    }
  }
`;
export const StyleProductDesc = styled.div`
  
`;

export const StyleProductInfo = styled.div`
  background-color:#111415;
  overflow:hidden;
  border-radius:10px;  
  @media (min-width: 1200px) {
    border-radius:15px;  
  }
  @media (min-width: 1600px) {
    border-radius:20px;  
  }
`;

export const StyleProductPrice = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  gap:5px;
  font-weight: 600;
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  padding:5px 0;
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
    font-size: 42px;
    line-height: 52px;
    padding:10px 0;
  }
  @media (min-width: 1600px) {
    font-size: 52px;
    line-height: 62px;
    padding:15px 0;
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

export const StyleProductAction = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content: ${(props) => props.$justifyContent || "center"};
  margin-top:10px;
  @media (min-width: 1200px) {
    margin-top:20px;
  }
  .btn{
    padding:0;
  }
`;

export const StyleRtoInfo = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight:300;
  margin: 0 -5px 5px  -5px;
  @media (min-width: 1600px) {
    margin: 0 -10px 10px -10px;
  }
`;

export const StyleRtoItemInfo = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 0 5px;
  @media (min-width: 1600px) {
    padding: 0 10px;
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
      fill: #A4A4A4;
      width: 20px;      
      @media (min-width: 1200px) {
        width: 24px;      
      }
      @media (min-width: 1600px) {
        width: auto;      
      }
    }
    + .text {
      margin-left: 5px;
      @media (min-width: 1600px) {
        margin-left: 10px;
      }
    }
  }
  .text {
    color: #A4A4A4;
    font-size: 14px;
    line-height: 20px;
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const StyleProductCta = styled.div`
  background-color:#202223;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  margin: 0 -5px;
  padding: 5px;
  @media (min-width: 1600px) {
    margin: 0 -10px;
    padding: 8px;
  }
  &:after{
    display:block;
    content: '';
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
    height:42px;
    width:1px;
    background-color:#111415;
  }
`;

export const StyleProductItemCta = styled.div`
  position: relative;
  width: 100%;
  padding: 0 5px;
  @media (min-width: 576px) {    
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  &:first-child{
    .btn{
      .icon{
        svg{
          fill:#F32435
        }
      }
    }
  }
  &:last-child{
    .btn{
      .icon{
        svg{
          fill:#FFD900
        }
      }
    }
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
        @media (min-width: 992px) {
          .icon{
            svg{
              fill:#fff;
            }
          }
        }
      }
    }
  }
`;
