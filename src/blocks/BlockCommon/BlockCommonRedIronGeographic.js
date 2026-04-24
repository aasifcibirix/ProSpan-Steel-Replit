import React from "react"
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Section, SectionSubTitle, SectionDescription, SectionBox, SectionTitle, ExploreMore } from "src/components/Section";
import DefaultOutlineButton from "src/components/Button/DefaultOutlineButton";

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
const Col3 = styled.div`
    position:relative;
    width:100%;
    padding:0 10px;
    @media(min-width:768px){
        flex:0 0 41.666667%;
        max-width:41.666667%;
    }
    @media(min-width:1200px){
        padding:0 20px;
        flex:0 0 33.333333%;
        max-width:33.333333%;
    }
`;
const Col = styled.div`
    position:relative;
    width:100%;
    padding:0 10px;
    @media(min-width:768px){
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
    }
    @media(min-width:1600px){
        padding:0 15px;
    }
`;
const GlobeFigure = styled.div`
    text-align:right;
    .gatsby-image-wrapper{
        display:inline-block;
    }
    @media(max-width:767.98px){
        display:none;
    }
`;

const BlockCommonRedIronGeographic = ({ data }) => {
  return (
    <Section className="section-coverage" $ept="0" $xpt="0" $pt="0" $bgcolor="#fff">
      <Container>
        <SectionBox $p="40px" $bgcolor="#F8FBFD" $borderColor="#E2EAEF">
          <Row>
            <Col3>
              <GlobeFigure><GatsbyImage image={data.image.gatsbyImageData} alt={data.title} /></GlobeFigure>
            </Col3>
            <Col>
              <SectionTitle className="h2-xl" $textColor="#F32435"><SectionSubTitle $textColor="#0D0A0B">{data.title}</SectionSubTitle>{data.subTitle}</SectionTitle>
              <SectionDescription dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
              <ExploreMore $justifyContent="flex-start"><Link to="/service-area"><DefaultOutlineButton text={data.view_button.text} /></Link></ExploreMore>
            </Col>
          </Row>
        </SectionBox>
      </Container>
    </Section>
  )
}

export default BlockCommonRedIronGeographic;