import React from "react"
import { Container, Section, MarkdownContent } from "src/components/Section";

const BlockCommonContentTemplateSummary = ({ data }) => {
  const summaryData = data.resources.find(r => r.identify === "CONTENT_TEMPLATE_SUMMARY_DATA");

  if (!summaryData) {
    return null;
  }

  return (
    <Section $bgcolor="#fff">
      <Container $maxWidth="1540px">
        <MarkdownContent dangerouslySetInnerHTML={{ __html: summaryData.textLong && summaryData.textLong.childMarkdownRemark.html }} />
      </Container>
    </Section>
  )
}

export default BlockCommonContentTemplateSummary;