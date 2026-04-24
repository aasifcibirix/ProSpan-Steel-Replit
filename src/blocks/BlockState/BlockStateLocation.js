import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Section, SectionDescription, SectionTitle, ExploreMore } from "src/components/Section";
import { CallIcon } from "src/components/Icons";
import DefaultButton from "src/components/Button/DefaultButton";

const Row = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  margin:0 -10px;
  @media(min-width:1600px){
    margin:0 -15px;
  }
`;

const ColLeft = styled.div`
  position:relative;
  width:100%;   
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding:0 10px;
  @media(min-width:1600px) {
    padding:0 15px;
  }
`;

const ColRight = styled.div`
  position:relative;
  width:100%;
  display:none;
  padding:0 10px;
  @media(min-width:1200px) {
    flex:0 0 25%;
    max-width:25%;
    display:flex;
  }
  @media(min-width:1600px) {
    flex:0 0 33.33333%;
    max-width:33.33333%;
    padding:0 15px;
  }
`;

const MediaBox = styled.figure`
  background-color:#2B2B2B;
  overflow:hidden;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:10px;
  padding:30px 20px;
  margin-bottom:0;
  @media(min-width:992px) {
    padding:40px 20px;
    border-radius:15px;
  }
  @media(min-width:1200px) {
    border-radius:20px;
    padding:60px 30px;
  }
  @media(min-width:1600px) {
    padding:80px 40px;
    border-radius:25px;
  }
`;

const BlockStateLocation = ({ data }) => {
  return (
    <Section $ept="80px" $epb="0" $xpt="60px" $xpb="0" $pt="40px" $pb="0" $bgcolor="#fff">
      <Container $maxWidth="1760px">
        <Row>
          <ColLeft>
            <SectionTitle $maxWidth="870px" $ml="0">{data.state.locationSubTitle}</SectionTitle>
            <SectionDescription dangerouslySetInnerHTML={{ __html: data.state.locationDescription.childMarkdownRemark.html }} />
            <ExploreMore $justifyContent="flex-start">
              <a href="tel:3862470255" aria-label="phone number"><DefaultButton icon={<CallIcon />} text="(386) 247-0255" /></a>
            </ExploreMore>
          </ColLeft>
          <ColRight>
            <MediaBox>
              <GatsbyImage image={data.state.locationImage.gatsbyImageData} alt={data.state.locationSubTitle} />
            </MediaBox>
          </ColRight>
        </Row>
      </Container>
    </Section>
  );
};

export default BlockStateLocation;