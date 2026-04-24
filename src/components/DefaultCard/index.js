
import React from "react";
import styled from "styled-components";

const DeafultCard = styled.div`   
  position: relative;
  text-align: left;    
  background: #fff;
  border-radius:10px;
  overflow:hidden;
  transition: all 0.3s ease-in-out;
  border:1px solid #E8E8E8;
  margin-bottom: 15px;
  height: calc(100% - 15px);    
  @media (min-width: 1200px) {
    margin-bottom: 20px;
    height: calc(100% - 20px);
    border-radius:15px;
    &:hover {
      background: #0D0A0B;
      box-shadow: 0px 26px 35px -10px rgba(0, 0, 0, 0.25);   
      
      h3, p {
        color:#fff;
      }
      i {
        svg{
          fill:#fff;
        }
        img{
          filter: invert(1);
        }
      }
    }
  }
  @media (min-width: 1600px) {
    border-radius:20px;
    margin-bottom: 30px;
    height: calc(100% - 30px);
  } 
`;

const DeafultCardBody = styled.div`
  position:relative;
  padding: 15px;
  @media (min-width: 1200px) {
    padding: 20px;
  }
  @media (min-width: 1600px) {
    padding: 30px;
  }
  i {
    font-style: normal;
    display:flex;
    align-items:center;
    width:30px;
    height:30px;
    margin-bottom:5px;
    @media (min-width: 1200px) {
      margin-bottom:10px;
    }
    @media (min-width: 1600px) {
      margin-bottom:15px;
    }
    svg{
      fill:#2B2B2B;
    }
  }
  h3 {
    color: #0D0A0B;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    margin-bottom:0;
    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 28px;
    }
    @media (min-width: 992px) {
      font-size: 20px;
      line-height: 30px;
    }
    @media (min-width: 1200px) {
      font-size: 24px;
      line-height: 34px;
    }
    @media (min-width: 1600px) {
      font-size: 26px;
      line-height: 36px;
    }
  }
  p {
    color: #2b2b2b;
    margin-bottom:0;
  }
`;

const DeafultCards = ({ size, icon, title, description }) => {
  return (
    <DeafultCard className={`card card-default ${size ? `card-${size}` : ""} `}>
      <DeafultCardBody className="card-body">
        <i>{icon}</i>
        <h3>{title}</h3>
        <p>{description} </p>
      </DeafultCardBody>
    </DeafultCard>
  );
};

export default DeafultCards;
