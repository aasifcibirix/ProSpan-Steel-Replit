
import React from "react";
import styled from "styled-components";

const DefaultImageCard = styled.div`   
    position: relative;
    text-align: left;    
    background: #fff;
    border-radius:10px;
    overflow:hidden;
    transition: all 0.3s ease-in-out;
    height: 100%;
    
    background: #F8FBFD;
    box-shadow: 0 22px 30px -20px rgba(43, 43, 43, 0.60);
    
    @media (min-width: 1200px) {
        height: 100%;
        border-radius:15px;       
    }
    @media (min-width: 1600px) {
        border-radius:20px;
      
        height: 100%;
    } 
    
`;


const DefaultImageCardBody = styled.div`    
    position:relative;    
    padding: 15px;
    @media (min-width: 1200px) {
        padding: 20px;
    }
    @media (min-width: 1600px) {
        padding: 20px;
    }
    figure{
        font-style: normal;
        display:flex;
        align-items:center;   
        justify-content:center;
        margin: 0;
        border-radius: 16px;
        overflow:hidden;
        .gatsby-image-wrapper{
            width:100%;
        }
    }
    h3{
        margin-bottom:10px;
        font-weight: 600;     
        font-size: 16px;
        line-height: 26px;
        @media (min-width: 768px) {
            font-size: 18px;
            line-height: 28px;
        }
        @media (min-width: 1600px) {
            font-size: 20px;
            line-height: 30px;
        }
        @media (min-width: 1900px) {
            font-size: 22px;
            line-height: 32px;
        }
    }
`;


const DefaultImageCards = ({icon, title}) => {
    return (
        <DefaultImageCard className="card card-default">
            <DefaultImageCardBody className="card-body">
                <h3>{title}</h3>    
                <figure>{icon}</figure>
            </DefaultImageCardBody>
        </DefaultImageCard>
    );
};

export default DefaultImageCards;
