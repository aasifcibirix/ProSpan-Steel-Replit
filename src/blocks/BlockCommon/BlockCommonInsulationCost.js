import React from "react";
import { Container, Section, SectionDescription, SectionTitle, PanelGrid, PanelItemGrid, PanelDefault, PanelDefaultHeader, PanelDefaultBody } from "src/components/Section";
import { TagIcon } from "src/components/Icons";

const BlockCommonInsulationCost = ({ data }) => {
  const costData1 = data.refCollections.find(r => r.identify === "BLOCK_COMMON_INSULATION_COST_DATA1");
  const costData2 = data.refCollections.find(r => r.identify === "BLOCK_COMMON_INSULATION_COST_DATA2");

  return (
    <Section $ept="80px" $epb="0" $xpt="60px" $xpb="0" $pt="40px" $pb="0" $bgcolor="#fff">
      <Container $maxWidth="1510px">
        <SectionTitle $textAlign="center">{data.title}</SectionTitle>
        <SectionDescription $textAlign="center" dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
        <PanelGrid>
          <PanelItemGrid>
            <PanelDefault>
              <PanelDefaultHeader>
                <span className="icon"><TagIcon /></span>
                <span className="text">{costData1.textShort}</span>
              </PanelDefaultHeader>
              <PanelDefaultBody>
                <ul>
                  {costData1.extra.data.map(item =>
                    <li>{item}</li>
                  )}
                </ul>
              </PanelDefaultBody>
            </PanelDefault>
          </PanelItemGrid>
          <PanelItemGrid>
            <PanelDefault>
              <PanelDefaultHeader>
                <span className="icon"><TagIcon /></span>
                <span className="text">{costData2.textShort}</span>
              </PanelDefaultHeader>
              <PanelDefaultBody>
                <ul>
                  {costData2.extra.data.map(item =>
                    <li>{item}</li>
                  )}
                </ul>
              </PanelDefaultBody>
            </PanelDefault>
          </PanelItemGrid>
        </PanelGrid>
      </Container>
    </Section>
  );
};

export default BlockCommonInsulationCost;