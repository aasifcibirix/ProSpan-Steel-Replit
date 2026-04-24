import React from "react"
import styled from "styled-components";
import { Container, Section, SectionDescription, SectionTitle } from "src/components/Section";
import { InfoCheckIcon } from "src/components/Icons";

const ListGrid = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin:0 -5px;
  @media (min-width: 1200px) {
    margin:0 -10px;
  }
  @media (min-width: 1600px) {
    margin:0 -15px;
  }
`;

const ListItem = styled.div`
  position:relative;
  width:100%;
  padding:0 5px;
  @media(min-width:768px){
    flex:0 0 50%;
    max-width:50%;
  }   
  @media(min-width:992px){
    flex:0 0 33.33333%;
    max-width:33.33333%;
  } 
  @media (min-width: 1200px) {
    padding:0 10px;
  } 
  @media (min-width: 1600px) {
    padding:0 15px;
  } 
`;

const Card = styled.div`   
  position: relative;
  text-align: left;    
  background: #fff;
  border-radius:10px;
  overflow:hidden;
  transition: all 0.3s ease-in-out;
  border:1px solid #E8E8E8;
  margin-bottom: 15px;
  height: calc(100% - 15px);    
  &:hover {
    background: #0D0A0B;
    box-shadow: 0px 26px 35px -10px rgba(0, 0, 0, 0.25);   
    h3, p {
      color:#fff;
    }
    i {
      svg{
        fill:#fff;
      }
    }
  }
  @media (min-width: 1200px) {
    margin-bottom: 20px;
    height: calc(100% - 20px);
    border-radius:15px;
  }
  @media (min-width: 1600px) {
    border-radius:20px;
    margin-bottom: 30px;
    height: calc(100% - 30px);
  } 
`;

const CardBody = styled.div`    
  position:relative;    
  padding: 15px;
  @media (min-width: 1200px) {
    padding: 20px;
  }
  @media (min-width: 1600px) {
    padding: 30px;
  }
  @media (min-width: 1900px) {
    padding: 40px;
  }
  i {
    font-style: normal;
    display:flex;
    align-items:center;
    width:30px;
    height:30px;
    margin-bottom:10px;
    @media (min-width: 1200px) {
      margin-bottom:20px;            
    }
    @media (min-width: 1600px) {
      margin-bottom:30px;         
    }
    svg{
      fill:#2B2B2B;
    }
  }
  h3 {
    margin-bottom:10px;
    color: #0D0A0B;   
    font-weight: 600;     
    font-size: 16px;
    line-height: 26px;
    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 28px;
    }
    @media (min-width: 992px) {
      font-size: 20px;
      line-height: 30px;
    }
    @media (min-width: 1200px) {
      font-size: 24px;
      line-height: 34px;
    }
    @media (min-width: 1600px) {
      font-size: 26px;
      line-height: 36px;
    }
  }
  p {
    color: #2b2b2b;
    margin-bottom:0;
  }
`;

const BlockCategoryBenfit = ({ data }) => {
  return (
    <Section className="section-benefit" $bgcolor="#fff">
      <Container $maxWidth="1690px">
        <SectionTitle $maxWidth="1140px" $textColor="#0D0A0B" $ml="0">{data.productCategory.benefitHeading}</SectionTitle>
        {data.productCategory.benefitSubHeading &&
          <SectionDescription dangerouslySetInnerHTML={{ __html: data.productCategory.benefitSubHeading.childMarkdownRemark.html }} />
        }
        <ListGrid>
          {data.productCategory.benefitCollections && data.productCategory.benefitCollections.map(d => (
            <ListItem key={d.id}>
              <Card className="card card-default">
                <CardBody className="card-body">
                  <i><InfoCheckIcon /></i>
                  <h3>{d.textShort}</h3>
                  <div dangerouslySetInnerHTML={{ __html: d.textLong.childMarkdownRemark.html }} />
                </CardBody>
              </Card>
            </ListItem>
          ))}
        </ListGrid>
      </Container>
    </Section>
  );
};

export default BlockCategoryBenfit;
