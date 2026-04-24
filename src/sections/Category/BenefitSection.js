import React from "react"
import styled from "styled-components";
import { Container, Section, SectionDescription, SectionTitle } from "src/components/Section";
import DefaultCard from "src/components/DefaultCard";
import { DurabilityIcon } from "src/components/Icons";

const ListGrid = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin:0 -5px;
  @media (min-width: 1200px) {
    margin:0 -10px;
  }
  @media (min-width: 1600px) {
    margin:0 -15px;
  }
`;
const ListItem = styled.div`
  position:relative;
  width:100%;
  padding:0 5px;
  @media(min-width:768px){
    flex:0 0 50%;
    max-width:50%;
  }   
  @media(min-width:992px){
    flex:0 0 33.33333%;
    max-width:33.33333%;
  } 
  @media (min-width: 1200px) {
    padding:0 10px;
  } 
  @media (min-width: 1600px) {
    padding:0 15px;
  } 
`;

const benefitData = [
  {
    icon: <DurabilityIcon />,
    title: "Extensive Strength and Durability",
    description: "Our red iron steel buildings are designed to hold up to the average wind gusts, snow loads, and seismic activity in your region. ",
  },
  {
    icon: <DurabilityIcon />,
    title: "Long Lifespan",
    description: "Since steel is not susceptible to moisture, rust, mold, or pests, our structures can last for decades with regular upkeep. ",
  },
  {
    icon: <DurabilityIcon />,
    title: "Clear Span Engineering",
    description: "Clear-span red-iron buildings can be constructed without the need for internal support columns. This allows them to offer unparalleled open square footage and tackle tasks that require abundant space. ",
  },
  {
    icon: <DurabilityIcon />,
    title: "Minimal Maintenance",
    description: "Our structures only require quarterly checks and an occasional coat of fresh paint to keep them looking their best. This will save you loads of money throughout the life of your building. ",
  },
  {
    icon: <DurabilityIcon />,
    title: "Easy Customization",
    description: "Red iron metal buildings can be customized to fit any environment and application.",
  },
  {
    icon: <DurabilityIcon />,
    title: "Economical Pricing",
    description: "Steel buildings are often more affordable than wooden and concrete alternatives.  ",
  },
];

const BenefitSection = () => {
  return (
    <Section className="section-benefit" $bgcolor="#fff">
      <Container $maxWidth="1690px">
        <SectionTitle $maxWidth="1140px" $ml="0">Benefits of Using Red Iron Steel Buildings for Agriculture</SectionTitle>
        <SectionDescription><p>Red iron buildings are one of the most durable ways to give your farming project some space. These buildings offer: </p></SectionDescription>
        <ListGrid>
          {benefitData.map((item, index) => (
            <ListItem key={index}>
              <DefaultCard icon={item.icon} title={item.title} description={item.description} />
            </ListItem>
          ))}
        </ListGrid>
      </Container>
    </Section>
  )
}

export default BenefitSection
