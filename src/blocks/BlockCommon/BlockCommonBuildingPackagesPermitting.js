import React from "react";
import { Container, Section, SectionDescription, SectionTitle } from "src/components/Section";
import { GatsbyImage } from "gatsby-plugin-image";
import MediaThumbnail from "src/components/MediaThumbnail";
import styled from "styled-components";

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

const BlockCommonBuildingPackagesPermitting = ({ data }) => {
  return (
    <Section $ept="0" $epb="0" $xpt="0" $xpb="0" $pt="0" $pb="0" $bgcolor="#fff">
      <Container>
        <SectionTitle $textAlign="center" $maxWidth="1220px">{data.title}</SectionTitle>
        <SectionDescription $textAlign="center" dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
        <ListCardGrid>
          {data.refCollections.map((item, index) => (
            <ListCardItem key={index}>
              <MediaThumbnail image={<GatsbyImage image={item.image.gatsbyImageData} alt={item.title} />} title={item.textShort} content={item.textLong.textLong} />
            </ListCardItem>
          ))}
        </ListCardGrid>
      </Container>
    </Section>
  );
};

export default BlockCommonBuildingPackagesPermitting;