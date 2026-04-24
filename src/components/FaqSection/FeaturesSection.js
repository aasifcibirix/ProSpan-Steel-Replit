import React from "react"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Section, SectionDescription, SectionTitle } from "../Section";
import FaqAccordion from "../FaqAccordion";
import { Sidebar } from "../Sidebar";

const Row = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin:0 -15px;
	@media(min-width:1200px){
        margin:0 -30px;
	}
	@media(min-width:1600px){
        margin:0 -40px;        
	}
	@media(min-width:1900px){
        margin:0 -50px;        
	}    
`;
const ColLeft = styled.div`
    position:relative;
    width:100%;
    padding:0 15px;
	@media(min-width:1200px){
        flex:0 0 45%;
        max-width:45%;
        padding:0 30px;
	}
	@media(min-width:1600px){
        padding:0 40px;        
	}
	@media(min-width:1900px){
        padding:0 50px;        
	}
`;
const ColRight = styled.div`
    position:relative;
    width:100%;
    padding:0 15px;
	@media(min-width:1200px){
        flex:0 0 55%;
        max-width:55%;
        padding:0 30px;
	}
	@media(min-width:1600px){
        padding:0 40px;        
	}
	@media(min-width:1900px){
        padding:0 50px;        
	}    
`;

const Figure = styled.div`
    margin:0 0 30px;
    .gatsby-image-wrapper{
        overflow:hidden;
        border-radius:10px;
        @media(min-width:992px) {
        border-radius:20px;
        }
        @media(min-width:1200px) {
        border-radius:25px;
        }
        @media(min-width:1600px) {
        border-radius:35px;
        }
    }
`;


const FaqSection = () => {
    return (
        <Section className="section-faq" $bgcolor="#fff">
            <Container $maxWidth="1680px">
                <Row>
                    <ColLeft>
                        <Sidebar className="isSticky">
                            <SectionTitle>Agriculture Metal Building FAQs</SectionTitle>
                            <SectionDescription><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed varius lectus. Pellentesque luctus sem quis neque condimentum, id mattis eros accumsan. Integer interdum nunc ac quam commodo, vel interdum eros mattis.</p></SectionDescription>
                            <Figure><StaticImage src="../../images/faqs.jpg" alt="Agriculture Metal Building FAQs" /></Figure>
                        </Sidebar>
                    </ColLeft>
                    <ColRight>
                        <FaqAccordion />
                    </ColRight>
                </Row>
            </Container>
        </Section>
    )
}

export default FaqSection
