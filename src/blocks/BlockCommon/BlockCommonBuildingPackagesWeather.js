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
  &.gutters-lg-30{
    @media(min-width:992px) {
      gap: 30px;
    }
  }
  &.gutters-lg-40{
    @media(min-width:992px) {
      gap: 40px;
    }
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

const BlockCommonBuildingPackagesWeather = ({ data }) => {
  return (
    <Section $bgcolor="#fff">
      <Container>
        <SectionBox $bgcolor="#F8FBFD" $borderColor="#E2EAEF">
          <ContentGrid className="gutters-lg-40">
            <ContentMediaGrid className="d-none d-md-block">
              <MediGridImage><GatsbyImage image={data.image.gatsbyImageData} /></MediGridImage>
            </ContentMediaGrid>
            <ContentTextGrid>
              <SectionTitle>{data.title}</SectionTitle>
              <SectionDescription $mb="0" dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
            </ContentTextGrid>
          </ContentGrid>
        </SectionBox>
      </Container>
    </Section>
  );
};

export default BlockCommonBuildingPackagesWeather;