import React from "react"
import Layout from "src/components/layout"
import Seo from "src/components/seo"
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import { BreadCrumb, Container, Section, SectionDescription, SectionBox, SectionTitle } from "src/components/Section";
import { HeroBanner, HeroCover, HeroControler, HeroTitle } from "src/components/HeroInner";
import ColorPallets from "src/components/ColorPallets";
import styled from "styled-components";

const Row = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;    
`;
const Col = styled.div`
  position:relative;
  width:100%;  
  @media(min-width:1200px){
    flex:0 0 50%;
    max-width:50%;
  }
`;

const ColorBkg = styled.div`  
    position:absolute;
    top:0;
    left:0;
    width: calc(100% - 40px);
    height:100%;
    overflow:hidden;
    border-radius:30px;
    .gatsby-image-wrapper{
        width:100%;
        height:100%;
    }
`;
const Figure = styled.figure`   
    position: relative;
    z-index:1;
    display: flex;
    align-items: self-end;
    height: 100%;
    margin: 0 0 0 -50px;
    @media(min-width:992px){
        margin: 0 0 0 -50px;
    }
    @media(min-width:1200px){
        margin:0 0 0 -40px;
        bottom: -55px;
    }
    @media(min-width:1600px){
        margin: 0 0 0 -50px;       
        bottom: -80px;
    }
`;
const HelpText = styled.div`   
    color: #fff;
    font-size: 16px;
    line-height: 28px;
    position: relative;
    padding-left: 15px;
    font-weight: 300;
    &:before{
        content: '';
        width:4px;
        height:4px;
        background-color:#fff;
        border-radius:50%;
        position:absolute;
        left:0;
        top:14px;
    }
`;
const ColorBox = styled.div`   
    position:relative;
    padding:20px 10px;
    @media(min-width:1200px){
        padding:40px 20px 30px 5px;
    }
    @media(min-width:1600px){
        padding:50px 40px 40px 10px;
    }
    @media(min-width:1900px){
        padding:60px 60px 50px 20px;
    }
    h3{
        text-transform:uppercase;
        color:#fff;
        margin-bottom:10px;
        @media(min-width:1200px){
            margin-bottom:20px;
        }
    }
`;


const ColorOptionsPage = () => {
    return (
        <Layout>
            <Seo title="Red Iron Building Color Options | Prospan Steel" description="Customize your red iron building with Prospan Steel's premium color options. Choose from over 20 colors for walls, trim, and roofing, all with durable baked enamel finishes." />
            <HeroBanner>
                <HeroCover><StaticImage src="../images/color-banner.jpg" alt="Color Options" /></HeroCover>
                <HeroControler>
                    <Container $maxWidth="1760px">
                        <BreadCrumb className="breadcrumb"><Link to="/">Home</Link><span>Color Options</span></BreadCrumb>
                        <HeroTitle $mb="0">Color Options</HeroTitle>
                    </Container>
                </HeroControler>
            </HeroBanner>

            <Section $bgcolor="#fff" className="section-premium">
                <Container $maxWidth="1760px">
                    <SectionTitle>Premium Color Options for Your Red Iron Structure</SectionTitle>
                    <SectionDescription $maxWidth="1540px" $ml="0" $mb="0"><p>At ProSpan Steel, we provide a variety of premium color options for our steel I-beam structures. From walls to roofing and trim, our color finishes are designed to enhance your structure’s aesthetics while ensuring long-lasting durability. Our baked enamel finishes are resistant to fading, chipping, and weathering, ensuring your building continues to look great for years to come. Choose the perfect color to match your environment and functional needs, whether you’re building a commercial warehouse, industrial facility, or agricultural structure.</p></SectionDescription>
                </Container>
            </Section>

            <Section $ept="0" $epb="0" $xpt="0" $xpb="0" $pt="0" $pb="0" $bgcolor="#fff" className="section-color-option">
                <Container>
                    <SectionBox $bgcolor="#111415" $borderColor="#111415" $p="10px">
                        <Row>
                            <Col className="d-none d-xl-block">
                                <ColorBkg>
                                    <StaticImage src="../images/color-bkg-small.jpg" alt="Available Color Options" />
                                </ColorBkg>
                                <Figure>
                                    <StaticImage src="../images/red-iron-structure.png" alt="Available Color Options" />
                                </Figure>
                            </Col>
                            <Col>
                                <ColorBox>
                                    <h3>Available Color Options</h3>
                                    <ColorPallets />
                                    <HelpText> These colors are available in standard 26-gauge panels with a durable, long-lasting baked enamel finish. Color selection may vary slightly depending on building location and specific panel profiles.</HelpText>
                                </ColorBox>
                            </Col>
                        </Row>
                    </SectionBox>
                </Container>
            </Section>

            <Section $bgcolor="#fff">
                <Container>
                    <SectionBox $pxy="5px" $bgcolor="#F8FBFD" $borderColor="#E2EAEF">
                        <SectionTitle>Ready to Get Started?</SectionTitle>
                        <SectionDescription $mb="0"><p>Picking the right color for your steel structure is about more than just looks—it’s about durability and creating something that stands the test of time. At ProSpan Steel, we work with you to find the finish that fits both your project’s style and its surroundings. Our team will walk you through the options, answer your questions, and provide a detailed, no-obligation quote so you know exactly what to expect.</p><p>From walls and roofing to trim, we make sure every choice supports both function and style. Let’s turn your vision into reality—give us a call at <a href="tel:3862470255">(386) 247-0255</a> and get started today.</p></SectionDescription>
                    </SectionBox>
                </Container>
            </Section>
        </Layout >
    )
}

export default ColorOptionsPage