import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { CheckRadiusIcon } from "src/components/Icons";
import DefaultOutlineButton from "src/components/Button/DefaultOutlineButton";
import { Container, ExploreMore, Section, SectionSubTitle, SectionDescription, SectionTitle } from "src/components/Section";

const Row = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin:0 -10px;  
`;

const Col = styled.div`
  position:relative;
  width:100%;
  padding:0 10px;
  @media(min-width:768px){
    flex:0 0 50%;
    max-width:50%;
  }
`;

const ListCheck = styled.div`
  margin-bottom:30px;
`;

const ListItem = styled.div`
  display:flex;
  flex-wrap:nowrap;
  align-items:center;    
  gap:10px;
  @media(min-width:1200px){
    gap:15px;
  }
  @media(min-width:1600px){
    gap:20px;
  }
  .icon{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;    
    svg{
      fill:#F32435;
    }
  }
  .text{        
    font-size:18px;
    line-height:28px; 
    @media(min-width:1200px){
      font-size:20px;
      line-height:30px; 
    }
  }
  + div{
    margin-top:10px;
    @media(min-width:1600px){
      margin-top:15px;
    }
    @media(min-width:1900px){
      margin-top:25px;
    }
  }
`;

const Figure = styled.div`
  @media(max-width:767.98px){
    display:none;
  }
`;

const BlockCommonHomeWhy = ({ data }) => {
  return (
    <Section className="section-whychoose" $bgcolor="#fff">
      <Container>
        <SectionTitle className="h2-xl"><SectionSubTitle>{data.title}</SectionSubTitle>{data.subTitle}</SectionTitle>
        <SectionDescription dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
        <Row>
          <Col>
            <ListCheck>
              {data.why_features.map((d, i) =>
                <ListItem key={i}>
                  <span className="icon"><CheckRadiusIcon /></span>
                  <span className="text">{d}</span>
                </ListItem>
              )}
            </ListCheck>
            <ExploreMore $justifyContent="flex-start">
              <Link to="/about-us">
                <DefaultOutlineButton text="About Us" />
              </Link>
            </ExploreMore>
          </Col>
          <Col>
            <Figure>
              <GatsbyImage image={data.image.gatsbyImageData} alt={data.title} />
            </Figure>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default BlockCommonHomeWhy;
