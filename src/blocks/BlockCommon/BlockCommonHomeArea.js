import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, ExploreMore, Section, SectionSubTitle, SectionDescription, SectionTitle } from "src/components/Section";
import DefaultOutlineButton from "src/components/Button/DefaultOutlineButton";

const Geographic = styled.div`
  background-color:#F8FBFD;
  border:1px solid #E2EAEF;
  position:relative;
  overflow:hidden;
  border-radius:10px;    
  padding:50px 20px 20px 20px;
  @media(min-width:992px){
    border-radius:20px;
    padding:80px 20px 20px 20px;
	}
  @media(min-width:1200px){
    border-radius:25px;
    padding:100px 20px 20px 20px;
	}
	@media(min-width:1600px){
    border-radius:35px;
		padding:120px 20px 20px 20px;
	}
`;

const Row = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  margin:0 -10px;
  @media(min-width:1200px){
    margin:0 -20px;
  }
  @media(min-width:1600px){
    margin:0 -30px;
  } 
`;

const ColLeft = styled.div`
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

const ColRight = styled.div`
  position:relative;
  width:100%;
  padding:0 10px;
  @media(min-width:768px){
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  @media(min-width:1200px){
    padding:0 20px;
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

const BlockCommonHomeArea = ({ data }) => {
  return (
    <Section className="section-insulation" $epb="80px" $xpb="60px" $pb="40px" $ept="0" $xpt="0" $pt="0" $bgcolor="#fff">
      <Container>
        <Geographic>
          <Row>
            <ColLeft>
              <GlobeFigure>
                <GatsbyImage image={data.image.gatsbyImageData} alt={data.title} />
              </GlobeFigure>
            </ColLeft>
            <ColRight>
              <SectionTitle $textColor="#F32435" className="h2-xl">
                <SectionSubTitle $textColor="#0D0A0B">{data.subTitle}</SectionSubTitle>
                {data.title}
              </SectionTitle>
              <SectionDescription dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
              <ExploreMore $justifyContent="flex-start">
                <Link to={data.button.link}>
                  <DefaultOutlineButton text={data.button.text} />
                </Link>
              </ExploreMore>
            </ColRight>
          </Row>
        </Geographic>
      </Container>
    </Section>
  );
};

export default BlockCommonHomeArea;
