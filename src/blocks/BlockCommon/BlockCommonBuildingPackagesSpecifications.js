import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Section, SectionDescription, SectionTitle, MarkdownContent } from "src/components/Section";
import styled from "styled-components";

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
    @media(min-width:992px){
      gap: 40px;
    }
  }
`;

const ContentTextGrid = styled.div``;

const ContentMediaGrid = styled.div`
  .gatsby-image-wrapper{
    display:inline-flex;
  }
`;

const BlockCommonBuildingPackagesSpecifications = ({ data }) => {
  return (
    <Section $ept="80px" $epb="0" $xpt="60px" $xpb="0" $pt="40px" $pb="0" $bgcolor="#fff">
      <Container>
        <ContentGrid className="gutters-lg-30">
          <ContentTextGrid>
            <SectionTitle>{data.title}</SectionTitle>
            <SectionDescription dangerouslySetInnerHTML={{ __html: data.titleLong.childMarkdownRemark.html }} />
            <MarkdownContent>
              <ul>

                {data.refCollections.map((item) => (
                  <li>
                    <strong>{item.textShort}</strong><br />
                    <SectionDescription dangerouslySetInnerHTML={{ __html: item.textLong.childMarkdownRemark.html }} />
                  </li>
                ))}
              </ul>
            </MarkdownContent>
          </ContentTextGrid>
          <ContentMediaGrid className="d-none d-md-block"><GatsbyImage image={data.image.gatsbyImageData} /></ContentMediaGrid>
        </ContentGrid>
      </Container>
    </Section>
  );
};

export default BlockCommonBuildingPackagesSpecifications;