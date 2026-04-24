import React from "react"
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, ExploreMore, Section, SectionSubTitle, SectionDescription, SectionTitle, SectionImageBkg } from "src/components/Section";
import DefaultOutlineButton from "src/components/Button/DefaultOutlineButton";

const Row = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items: flex-end;
  margin:0 -10px;
`;

const ColLeft = styled.div`
  position:relative;
  width:100%;
  padding:0 10px;
  @media(min-width:768px){
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
`;

const ColRight = styled.div`
  position:relative;
  width:100%;
  padding:0 10px;
  @media(min-width:768px){
    flex:0 0 33.33333%;
    max-width:33.33333%;
  }
  @media(min-width:992px){
    flex:0 0 44%;
    max-width:44%;
  }
`;

const BrandName = styled.div`
  text-align:right;   
  .gatsby-image-wrapper{
    display:inline-block;
  }
  padding:20px 0;
  @media(min-width:992px){        
    padding:20px 0;
	}
  @media(min-width:1200px){
    padding:30px 0;
	}
	@media(min-width:1600px){
		margin:40px 0;
	}  
`;

const WhiteBlureBox = styled.div`
  position:relative;
  padding:30px 20px;
  @media(min-width:1200px){
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

const BlockCommonRedIronFinance = ({ data }) => {
  return (
    <Section className="section-financing" $bgcolor="#fff">
      <SectionImageBkg>
        <GatsbyImage image={data.image.gatsbyImageData} alt={data.title} />
      </SectionImageBkg>
      <Container>
        <Row>
          <ColLeft>
            <WhiteBlureBox>
              <SectionTitle $textColor="#0D0A0B" className="h2-xl">
                {data.title}
                <SectionSubTitle $textColor="#000">{data.subTitle}</SectionSubTitle>
              </SectionTitle>
              <SectionDescription dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
              <ExploreMore $justifyContent="flex-start">
                <Link to={data.button.link}>
                  <DefaultOutlineButton text={data.button.text} />
                </Link>
              </ExploreMore>
            </WhiteBlureBox>
          </ColLeft>
          <ColRight>
            <BrandName>
              <GatsbyImage image={data.mediaCollections[0].gatsbyImageData} alt={data.title} />
            </BrandName>
          </ColRight>
        </Row>
      </Container>
    </Section>
  );
};

export default BlockCommonRedIronFinance;
