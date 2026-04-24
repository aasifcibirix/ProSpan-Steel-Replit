import React from "react";
import { Container, Section, SectionBox } from "src/components/Section";
import Map from "src/components/Map";
import AddressInfo from "src/components/AddressInfo";
import styled from "styled-components";

const Row = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;    
  margin:0 -10px;
  @media(min-width:1600px){
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
  }
  @media(min-width:1600px){
    padding:0 15px;
  }
`;

const BlockCommonContactMap = () => {
  return (
    <Section $bgcolor="#fff">
      <Container>
        <SectionBox $bgcolor="#F8FBFD" $borderColor="#E2EAEF">
          <Row>
            <Col>
              <AddressInfo />
            </Col>
            <Col>
              <Map />
            </Col>
          </Row>
        </SectionBox>
      </Container>
    </Section>
  );
};

export default BlockCommonContactMap;