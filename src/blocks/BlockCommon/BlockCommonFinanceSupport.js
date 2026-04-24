import React from "react"
import { Container, Section, SectionBox, SectionDescription, SectionTitle } from "src/components/Section";

const BlockCommonFinanceSupport = ({ data }) => {
  return (
    <Section $ept="80px" $epb="0" $xpt="60px" $xpb="0" $pt="40px" $pb="0" $bgcolor="#fff">
      <Container>
        <SectionBox $bgcolor="#F8FBFD" $borderColor="#E2EAEF">
          <SectionTitle>{data.title}</SectionTitle>
          <SectionDescription mb="0" dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
        </SectionBox>
      </Container>
    </Section>
  )
}

export default BlockCommonFinanceSupport;