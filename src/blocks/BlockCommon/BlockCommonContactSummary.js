import React from "react";
import { Container, Section, SectionDescription, SectionTitle } from "src/components/Section";

const BlockCommonContactSummary = ({ data }) => {
  return (
    <Section $bgcolor="#fff">
      <Container>
        <SectionTitle>{data.title}</SectionTitle>
        <SectionDescription
          $maxWidth="1540px"
          $ml="0"
          $mb="0"
          dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }}
        />
      </Container>
    </Section>
  );
};

export default BlockCommonContactSummary;