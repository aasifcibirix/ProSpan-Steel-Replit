import React from "react";
import { Container, Section, SectionDescription, SectionTitle, PanelGrid, PanelItemGrid, PanelDefault, PanelDefaultHeader, PanelDefaultBody } from "src/components/Section";
import { CheckIcon } from "src/components/Icons";

const BlockCommonBuildingPackagesGuide = ({ data }) => {
  return (
    <Section $bgcolor="#fff" className="section-guide">
      <Container $maxWidth="1620px">
        <SectionTitle $textAlign="center">{data.title}</SectionTitle>
        <SectionDescription $textAlign="center" dangerouslySetInnerHTML={{ __html: data.titleLong.childMarkdownRemark.html }} />
      </Container>
      <Container $maxWidth="1560px">
        <PanelGrid>
          {data.refCollections.map(item => (
            <PanelItemGrid>
              <PanelDefault>
                <PanelDefaultHeader>
                  <span className="icon"><CheckIcon /></span>
                  <span className="text"><strong>{item.textShort}</strong><div className="tw-text-[18px]"> {item.textLong.textLong}</div></span>
                </PanelDefaultHeader>
                <PanelDefaultBody>
                  <ul>
                    {item.contents.map(content => (
                      <li><strong>{content.textShort}</strong>: {content.textLong.textLong} </li>
                    ))}
                  </ul>
                </PanelDefaultBody>
              </PanelDefault>
            </PanelItemGrid>
          ))}
        </PanelGrid>
      </Container>
    </Section>
  );
};


export default BlockCommonBuildingPackagesGuide;