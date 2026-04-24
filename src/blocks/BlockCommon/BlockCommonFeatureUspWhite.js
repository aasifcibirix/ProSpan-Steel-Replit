import React from "react";
import styled from "styled-components";
import { Container, Section, SectionTitle } from "src/components/Section";

const Row = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin:0 -10px;
`;

const Col = styled.div`
  position:relative;
  width:100%;
  padding:0 10px;
  flex:0 0 50%;
  max-width:50%;
  @media(min-width:768px) {
    flex:0 0 33.33333%;
    max-width:33.33333%;
  }
  @media(min-width:1200px) {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
`;

const UspCard = styled.div`
  position: relative;
  text-align: left;
  border:1px solid #E8E8E8;
  transition: all 0.5s ease-in-out;

  padding:15px;
  height: calc(100% - 10px);
  margin-bottom: 10px;
  border-radius:6px;

  @media (min-width: 1200px) {
    padding:20px;
    height: calc(100% - 30px);
    margin-bottom: 20px;
    border-radius:10px;
  }
  @media (min-width: 1600px) {
    padding:30px;
    height: calc(100% - 40px);
    border-radius:15px;
    margin-bottom: 30px;
  }
  &:hover{
    border-color:#252525;
    .card-icon{
      -webkit-animation-name: hvr-icon-wobble-vertical;
      animation-name: hvr-icon-wobble-vertical;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out;
      -webkit-animation-iteration-count: 1;
      animation-iteration-count: 1;
    }
  }
`;

const UspIcon = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  overflow: hidden;
  position: relative;
  width:40px;
  height:40px;
  border-radius: 4px;
  margin-bottom:5px;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  padding: 5px;
  @media (min-width: 1200px) {
    border-radius: 6px;
    margin-bottom:10px;
    width:50px;
    height:50px;
  }
  @media (min-width: 1600px) {
    border-radius: 10px;
    width:60px;
    height:60px;
  }
  > svg, > img {
    fill:#fff;
    /* width:20px;
    @media (min-width: 768px) {
      width:24px;
    }
    @media (min-width: 1200px) {
      width:30px;
    }
    @media (min-width: 1600px) {
      width:auto;
    } */
  }
`;

const UspName = styled.div`
  color: #2B2B2B;
  font-size: 14px;
  line-height: 22px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 26px;
  }
  @media (min-width: 1600px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const BlockCommonFeatureUspWhite = ({ data }) => {
  return (
    <Section className="section-usp" $ept="80px" $epb="50px" $xpt="60px" $xpb="40px" $pt="40px" $pb="30px" $bgcolor="#FFFFFF">
      <Container>
        <SectionTitle>Why trust us?</SectionTitle>
        <Row>
          {data.usp_titles.map((title, i) =>
            <Col key={i}>
              <UspCard className="card card-usp">
                <UspIcon className="card-icon" style={{ background: data.usp_colors[i] }}>
                  <img className="tw-m-0" src={data.mediaCollections[i].file.url} alt={title} />
                </UspIcon>
                <UspName className={`usp-name`}>
                  {title}
                </UspName>
              </UspCard>
            </Col>
          )}
        </Row>
      </Container>
    </Section>
  );
};

export default BlockCommonFeatureUspWhite;
