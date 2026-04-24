import React, { useState } from "react";
import { Container, Section } from "src/components/Section";

import {
  Accordions,
  Accordionsitems,
  AccordionsContent,
  AccordionsContentinner,
  AccordionsTitle,
} from "src/components/Accordion";
import { PointerDownIcon } from "src/components/Icons";


const BlockCommonFaqContent = ({ data }) => {
  //const [activeTab, setActiveTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);
  const handleAccodion = (key) => {
    if (activeFaq === key) {
      return setActiveFaq(null);
    }
    setActiveFaq(key);
  };
  return (
    <Section $bgcolor="#fff">
      <Container $maxWidth="1460px">

        <Accordions className="accordions">
          {data.refCollections.map((d) => (
            <Accordionsitems
              className={`accordions-items ${activeFaq === d.id ? "active" : ""}`}
              key={d.id}
            >
              <AccordionsTitle
                className="accordions-title"
                onClick={() => handleAccodion(d.id)}
              >
                <strong>{d.textShort}</strong>
                <span><PointerDownIcon /> </span>
              </AccordionsTitle>
              <AccordionsContent className="accordions-content">
                <AccordionsContentinner>
                  <p>{d.textLong.textLong}</p>
                </AccordionsContentinner>
              </AccordionsContent>
            </Accordionsitems>
          ))}
        </Accordions>

        {/* {data.refCollections.map((item) => (
          <Accordions className="accordions">
            {item.contents.map((faq, index) => (
              <Accordionsitems
                className={`accordions-items ${activeFaq === index ? "active" : ""}`}
                key={index}
              >
                <AccordionsTitle
                  className="accordions-title"
                  onClick={() => handleAccodion(index)}
                >
                  <strong>{faq.textShort}</strong>
                  <span><PointerDownIcon /> </span>
                </AccordionsTitle>
                <AccordionsContent className="accordions-content">
                  <AccordionsContentinner>
                    <p>{faq.textLong.textLong}</p>
                  </AccordionsContentinner>
                </AccordionsContent>
              </Accordionsitems>
            ))}
          </Accordions>
        ))} */}

        {/* <NavTab className="navtab">
          {data.refCollections.map((item, index) => (
            <NavItemTab className="navtab-item" key={index}>
              <button
                type="button"
                className={`navtab-link ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {item.textShort}
              </button>
            </NavItemTab>
          ))}
        </NavTab>

        <NavTabContent className="navtab-content">
          {data.refCollections.map((item, index) => (
            <NavPane
              key={index}
              className={`navtab-pane ${activeTab === index ? "active" : ""}`}
              role="tabpanel"
            >
              <SectionDescription dangerouslySetInnerHTML={{ __html: item.textLong.childMarkdownRemark.html }} />
              <Accordions className="accordions">
                {item.contents.map((faq, index) => (
                  <Accordionsitems
                    className={`accordions-items ${activeFaq === index ? "active" : ""}`}
                    key={index}
                  >
                    <AccordionsTitle
                      className="accordions-title"
                      onClick={() => handleAccodion(index)}
                    >
                      <strong>{faq.textShort}</strong>
                      <span><PointerDownIcon /> </span>
                    </AccordionsTitle>
                    <AccordionsContent className="accordions-content">
                      <AccordionsContentinner>
                        <p>{faq.textLong.textLong}</p>
                      </AccordionsContentinner>
                    </AccordionsContent>
                  </Accordionsitems>
                ))}
              </Accordions>
            </NavPane>
          ))}
        </NavTabContent> */}
        {/* <Row>
          <ColLeft>
            <SectionTitle>{data.title}</SectionTitle>
            <SectionDescription dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
            <Figure><GatsbyImage image={data.image.gatsbyImageData} alt={data.title} /></Figure>
          </ColLeft>
          <ColRight>
          </ColRight>
        </Row> */}
      </Container>
    </Section>
  )
}

export default BlockCommonFaqContent;