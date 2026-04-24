import React from "react"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Container, ExploreMore, Section, SectionSubTitle, SectionDescription, SectionTitle } from "../../components/Section";
import DefaultOutlineButton from "../../components/Button/DefaultOutlineButton";
import { CheckRadiusIcon } from "../../components/Icons";
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

const whyChooseData = [
    "Leading PEMB Suppliers",
    "Red Iron Buildings Supplier",
    "Process Management from Design to Delivery",
    "Trusted by Manufacturers and Suppliers Across US",
    "Industry Leaders for Past 20 Years",
    "100% Customer Satisfaction",
    "Highest Quality Standards",
    "20+ Premium Color Options",
    "Custom-Made",
    "Certified & Code-Compliant"
].map(point => ({ point }));


const WhyChooseSection = () => {
    return (
        <Section className="section-whychoose" $bgcolor="#fff">
            <Container>
                <SectionTitle className="h2-xl"><SectionSubTitle $textColor="#2B2B2B">Why Choose</SectionSubTitle> ProSpan Steel?</SectionTitle>
                <SectionDescription><p>With years of commercial construction and real estate expertise, ProSpan Steel is dedicated to delivering high-quality structures that exceed expectations. Our buildings are crafted from premium galvanized steel, engineered to withstand extreme climate, and made to put in the work for you, day in and day out. We’re also proud to offer customer service that goes beyond your initial purchase. Our building experts will walk you through the buying process from start to finish and carefully coordinate with you every step of the way. Call us today at <a href="tel:3862470255">(386) 247-0255</a> to start designing your ProSpan building with one of our experts! </p></SectionDescription>
                <Row>
                    <Col>
                        <ListCheck>
                            {whyChooseData.map((item, index) =>
                                <ListItem key={index}><span className="icon"><CheckRadiusIcon /></span><span className="text">{item.point}</span></ListItem>
                            )}
                        </ListCheck>
                        <ExploreMore $justifyContent="flex-start">
                            <Link to="/about-us"><DefaultOutlineButton text="About Us" /></Link>
                        </ExploreMore>
                    </Col>
                    <Col><Figure><StaticImage src="../../images/why-choose.png" alt="Why Choose ProSpan Steel?" /></Figure></Col>
                </Row>
            </Container>
        </Section>
    )
}

export default WhyChooseSection
