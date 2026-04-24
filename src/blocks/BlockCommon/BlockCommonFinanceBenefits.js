/*eslint-disable jsx-a11y/alt-text */
import React from "react"
import { Container, Section, SectionDescription, SectionTitle } from "src/components/Section";
import DefaultCard from "src/components/DefaultCard";
import styled from "styled-components";

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
    flex:0 0 25%;
    max-width:25%;
  } 
  @media (min-width: 1200px) {
    padding:0 10px;
  } 
  @media (min-width: 1600px) {
    padding:0 15px;
  } 
`;

const BlockCommonFinanceBenefits = ({ data }) => {
  return (
    <Section className="section-benefit" $bgcolor="#fff">
      <Container>
        <SectionTitle $textAlign="center">{data.title}</SectionTitle>
        <SectionDescription $textAlign="center" dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
        <ListGrid>
          {data.refCollections.map((item, index) => (
            <ListItem key={index}>
              <DefaultCard icon={<img src={item.icon.file.url} />} title={item.textShort} description={item.textLong.textLong} />
            </ListItem>
          ))}
        </ListGrid>
      </Container>
    </Section>
  )
}

export default BlockCommonFinanceBenefits;