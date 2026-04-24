
import React from "react";
import styled from "styled-components";

const PrimaryCard = styled.div`   
    position: relative;
    text-align: left;    
    background: #fff;
    border-radius:10px;
    overflow:hidden;
    transition: all 0.3s ease-in-out;
    margin-bottom: 15px;
    height: calc(100% - 15px);    
    
    background: #2B2B2B;
    box-shadow: 0 22px 30px -20px rgba(43, 43, 43, 0.60);
    
    @media (min-width: 1200px) {
        margin-bottom: 20px;
        height: calc(100% - 20px);
        border-radius:15px;       
    }
    @media (min-width: 1600px) {
        border-radius:20px;
        margin-bottom: 30px;
        height: calc(100% - 30px);
    } 
    
`;


const PrimaryCardBody = styled.div`    
    position:relative;    
    padding: 15px;
    @media (min-width: 1200px) {
        padding: 20px;
    }
    @media (min-width: 1600px) {
        padding: 25px 20px;
    }
    figure{
        font-style: normal;
        display:flex;
        align-items:center;   
        justify-content:center;
    }
    h3{
        margin-bottom:10px;
        color: #fff;   
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


const PrimaryCards = ({icon, title}) => {
    return (
        <PrimaryCard className="card card-default">
            <PrimaryCardBody className="card-body">
                <h3>{title}</h3>    
                <figure>{icon}</figure>
            </PrimaryCardBody>
        </PrimaryCard>
    );
};

export default PrimaryCards;
