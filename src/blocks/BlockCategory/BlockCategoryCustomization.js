import React from "react"
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Section, SectionDescription, SectionTitle } from "src/components/Section";

const BlackBox = styled.div`
  background-color:#111415;
  border-radius:10px;
  padding:20px;
  @media(min-width:992px){		
    border-radius:20px;
    padding:40px;
	}
  @media(min-width:1200px){		
    border-radius:25px;
    padding:60px;
	}
	@media(min-width:1600px){
    border-radius:35px;
		padding:80px;
	}
`;

const Row = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin:0 -10px;
  @media(min-width:1200px){		
    margin:0 -15px;
  }
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
  @media(min-width:992px){		
    padding:0 15px;
	}
	@media(min-width:1600px){
    padding:0 25px;
  }
`;

const ColRight = styled.div`
  position:relative;
  width:100%;
  padding:0 10px;
  display:none;
  @media(min-width:992px){		
    display:flex;
    padding:0 15px;
    flex:0 0 33.33333%;
    max-width:33.33333%;
	}
	@media(min-width:1600px){
    padding:0 25px;
	}
`;

const ListFeature = styled.div`
  margin-bottom:30px;
`;

const ListItemFeature = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;    
  justify-content: flex-start;
  flex-direction:column;
  gap:15px;
  @media(min-width:576px) {
    flex-wrap:nowrap;
    flex-direction: row;
  }
  @media(min-width:1200px) {
    gap:20px;
  }
  @media(min-width:1600px) {
    gap:30px;
  }
  .figure {
    margin-bottom:0;
    margin-right: auto;
    .gatsby-image-wrapper {
      overflow:hidden;
      border-radius:40px;
      height:80px;
      @media(min-width:576px){
        height:auto;
        border-radius:80px;
      }
    }
  }
  .figure-content{   
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    h3 {
      font-weight:600;
      color:#fff;
      margin-bottom:0;
      font-size: 24px;
      line-height: 34px;
      @media (min-width: 1200px) {
        font-size: 26px;
        line-height: 36px;
      }
    }   
    p {
      color:#fff;
      margin-bottom:0;
      font-weight: 300;
    }
  }
  + div{
    border-top:1px solid #272828;    
    margin-top:20px;
    padding-top:20px;
    @media(min-width:1900px){
      margin-top:30px;
      padding-top:30px;
    }
  }
`;

const Figure = styled.div`
  margin:0;
`;

const BlockCategoryCustomization = ({ data }) => {
  return (
    <Section className="section-customization" $ept="0" $epb="20px" $xpt="0" $xpb="20px" $pt="0" $pb="20px" $bgcolor="#fff">
      <Container>
        <BlackBox>
          <SectionTitle $textColor="#fff">{data.productCategory.customizationHeading}</SectionTitle>
          {data.productCategory.customizationSubHeading &&
            <SectionDescription $textColor="#fff" dangerouslySetInnerHTML={{ __html: data.productCategory.customizationSubHeading.childMarkdownRemark.html }} />
          }
          <Row>
            <ColLeft>
              <ListFeature>
                {data.productCategory.customizationCollections && data.productCategory.customizationCollections.map(d =>
                  <ListItemFeature key={d.id}>
                    <figure className="figure">
                      {d.image &&
                        <GatsbyImage image={d.image.gatsbyImageData} alt={d.textShort} />
                      }
                    </figure>
                    <div className="figure-content">
                      <h3>{d.textShort}</h3>
                      <div dangerouslySetInnerHTML={{ __html: d.textLong.childMarkdownRemark.html }} />
                    </div>
                  </ListItemFeature>
                )}
              </ListFeature>
            </ColLeft>
            <ColRight>
              <Figure className="isSticky">
                {data.mediaCollections &&
                  <GatsbyImage image={data.mediaCollections[0].gatsbyImageData} alt={data.title} />
                }
              </Figure>
            </ColRight>
          </Row>
        </BlackBox>
      </Container>
    </Section>
  );
};

export default BlockCategoryCustomization;
