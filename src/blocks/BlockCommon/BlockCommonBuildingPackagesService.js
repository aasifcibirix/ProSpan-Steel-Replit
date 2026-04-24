import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Section, SectionDescription, SectionTitle, ExploreMore, SectionImageBkg } from "src/components/Section";
import DefaultOutlineButton from "src/components/Button/DefaultOutlineButton";

const WhiteBlureBox = styled.div`
  max-width:1010px;
  width:100%;
  position:relative;
  padding:30px 20px;
  @media(min-width:1200px) {
    padding:30px;
  }
  @media(min-width:1600px){
    padding:50px;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border:1px solid rgba(255,255,255,0.60);
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
  }
`;

const BlockCommonBuildingPackagesService = ({ data }) => {
  return (
    <Section className="section-foundation" $bgcolor="#fff">
      <SectionImageBkg><GatsbyImage image={data.image.gatsbyImageData} alt={data.title} /></SectionImageBkg>
      <Container $maxWidth="1510px">
        <WhiteBlureBox>
          <SectionTitle $textColor="#0D0A0B">{data.title}</SectionTitle>
          <SectionDescription dangerouslySetInnerHTML={{ __html: data.titleLong.childMarkdownRemark.html }} />
          <SectionDescription dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
          <ExploreMore $justifyContent="flex-start"><Link to="/service-area"><DefaultOutlineButton text="View Our Service Areas" /></Link></ExploreMore>
        </WhiteBlureBox>
      </Container>
    </Section>
  );
};

export default BlockCommonBuildingPackagesService;