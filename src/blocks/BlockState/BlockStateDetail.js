import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Section, SectionDescription, SectionTitle } from "src/components/Section";

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

const MediGridImage = styled.figure`
  overflow:hidden;
  margin-bottom:0;
  border-radius:10px;
  @media(min-width:992px) {
    border-radius:15px;
  }
  @media(min-width:1200px) {
    border-radius:20px;
  }
  @media(min-width:1600px) {
    border-radius:30px;
  }
  .gatsby-image-wrapper {
    display:block;
  }
`;

const BlockStateDetail = ({ data }) => {
  return (
    <Section $bgcolor="#fff">
      <Container $maxWidth="1720px">
        <ContentGrid>
          <ContentTextGrid>
            <SectionTitle>{data.state.permittingTitle}</SectionTitle>
            <SectionDescription $mb="0" dangerouslySetInnerHTML={{ __html: data.state.permittingDescription.childMarkdownRemark.html }} />
          </ContentTextGrid>
          <ContentMediaGrid>
            <MediGridImage>
              <GatsbyImage image={data.image.gatsbyImageData} alt={data.state.permittingTitle} />
            </MediGridImage>
          </ContentMediaGrid>
        </ContentGrid>
      </Container>
    </Section>
  );
};

export default BlockStateDetail;