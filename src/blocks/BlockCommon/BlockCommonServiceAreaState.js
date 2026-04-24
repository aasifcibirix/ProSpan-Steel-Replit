import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Section, SectionDescription, SectionBox, SectionTitle } from "src/components/Section";
import ServeAreaList from "src/components/ServeAreaList";
import styled from "styled-components";
import { Link } from "gatsby";
import { MapIcon } from "src/components/Icons";
import { ListLocation, ListItemLocation } from "src/components/Section";

const Figure = styled.figure`   
  position: absolute;  
  margin-bottom:0;
  right:-20px;
  bottom:-10px;
  @media(min-width:992px){		    
    right:-30px;
    bottom:-20px;
  }
  @media(min-width:1200px){		
    right:-40px;
    bottom:-30px;
  }
  @media(min-width:1600px){
    right:-60px;
    bottom:-40px;
  }


`;

const ServiceBox = styled.div`    
  position:relative;
`;

const SectionBoxs = styled(SectionBox)`    
  position:relative;
  z-index:1;
  max-width:1210px;
  width:100%;
  margin:0 auto;
  padding:20px 20px 0 20px;
  @media(min-width:992px){	
    padding:30px 30px 0 30px;
  }
`;

const BlockCommonServiceAreaState = ({ data }) => {
  const resources = useStaticQuery(graphql`
    query {
      allContentfulState(sort: {slug: ASC}) {
        edges {
          node {
            slug
            pageTemplate {
              url
            }
          }
        }
      }
    }
  `);
  const states = resources.allContentfulState.edges;
  return (
    <Section $ept="0" $epb="0" $xpt="0" $xpb="0" $pt="0" $pb="0" $bgcolor="#fff">
      <Container>
        <SectionBox>
          <SectionTitle $textAlign="center" $textColor="#fff">{data.title}</SectionTitle>
          <SectionDescription $textAlign="center" $textColor="#fff" $maxWidth="1680px" $mb="30px" dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
          <ListLocation>
            {states.map((item, index) => {
              return (
                <ListItemLocation key={index}>
                  <Link to={`${item.node.pageTemplate.url}${item.node.slug}`}>
                    <span className="icon"><MapIcon /></span>
                    <span className="text">{item.node.slug}</span>
                  </Link>
                </ListItemLocation>
              )
            }

            )}
          </ListLocation>
          <ServiceBox>
            <Figure><StaticImage src="../../images/global.png" alt="global" /></Figure>
            <SectionBoxs $bgcolor="#fff" $borderColor="#fff">
              <SectionDescription $textAlign="center" $mb="20px">{data.subTitle}</SectionDescription>
              <ServeAreaList />
            </SectionBoxs>
          </ServiceBox>
        </SectionBox>
      </Container>
    </Section>
  );
};

export default BlockCommonServiceAreaState;