import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Section, SectionDescription, SectionBox, SectionTitle } from "src/components/Section";

const ContentGrid = styled.div`
  position: relative;
  display: grid;
  gap: 20px;
  align-items: center;
  @media(min-width:768px) {
    grid-auto-flow: column;
  }
`;

const ContentTextGrid = styled.div`
`;

const ContentMediaGrid = styled.div`
  .gatsby-image-wrapper {
    display:inline-flex;
  }
`;

const BlockStateRating = ({ data }) => {
  return (
    <Section $ept="0" $epb="0" $xpt="0" $xpb="0" $pt="0" $pb="0" $bgcolor="#fff">
      <Container>
        <SectionBox $p="20px" $bgcolor="#F8FBFD" $borderColor="#E2EAEF">
          <ContentGrid>
            <ContentMediaGrid className="d-none d-md-block">
              <GatsbyImage image={data.image.gatsbyImageData} alt={data.state.title} />
            </ContentMediaGrid>
            <ContentTextGrid>
              <SectionTitle>{data.state.ratingTitle}</SectionTitle>
              <SectionDescription $mb="0" dangerouslySetInnerHTML={{ __html: data.state.ratingDescription.childMarkdownRemark.html }} />
            </ContentTextGrid>
          </ContentGrid>
        </SectionBox>
      </Container>
    </Section>
  );
};

export default BlockStateRating;