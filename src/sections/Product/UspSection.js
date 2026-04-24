import React from "react"
import { Container, Section, SectionTitle } from "src/components/Section";
import UspCard from "src/components/UspCard";

const UspSection = () => {
  return (
    <Section className="section-usp" $ept="80px" $epb="50px" $xpt="60px" $xpb="40px" $pt="40px" $pb="30px" $bgcolor="#fff">
      <Container>
        <SectionTitle>Why trust us?</SectionTitle>
        <UspCard variant="light" />
      </Container>
    </Section>
  )
}

export default UspSection
