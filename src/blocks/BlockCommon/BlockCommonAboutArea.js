import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Section, SectionDescription, SectionTitle, ExploreMore, SectionBox } from "src/components/Section";
import ServeAreaList from "src/components/ServeAreaList";
import DefaultOutlineButton from "src/components/Button/DefaultOutlineButton";
import styled from "styled-components";

const Row = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items: ${(props) => props.$alignItems || "initial"};
  margin:0 -10px;
  @media(min-width:1200px){
    margin:0 -15px;
  }
`;

const ColLeft = styled.div`
  position:relative;
  width:100%;
  padding:0 10px;
  display:none;
  @media(min-width:1200px) {
    flex:0 0 25%;
    max-width:25%;
    padding:0 15px;
    display:flex;
    justify-content: center;
  }
  @media(min-width:1600px) {
    flex:0 0 33.33333%;
    max-width:33.33333%;
  }
`;

const ColRight = styled.div`
  position:relative;
  width:100%;
  padding:0 10px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  @media(min-width:1200px) {
    padding:0 15px;
	}
`;

const Figure = styled.figure`
  position:relative;
  margin-bottom:0;
  .gatsby-image-wrapper {
    filter: drop-shadow(0 21px 40px rgba(51, 51, 51, 0.40));
  }
`;

const BlockCommonAboutArea = ({ data }) => {
  return (
    <Section $ept="0" $epb="20px" $xpt="0" $xpb="20px" $pt="0" $pb="20px" $bgcolor="#fff">
      <Container>
        <SectionBox $bgcolor="#F8FBFD" $borderColor="#E2EAEF">
          <Row $alignItems="center">
            <ColLeft>
              <Figure>
                <GatsbyImage image={data.image.gatsbyImageData} alt={data.title} />
              </Figure>
            </ColLeft>
            <ColRight>
              <SectionTitle>{data.title}</SectionTitle>
              <SectionDescription dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
              <ServeAreaList />
              <ExploreMore $justifyContent="flex-start" $mt="15px">
                <Link to="/service-area"><DefaultOutlineButton text={data.cta_button_title} /></Link>
              </ExploreMore>
            </ColRight>
          </Row>
        </SectionBox>
      </Container>
    </Section>
  );
};

export default BlockCommonAboutArea;