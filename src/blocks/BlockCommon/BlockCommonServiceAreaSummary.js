import React from "react";
import { Container, Section, SectionTitle, SectionDescription } from "src/components/Section";

const BlockCommonServiceAreaSummary = ({ data }) => {
  return (
    <Section $bgcolor="#fff">
      <Container $maxWidth="1760px">
        <SectionTitle >{data.title}</SectionTitle>
        <SectionDescription dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
      </Container>
    </Section>
  );
};

export default BlockCommonServiceAreaSummary;