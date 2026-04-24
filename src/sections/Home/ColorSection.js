import React from "react"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Container, ExploreMore, Section, SectionSubTitle, SectionDescription, SectionTitle, SectionImageBkg } from "src/components/Section";
import GrayButton from "src/components/Button/GrayButton";
import DefaultOutlineButton from "src/components/Button/DefaultOutlineButton";

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



const ColorSection = () => {
    return (
        <Section className="section-insulation" $ept="0" $epb="80px" $xpt="0" $xpb="60px" $pt="0" $pb="40px" $bgcolor="#fff">
            <Container>
                <ColorBox>
                    <SectionImageBkgs><StaticImage src="../../images/color-bkg.png" alt="Color Options" /></SectionImageBkgs>
                    <SectionTitle className="h2-xl" $textAlign="center" $textColor="#fff">Color Options <SectionSubTitle>for Red Iron Buildings</SectionSubTitle></SectionTitle>
                    <SectionDescription $textAlign="center" $textColor="#fff"><p>ProSpan Steel offers a full line of premium metal building color options through our manufacturing partner. Customers can choose from 20+ premium color options for walls, trim, and roofing.</p></SectionDescription>
                    <ExploreMore><Link to="/"><GrayButton text="Explore More Colors" /></Link></ExploreMore>
                    <Figure><StaticImage src="../../images/color-option.png" alt="Color Options" /></Figure>
                </ColorBox>
                <Geographic>
                    <Row>
                        <ColLeft>
                            <GlobeFigure><StaticImage src="../../images/global.png" alt="Geographic Coverage" /></GlobeFigure>
                        </ColLeft>
                        <ColRight>
                            <SectionTitle className="h2-xl" $textColor="#F32435"><SectionSubTitle $textColor="#0D0A0B">Geographic</SectionSubTitle>Coverage</SectionTitle>                        
                            <SectionDescription><p>ProSpan Steel provides pre-engineered metal building (PEMB) packages to customers nationwide. We ship building kits anywhere in the continental United States through our trusted network of manufacturing partners and freight carriers. For customers in the Southeastern U.S., <strong>we also offer full-service building erection in FL, GA, AL, SC, and NC.</strong></p></SectionDescription>
                            <ExploreMore $justifyContent="flex-start"><Link to="/"><DefaultOutlineButton text="View Our Service Area" /></Link></ExploreMore>
                        </ColRight>
                    </Row>
                </Geographic>
            </Container>
        </Section>
    )
}

export default ColorSection
