import styled from 'styled-components'

export const Accordions = styled.div` 
  counter-reset: section;
`
export const Accordionsitems = styled.div`
  position:relative;
  overflow: hidden;
  border: 1px solid #E8E8E8;
  border-radius:8px;
  @media (min-width: 768px) {    
    border-radius:12px;
  }
  @media (min-width: 992px) {
    border-radius:15px;
  }
  @media (min-width: 1200px) {
    border-radius:20px;
  }
  + .accordions-items{
    margin-top:20px;
  }
  &.active{
    opacity:1;
    background-color:#0D0A0B;
    border-color:#0D0A0B;
    box-shadow: 0px 26px 35px -10px rgba(0, 0, 0, 0.25);
    .accordions-title{
      padding-bottom:0;
      color:#fff;
    }
    .accordions-content{
      color:#fff;
    }
    span{
      border-color:#fff;
      transform:rotate(180deg);
      svg{
        fill:#fff;
      }
    }
    .accordions-content{
      max-height:4000px;
      overflow:inherit;
      transition: max-height 0.2s ease-out;
    }
    
  }
`
export const AccordionsContent = styled.div`
  max-height:0;
  overflow:hidden;
  transition: max-height .35s ease;
  position: relative;

`
export const AccordionsContentinner = styled.div`
  padding:10px 45px 10px 15px;
  @media (min-width: 992px) {    
    padding:10px 50px 15px 20px;
  }
  @media (min-width: 1200px) {
    padding:10px 60px 20px 30px;
  }
  @media (min-width: 1600px) {
    padding:10px 70px 30px 40px;
  }
  > p{
    color:#fff;
    font-weight:300;
    margin-bottom:0;
    + p{
      margin-top:15px;
    }
  }
  a{
    color:#f32435;
    &:hover,&:focus{
      color:#fff;
    }
  }
`
export const AccordionsTitle = styled.div`  
  cursor: pointer;
  display:flex;
  align-items:center;
  justify-content:space-between;
  position:relative;
  z-index:1;
  color: #2B2B2B;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  padding:10px 15px;
  @media (min-width: 992px) {
    padding:15px 20px;
  }
  @media (min-width: 1200px) {
    padding:20px 30px;
  }
  @media (min-width: 1600px) {
    padding:28px 40px;
    font-size: 20px;
    line-height: 30px;
  }
  strong{
    font-weight:500;   
    + span{
      margin-left:15px;
    }
  }
  span{
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    transition: all .35s ease;   
    margin-left: auto;
    border:1px solid #2B2B2B;
    border-radius:50%;
    width:24px; 
    min-width: 24px;
    height:24px; 
    @media (min-width: 992px) {
      width:30px; 
      min-width: 30px;
      height:30px; 
    }
    svg{
      fill:#2B2B2B;
    }
  }
`