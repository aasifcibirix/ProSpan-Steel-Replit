import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, ExploreMore, Section, SectionSubTitle, SectionDescription, SectionTitle, SectionImageBkg } from "src/components/Section";
import GrayButton from "src/components/Button/GrayButton";

const ColorBox = styled.div`
  position:relative;
  padding:20px 20px 0 20px ;
  @media(min-width:992px){
    padding:40px 20px 0 20px ;
	}
  @media(min-width:1200px){
    padding:60px 20px 0 20px ;
	}
	@media(min-width:1600px){
		padding:80px 20px 0 20px ;
	}
`;

const Figure = styled.div`
  position: relative;
  z-index: 1;
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  margin-bottom:-30px;
  @media(min-width:992px){
    margin-bottom:-60px;
	}
  @media(min-width:1200px){
    margin-bottom:-80px;
	}
	@media(min-width:1600px){
		margin-bottom:-100px;
	}
  .gatsby-image-wrapper{
    display:inline-block;
  }
`;

const SectionImageBkgs = styled(SectionImageBkg)`
  overflow:hidden;    
  border-radius:10px;
  margin-bottom:-50px;
  height: calc(100% - 50px);
  @media(min-width:992px){		
    border-radius:20px;
    margin-bottom:-80px;
    height: calc(100% - 80px);
	}
  @media(min-width:1200px){		
    border-radius:25px;
    margin-bottom:-100px;
    height: calc(100% - 100px);
	}
	@media(min-width:1600px){
    border-radius:35px;
    margin-bottom:-120px;
    height: calc(100% - 120px);
	}
`;

const BlockCommonHomeColor = ({ data }) => {
  return (
    <Section className="section-insulation" $bgcolor="#fff" $epb="20px" $xpb="20px">
      <Container>
        <ColorBox>
          <SectionImageBkgs>
            <GatsbyImage image={data.image.gatsbyImageData} alt={data.title} />
          </SectionImageBkgs>
          <SectionTitle $textAlign="center" $textColor="#fff" className="h2-xl">
            {data.title}
            <SectionSubTitle>{data.subTitle}</SectionSubTitle>
          </SectionTitle>
          <SectionDescription
            $textAlign="center"
            $textColor="#fff"
            dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }}
          />
          <ExploreMore>
            <Link to={data.button.link}>
              <GrayButton text={data.button.text} />
            </Link>
          </ExploreMore>
          <Figure>
            <GatsbyImage image={data.mediaCollections[0].gatsbyImageData} alt={data.title} />
          </Figure>
        </ColorBox>
      </Container>
    </Section>
  );
};

export default BlockCommonHomeColor;
