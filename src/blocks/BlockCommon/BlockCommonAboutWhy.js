import React from "react";
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
`;

const BlockCommonAboutWhy = ({ data }) => {
  const cards = data.refCollections.filter(r => r.identify === "CONTENT_COMMON_ABOUT_WHY");

  return (
    <Section $ept="0" $epb="40px" $xpt="0" $xpb="30px" $pt="0" $pb="20px" $bgcolor="#fff">
      <Container $maxWidth="1740px">
        <SectionTitle $textAlign="center">{data.title}</SectionTitle>
        <SectionDescription $textAlign="center" dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
        <ListGrid>
          {cards.map(d => (
            <ListItem key={d.id}>
              <DefaultCard
                icon={<img src={d.icon.file.url} alt="" />}
                title={d.textShort}
                description={<div dangerouslySetInnerHTML={{ __html: d.textLong.childMarkdownRemark.html }} />}
              />
            </ListItem>
          ))}
        </ListGrid>
      </Container>
    </Section>
  );
};

export default BlockCommonAboutWhy;