import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Section, SectionDescription, SectionTitle } from "src/components/Section";
import { Accordions, Accordionsitems, AccordionsContent, AccordionsContentinner, AccordionsTitle } from "src/components/Accordion";
import { PointerDownIcon } from "src/components/Icons";

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
	@media(min-width:1200px) {
    flex:0 0 45%;
    max-width:45%;
    padding:0 30px;
	}
	@media(min-width:1600px) {
    padding:0 40px;
	}
	@media(min-width:1900px) {
    padding:0 50px;
	}
`;

const ColRight = styled.div`
  position:relative;
  width:100%;
  padding:0 15px;
	@media(min-width:1200px) {
    flex:0 0 55%;
    max-width:55%;
    padding:0 30px;
	}
	@media(min-width:1600px) {
    padding:0 40px;  
	}
	@media(min-width:1900px) {
    padding:0 50px;
	}    
`;

const Figure = styled.div`
  padding:0 0 30px;
  .gatsby-image-wrapper{
    overflow:hidden;
    border-radius:35px;
  }
`;

const BlockProductFaq = ({ data }) => {
  const contentHeading = data.product.contents.find(r => r.identify === "CONTENT_PRODUCT_FAQ_HEADING");
  const contentCardList = data.product.contents.filter(r => r.identify === "CONTENT_PRODUCT_FAQ_CARD");
  const [activeFaq, setActiveFaq] = React.useState("");

  const handleAccordionToggle = (key) => {
    if (activeFaq === key) {
      return setActiveFaq(null);
    }
    setActiveFaq(key);
  };

  return (
    <Section className="section-faq" $bgcolor="#fff">
      <Container>
        <Row>
          <ColLeft>
            <SectionTitle $maxWidth="680px" $ml="0">{contentHeading.textShort}</SectionTitle>
            <SectionDescription dangerouslySetInnerHTML={{ __html: contentHeading.textLong.childMarkdownRemark.html }} />
            <Figure>
              <GatsbyImage image={data.image.gatsbyImageData} alt={contentHeading.textShort} />
            </Figure>
          </ColLeft>
          <ColRight>
            <Accordions className="accordions">
              {contentCardList.map(d => (
                <Accordionsitems
                  className={`accordions-items ${activeFaq === d.id ? "active" : ""}`}
                  key={d.id}
                >
                  <AccordionsTitle
                    className="accordions-title"
                    onClick={() => handleAccordionToggle(d.id)}
                  >
                    <strong>{d.textShort}</strong>
                    <span><PointerDownIcon /> </span>
                  </AccordionsTitle>
                  <AccordionsContent className="accordions-content">
                    <AccordionsContentinner>
                      <div dangerouslySetInnerHTML={{ __html: d.textLong.childMarkdownRemark.html }} />
                    </AccordionsContentinner>
                  </AccordionsContent>
                </Accordionsitems>
              ))}
            </Accordions>
          </ColRight>
        </Row>
      </Container>
    </Section>
  );
};

export default BlockProductFaq;
