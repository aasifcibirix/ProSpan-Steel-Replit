import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const ListColor = styled.div`
  position:relative;  
  display: grid;
  gap: 10px;
  margin-bottom:30px;
  grid-template-columns: repeat(2, 1fr);
  @media(min-width:576px){		
    grid-template-columns: repeat(4, 1fr);
  }
  @media(min-width:768px){		
    grid-template-columns: repeat(5, 1fr);
  }
  @media(min-width:1200px){		
    grid-template-columns: repeat(4, 1fr);        
  }
  @media(min-width:1600px){		
    gap: 15px;
    grid-template-columns: repeat(5, 1fr);
  }
`;
const ListItem = styled.div`
   gap: 10px;
`;
const ColorPallet = styled.div`
    padding:4px;
    background-color:#fff;
    border-radius:10px;   
`;
const ColorCode = styled.div`
    display:flex;
    background-color:#5B5145;
    border-radius:8px;
    margin-bottom:5px;
    width:100%;
    height:60px;
    overflow: hidden;
    .gatsby-image-wrapper{
        width:100%;
        height:100%;
    }
`;
const ColorName = styled.div`    
    font-family: "Rajdhani", sans-serif;
    font-weight:500;
    text-transform:uppercase;
    text-align: center;
    font-size:14px;
    line-height:24px;
    @media(min-width:768px){
        font-size:16px;
        line-height:26px;
    }
    @media(min-width:1900px){
        font-size:18px;
        line-height:28px;
    }
`;


const ColorPalletsList = () => {
    const colorData = [
        {
            colorcode: "#5B5145",
            colorname: "burnished slate",
        },
        {
            colorcode: "#364037",
            colorname: "fern green",
        },
        {
            colorcode: "#A99F93",
            colorname: "desert sand",
        },
        {
            colorcode: "#706B67",
            colorname: "charcoal gray",
        },
        {
            colorcode: "#000000",
            colorname: "Black",
        },
        {
            colorcode: "#BDA790",
            colorname: "Saddle Tan",
        },
        {
            colorcode: "#8E3C3E",
            colorname: "rustic red",
        },
        {
            colorcode: "#DAD8DB",
            colorname: "polar white",
        },
        {
            colorcode: "#CDC6B4",
            colorname: "light stone",
        },
        {
            colorcode: "#627B8F",
            colorname: "Hawaiian blue",
        },
        {
            colorcode: "#6B4B40",
            colorname: "cocoa brown",
        },
        {
            colorcode: "#BDBEC8",
            colorImg: (
                <StaticImage
                src="../../images/galvalume.png"
                alt="Galvalume"
                />
            ),
            colorname: "galvalume",
        },
        {
            colorcode: "#A72734",
            colorname: "crimson red",
        },
        {
            colorcode: "#2B4673",
            colorname: "gallery blue",
        },
        {
            colorcode: "#B4AFAC",
            colorname: "ash gray",
        },
    ]
    return (
        <ListColor>
            {colorData.map((item, index) => (
                <ListItem key={index}>
                    <ColorPallet>
                        <ColorCode
                        style={!item.colorImg ? { backgroundColor: item.colorcode } : {}}
                        >
                        {item.colorImg}
                        </ColorCode>
                        <ColorName>{item.colorname}</ColorName>
                    </ColorPallet>
                </ListItem>
            ))}
        </ListColor>
    )
}

export default ColorPalletsList