import React from "react"
import styled from "styled-components"
import { CallsmlIcon, InfoPointIcon, EmailIcon, CalcIcon } from "../Icons";

const ListAddress = styled.div`
    position:relative;  
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(1, 1fr);
    margin-bottom:30px;
    @media(min-width:576px){		
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1200px) {
        margin-bottom:0;  
    }
`;
const ListItem = styled.div`
   gap: 10px;
`;
const InfoBox = styled.div`
    background-color:#fff;
    padding:20px 15px;
    border-radius:15px;   
    @media (min-width: 1200px) {
        padding:30px 20px;
        border-radius:20px;   
    }
    @media (min-width: 1600px) {
        padding:40px 30px;
        border-radius:30px;   
    }
    > span{
        display:flex;
        margin-bottom:20px;
        > svg{
            fill:#0D0A0B;
        }
    }
    > strong{
        display:flex;
        color: #0D0A0B;
        font-weight:500;
        font-size: 18px;
        line-height: 22px;
        @media (min-width: 576px) {
            font-size: 20px;
            line-height: 24px;
        }
        @media (min-width: 1200px) {
            font-size: 24px;
            line-height: 28px;
        }
        @media (min-width: 1600px) {
            font-size: 26px;
            line-height: 30px;
        }
    }
    > p{
        color:#2B2B2B;
        margin-bottom:0;
        b{
            font-weight:500;
        }
        + p{
            margin-top:0;
        }
        a{
            color:#2B2B2B;
            &:hover, &:focus{
                color:#F32435;
            }
        }
    }
`;

const AddressInfo = () => {
    return (
        <ListAddress>
            <ListItem>
                <InfoBox>
                    <span><InfoPointIcon /></span>
                    <strong>Address</strong>
                    <p>792 SW Bascom Norris Dr., Lake City, FL 32025</p>
                </InfoBox>
            </ListItem>
            <ListItem>
                <InfoBox>
                    <span><CallsmlIcon /></span>
                    <strong>Phone</strong>
                    <p><b>Local:</b> <a href="tel:3862470255">(386) 247-0255</a></p>
                    <p><b>Toll Free:</b> <a href="tel:8554930332">(855) 493-0332</a></p>
                </InfoBox>
            </ListItem>
            <ListItem>
                <InfoBox>
                    <span><EmailIcon /></span>
                    <strong>Email </strong>
                    <p><a href="mailto:info@prospansteel.com">info@prospansteel.com</a></p>
                </InfoBox>
            </ListItem>
            <ListItem>
                <InfoBox>
                    <span><CalcIcon /></span>
                    <strong>Hours of Operation </strong>
                    <p>Monday - Friday 9:00AM - 5:00PM</p>
                </InfoBox>
            </ListItem>
        </ListAddress>
    )
}

export default AddressInfo