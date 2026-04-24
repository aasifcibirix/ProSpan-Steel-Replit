import styled from "styled-components";

export const StyleBlogCard = styled.div`
  position: relative;
  background-color: #fff;
  border:1px solid #E8E8E8;
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
`;

export const StyleBlogBody = styled.div`
  position: relative;
  padding: 15px 5px;
  @media (min-width: 1200px) {
    padding: 20px 10px;
  }
  @media (min-width: 1600px) {
    padding: 30px 10px;
  }
`;

export const StyleBlogFigure = styled.div`
  overflow: hidden;
  position: relative;
  .gatsby-image-wrapper{
    border-radius: 15px;
    @media (min-width: 1200px) {
      border-radius: 20px;
    }
    @media (min-width: 1600px) {
      border-radius: 30px;
    } 
  }
`;

export const StyleBlogName = styled.div`
  font-family: 'Rajdhani', serif;
  font-weight: 700;
  margin-bottom:15px;
  padding-bottom:15px;
  border-bottom:1px solid #C7C7C7;
  color: #0D0A0B;

  font-size: 18px;
  line-height: 24px;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 26px;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
    line-height: 30px;
  }
  @media (min-width: 1600px) {
    font-size: 26px;
    line-height: 32px;
  }
  > a {
    color: #0D0A0B;
    &:hover {
      color: #F32435;
    }
  }
`;
export const StyleBlogDesc = styled.div`
  p{
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    margin-bottom:0;
  }  
`;

export const StyleInfo = styled.div`
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-weight:300;
  margin: 0 -10px;
  @media (min-width: 1600px) {
    margin: 0 -15px;
  }
`;

export const StyleItemInfo = styled.div`
  position:relative;
  display: flex;
  flex-wrap: nowrap;
  padding: 0 10px;
  margin-bottom:10px;  
  @media (min-width: 1600px) {
    padding: 0 15px;
    margin-bottom:15px;
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
      fill: #F32435;
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
    color: #949494;
    font-size: 10px;
    line-height: 18px;
    @media (min-width: 576px) {
      font-size: 12px;
      line-height: 18px;
    }
    @media (min-width: 1600px) {
      font-size: 14px;
    }
  }
  &:nth-child(2){
    &:after{
      content: '';
      position:absolute;
      left:0;
      height:20px;
      width:1px;
      background-color:#0D0A0B;
      top:50%;
      transform: translateY(-50%);
    }
  }
  .badge{
    color: #2A2829;
    font-size: 14px;
    line-height: 20px;
    border-radius: 10px;
    border: 1px solid #F0F0F0;
    background: #F8FBFD;
    display: block;
    font-weight: 400;
    padding: 2px 8px;
    @media (min-width: 1600px) {
      padding: 2px 12px;
    }
  }
`;