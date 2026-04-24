import React from "react"
import { Link } from "gatsby";
import { Container, Section, SectionDescription, SectionTitle, ExploreMore, PanelGrid, PanelItemGrid, PanelDefault, PanelDefaultHeader, PanelDefaultBody } from "src/components/Section";
import { TagIcon } from "src/components/Icons";
import DefaultButton from "src/components/Button/DefaultButton";

const BlockCommonRedIronFeature = ({ data }) => {
  return (
    <Section $bgcolor="#fff">
      <Container $maxWidth="1620px">
        <SectionTitle $textAlign="center" $mb="20px">{data.title}</SectionTitle>
      </Container>
      <Container $maxWidth="1280px">
        <PanelGrid>
          {data.refCollections.map(item => (
            <PanelItemGrid key={item.id}>
              <PanelDefault>
                <PanelDefaultHeader>
                  <span className="icon"><TagIcon /></span>
                  <span className="text">{item.textShort}</span>
                </PanelDefaultHeader>
                <PanelDefaultBody>
                  <SectionDescription dangerouslySetInnerHTML={{ __html: item.textLong.childMarkdownRemark.html }} />
                </PanelDefaultBody>
              </PanelDefault>
            </PanelItemGrid>
          ))}
        </PanelGrid>
        <SectionDescription $textAlign="center" dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
        <ExploreMore><Link to="/building-packages"><DefaultButton text={data.view_button.text} /></Link></ExploreMore>
      </Container>
    </Section>
  )
}

export default BlockCommonRedIronFeature;