import React from "react";
import { Container, Section, SectionDescription, SectionBox, SectionTitle } from "src/components/Section";
import DefaultImageCard from "src/components/DefaultImageCard";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const ListCardGrid = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(1, 1fr);
  @media(min-width:768px){		
    grid-template-columns: repeat(2, 1fr);
  }
  @media(min-width:1200px){		
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);        
  }
  &.grid-5{
    @media(min-width:1200px){		
      grid-template-columns: repeat(5, 1fr);        
    }
  }
`;

const ListCardItem = styled.div`
  position:relative;
`;

const BlockCommonBuildingPackagesData = ({ data }) => {
  return (
    <Section $ept="0" $epb="0" $xpt="0" $xpb="0" $pt="0" $pb="0" $bgcolor="#fff">
      <Container>
        <SectionBox $bgcolor="#111415" $borderColor="#111415">
          <SectionTitle $textAlign="center" $textColor="#fff">{data.title}</SectionTitle>
          <SectionDescription $textAlign="center" $textColor="#fff" dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
          <ListCardGrid>
            {data.refCollections.map((item, index) => (
              <ListCardItem key={index}>
                <DefaultImageCard title={item.textShort} icon={<GatsbyImage image={item.image.gatsbyImageData} alt={item.title} />} />
              </ListCardItem>
            ))}
          </ListCardGrid>
        </SectionBox>
      </Container>
    </Section>
  );
};

export default BlockCommonBuildingPackagesData;