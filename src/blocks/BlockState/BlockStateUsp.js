import React from "react";
import { Container, Section, SectionTitle } from "src/components/Section";
import UspCard from "src/components/UspCard";

const BlockStateUsp = ({ data }) => {
  return (
    <Section $bgcolor="#fff">
      <Container $maxWidth="1760px">
        <SectionTitle>{data.title}</SectionTitle>
        <UspCard variant="light" />
      </Container>
    </Section>
  );
};

export default BlockStateUsp;
