import React from "react";
import styled from "styled-components";
import { Container, Section, SectionDescription, SectionTitle, StickySidebar } from "src/components/Section";
import { Accordions, Accordionsitems, AccordionsContent, AccordionsContentinner, AccordionsTitle } from "src/components/CustomizationAddon/style";
import { DurabilityIcon } from "src/components/Icons";

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

export const Accordionsitemss = styled(Accordionsitems)`
  opacity:1;
  .accordions-content{
    max-height:4000px;
    display:none;
  }
  &:nth-child(2){
    .accordions-content{
      display:block;
    }
  }
  &:hover{
    .accordions-title{
      color: #fff;
      strong{
        color: #fff;
      }
      i, .icon{
        border-color:#fff;
        svg{
          fill:#fff;
        }
      }
    }
    .accordion-desc{
      p{
        color: #fff;
      }
    }
  } 
`


const BlockCommonBuildingPackagesCustomization = ({ data }) => {
  // const [activeAccordion, setActiveAccordion] = useState(0);
  // const handleAccodion = (key) => {
  //   if (activeAccordion === key) {
  //     return setActiveAccordion(null);
  //   }
  //   setActiveAccordion(key);
  // };

  return (
    <Section className="section-customization" $bgcolor="#fff">
      <Container>
        <Row>
          <ColLeft>
            <StickySidebar>
              <SectionTitle>{data.title}</SectionTitle>
              <SectionDescription dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
            </StickySidebar>
          </ColLeft>
          <ColRight>
            <Accordions className="accordions">
              {data.refCollections.map((item, index) => (
                <Accordionsitemss
                  className='accordions-items'
                  key={index}
                >
                  <AccordionsTitle className="accordions-title">
                    <span className="text">
                      <i><DurabilityIcon /></i>
                      <strong>{item.textShort}</strong>
                      <SectionDescription className="accordion-desc" $mb="0" dangerouslySetInnerHTML={{ __html: item.textLong && item.textLong.childMarkdownRemark.html }} />
                    </span>
                  </AccordionsTitle>
                  <AccordionsContent className="accordions-content">
                    <AccordionsContentinner
                      dangerouslySetInnerHTML={{ __html: item.textContent && item.textContent.childMarkdownRemark.html }}
                    />
                  </AccordionsContent>
                </Accordionsitemss>
              ))}
            </Accordions>
          </ColRight>
        </Row>
      </Container>
    </Section>
  );
};

export default BlockCommonBuildingPackagesCustomization;