import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Section, SectionDescription, SectionTitle, SectionBox } from "src/components/Section";
import styled from "styled-components";

const Row = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;  
  align-items: ${(props) => props.$alignItems || "initial"};
  margin:0 -10px;  
  @media(min-width:1200px) {
    margin:0 -15px;
  }
`;

const Col = styled.div`
  position:relative;
  width:100%;
  padding:0 10px;
  @media(min-width:992px) {
    flex:0 0 33.33333%;
    max-width:33.33333%;
  }
  @media(min-width:1200px) {
    padding:0 15px;
  }
`;

const Card = styled.div`   
  position: relative;
  margin-bottom: 20px;  
`;

const CardFigure = styled.figure`
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  margin: 0;
  img{
    margin-bottom:0;
  }
`;

const CardBody = styled.div`
  position: relative;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(75px);
  -webkit-backdrop-filter: blur(75px);
  border-radius:28px;
  padding:20px 15px;
  min-height: 242px;  
  margin:-60px 0 10px 0;
  @media (min-width: 576px) {
    margin:10px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
  @media (min-width: 1600px) {
    padding:30px;
  }
  h3 {
    display: flex;
    flex-wrap:nowrap;
    align-items: flex-start;
    font-weight: 600;
    color:#0D0A0B;
    gap:10px;
    font-size: 20px;
    line-height: 24px;
    @media (min-width: 992px) {
      font-size: 24px;
      line-height: 28px;
    }
    @media (min-width: 1200px) {
      font-size: 28px;
      line-height: 32px;
    }
    > svg{
      fill:#2B2B2B;
      min-width: 24px;
      @media (min-width: 1200px) {
        min-width: 28px;
      }
    }
    > img{
      margin-bottom:0;
    }
  }
  p {
    color: #2B2B2B;
    margin-bottom:0;
    @media (min-width: 1200px) {
      line-height:28px;
    }
  }
`;

const BlockCommonAboutWho = ({ data }) => {
  const headingSecond = data.refCollections.find(r => r.identify === "CONTENT_COMMON_ABOUT_WHO_HEADING_SECOND");
  const cards = data.refCollections.filter(r => r.identify === "CONTENT_COMMON_ABOUT_WHO_CARD");

  return (
    <Section $bgcolor="#fff" className="section-who">
      <Container>
        <SectionTitle $maxWidth="1660px">{data.title}</SectionTitle>
        <SectionDescription
          $maxWidth="1660px"
          dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }}
        />
        <SectionBox>
          <SectionTitle $textAlign="center" $textColor="#fff">
            {headingSecond.textShort}
          </SectionTitle>
          <SectionDescription
            $textAlign="center"
            $textColor="#fff"
            $maxWidth="1150px"
            dangerouslySetInnerHTML={{ __html: headingSecond.textLong.childMarkdownRemark.html }}
          />
          <Row>
            {cards.map(d =>
              <Col key={d.id}>
                <Card>
                  <CardFigure>
                    <GatsbyImage image={d.image.gatsbyImageData} alt={d.textShort} />
                  </CardFigure>
                  <CardBody>
                    <h3><img src={d.icon.file.url} alt="" /> {d.textShort}</h3>
                    <div dangerouslySetInnerHTML={{ __html: d.textLong.childMarkdownRemark.html }} />
                  </CardBody>
                </Card>
              </Col>
            )}
          </Row>
        </SectionBox>
      </Container>
    </Section>
  );
};

export default BlockCommonAboutWho;