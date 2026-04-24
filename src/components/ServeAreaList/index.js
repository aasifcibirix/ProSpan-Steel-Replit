import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import PrimaryCard from "src/components/PrimaryCard";

const ListCardGrid = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin:0 -5px;
`;

const ListCardItem = styled.div`
  position:relative;
  width:100%;
  padding:0 5px;
  flex:0 0 50%;
  max-width:50%;
  @media(min-width:768px){
    flex:0 0 33.333333%;
    max-width:33.333333%;
  }   
  @media(min-width:1200px){
    flex:0 0 20%;
    max-width:20%;
  }
`;

const ServiceAreaList = () => {
  const locationData = [
    {
      icon: <StaticImage src="../../images/alabama.png" alt="Alabama" />,
      title: "Alabama",
    },
    {
      icon: <StaticImage src="../../images/florida.png" alt="Florida" />,
      title: "Florida",
    },
    {
      icon: <StaticImage src="../../images/georgia.png" alt="Georgia" />,
      title: "Georgia",
    },
    {
      icon: <StaticImage src="../../images/north-carolina.png" alt="North Carolina" />,
      title: "North Carolina",
    },
    {
      icon: <StaticImage src="../../images/south-carolina.png" alt="South Carolina" />,
      title: "South Carolina",
    }
  ];

  return (
    <ListCardGrid>
      {locationData.map((item, index) => (
        <ListCardItem key={index}>
          <PrimaryCard icon={item.icon} title={item.title} />
        </ListCardItem>
      ))}
    </ListCardGrid>
  );
};

export default ServiceAreaList;