import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Section, SectionBox, SectionDescription, SectionTitle } from "src/components/Section";
import { FiberglassIcon, BandedIcon } from "src/components/Icons";
import MediaThumbnail from "src/components/MediaThumbnail";
import styled from "styled-components";

const Row = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;  
  margin:0 -10px;  
  @media(min-width:1200px){
      margin:0 -15px;
  }
`;

const Col = styled.div`
  position:relative;
  width:100%;
  padding:0 10px;
  @media(min-width:1200px){
    flex:0 0 50%;
    max-width:50%;
    padding:0 15px;
  }
`;

const BlockCommonInsulationOption = ({ data }) => {
  const optionHeading = data.refCollections.find(r => r.identify === "BLOCK_COMMON_INSULATION_OPTION_HEADING");
  const optionData1 = data.refCollections.find(r => r.identify === "BLOCK_COMMON_INSULATION_OPTION_1");
  const optionData2 = data.refCollections.find(r => r.identify === "BLOCK_COMMON_INSULATION_OPTION_2");

  const insulationData = [
    {
      image: <GatsbyImage image={optionData1.image.gatsbyImageData} />,
      icon: <FiberglassIcon />,
      title: optionData1.textShort,
      content: optionData1.textLong.textLong,
    },
    {
      image: <GatsbyImage image={optionData2.image.gatsbyImageData} />,
      icon: <BandedIcon />,
      title: optionData2.textShort,
      content: optionData2.textLong.textLong,

    }
  ];

  return (
    <Section $bgcolor="#fff" $epb="0" $xpb="0" $pb="0">
      <Container>
        <SectionTitle $maxWidth="1660px">{data.title}</SectionTitle>
        <SectionDescription $maxWidth="1660px" dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
        <SectionBox>
          <SectionTitle $textAlign="center" $textColor="#fff">{optionHeading.textShort}</SectionTitle>
          <SectionDescription $textAlign="center" $textColor="#fff" dangerouslySetInnerHTML={{ __html: optionHeading.textLong.childMarkdownRemark.html }} />
          <Row>
            {insulationData.map((item, index) => (
              <Col key={index}>
                <MediaThumbnail image={item.image} icon={item.icon} title={item.title} content={item.content} />
              </Col>
            ))}
          </Row>
        </SectionBox>
      </Container>
    </Section>
  );
};

export default BlockCommonInsulationOption;