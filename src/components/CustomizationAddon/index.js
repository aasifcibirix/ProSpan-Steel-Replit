import React from "react"
import styled from "styled-components";
import { Container, Section, SectionDescription, SectionTitle } from "src/components/Section";
import Accordion from "src/components/CustomizationAddon/Accordion";

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
`;
const ColLeft = styled.div`
        position:relative;
        width:100%;
        padding:0 15px;
	@media(min-width:1200px){
        flex:0 0 35%;
        max-width:35%;
        padding:0 30px;
	}
	@media(min-width:1600px){
        padding:0 40px;        
	}
`;
const ColRight = styled.div`
    position:relative;
    width:100%;
    padding:0 15px;
    @media(min-width:1200px){
        flex:0 0 65%;
        max-width:65%;
        padding:0 30px;
	}
	@media(min-width:1600px){
        padding:0 40px;        
	}
	   
`;
const StickySidebar = styled.div`
    position:sticky;
`;


const CustomizationAddon = () => {
  return (
    <Section className="section-customization"  $bgcolor="#fff">      
        <Container>
            <Row>
                <ColLeft>
                    <StickySidebar className="isSticky">
                        <SectionTitle>Customization and Add-ons for Red Iron Metal Building Kits</SectionTitle>
                        <SectionDescription><p>When you purchase a steel building from ProSpan, you’ll be able to customize your structure’s:</p></SectionDescription>
                    </StickySidebar>
                </ColLeft>
                <ColRight>
                    <Accordion />
                </ColRight>
            </Row>
        </Container>
    </Section>
  )
}

export default CustomizationAddon
