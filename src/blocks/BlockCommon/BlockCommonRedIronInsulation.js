import React from "react"
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Container, ExploreMore, Section, SectionSubTitle, SectionDescription, SectionTitle } from "../../components/Section";
import GrayButton from "../../components/Button/GrayButton";
const Row = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;  
    margin:0 -10px;  
    @media(min-width:1200px){
        margin:0 -15px;
    }
`;
const Col = styled.div`
    position:relative;
    width:100%;
    padding:0 10px;
    @media(min-width:768px){
        flex:0 0 50%;
        max-width:50%;
    }
    @media(min-width:1200px){
        padding:0 15px;
    }
`;
const CardThumb = styled.div`   
    margin-bottom:30px;
    @media(min-width:1600px){
        margin-bottom:40px;
    }
`;

const CardbBodyThumb = styled.div`
    position:relative;
    figure{
        border-radius:30px;
        overflow:hidden;
        margin:0;
        .gatsby-image-wrapper{
            border-radius:30px;
            overflow:hidden;
            &::after{
                background-color:rgba(0,0,0,0.34);
                content: '';
                position: absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
            }
        }
    }
    figcaption{
        position:absolute;
        max-width:360px;
        width:100%;
        font-family: 'Rajdhani', serif;
        color:#fff;
        font-size: 20px;
        line-height: 30px;
        font-weight: 500;
        bottom:20px;
        left:20px;
        @media (min-width: 768px) {
            bottom:30px;
            left:30px;
            font-size: 24px;
            line-height: 34px;
        }
        @media (min-width: 992px) {
            bottom:40px;
            left:40px;
            font-size: 28px;
            line-height: 38px;
        }
    }
`;
const InsulationBox = styled.div`
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
const InsulationInner = styled.div`
    max-width:1410px;
    width:100%;
    margin:0 auto;
`;

const BlockCommonRedIronInsulation = ({ data }) => {
  return (
    <Section className="section-insulation" $ept="0" $epb="20px" $xpt="0" $xpb="20px" $pt="0" $pb="20px" $bgcolor="#fff">
      <Container>
        <InsulationBox>
          <SectionTitle $textAlign="center" $textColor="#fff" className="h2-xl"><SectionSubTitle>{data.title}</SectionSubTitle>{data.subTitle}</SectionTitle>
          <SectionDescription $textAlign="center" $textColor="#fff" dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
          <InsulationInner>
            <Row>
              {data.refCollections.map(item => (
                <Col key={item.id}>
                  <CardThumb>
                    <CardbBodyThumb>
                      <figure><GatsbyImage image={item.image.gatsbyImageData} alt={item.textShort} /></figure>
                      <figcaption>{item.textShort}</figcaption>
                    </CardbBodyThumb>
                  </CardThumb>
                </Col>
              ))}
            </Row>
            <ExploreMore><Link to="/insulation"><GrayButton text="Explore Insulation Options" /></Link></ExploreMore>
          </InsulationInner>
        </InsulationBox>
      </Container>
    </Section>
  )
}

export default BlockCommonRedIronInsulation;