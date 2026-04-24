/* eslint-disable array-callback-return */
import React from "react"
import { Container, Section, SectionBox, SectionDescription, SectionTitle } from "src/components/Section";
import styled from "styled-components";

const StepTimeline = styled.div`    
  @media (min-width: 992px) {
    padding-top:15px;
  }
  @media (min-width: 1200px) {
    padding-top:20px;
  }
  @media (min-width: 1600px) {
    padding-top:30px;
  }
`

const Steps = styled.div`
  position:relative;
  display: flex;
  flex-direction: column;  
  margin:0 -60px;
  @media (min-width: 1600px) {  
    margin:0 -90px;
  }
`
const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  
    padding:0 60px 0 90px;
  @media (min-width:992px) {
    padding:0 60px;
    flex: 0 0 50%;
    max-width: 50%;
   }
  @media (min-width: 1600px) {  
    padding:0 90px;
  }

  &:nth-child(even) {
    align-self: flex-end;
    .step-card{
      &:before {
        left: -30px;
        @media (min-width: 992px) {  
          left: -60px;
        }
        @media (min-width: 1600px) {  
          left: -90px;
        }
      }
    }
    .step-card{
      &:after{
        left: -30px;
        @media (min-width: 992px) {  
          left: -60px;
        }
        @media (min-width: 1600px) {  
          left: -90px;
        }
      }
    }
  }

  .step-card{
    &:after {
      left: -30px;
      @media (min-width: 992px) {  
        right: -80px;
        left:auto;
      }
      @media (min-width: 1600px) {  
        right: -110px;
      }
    }
    &:before {
      left: -30px;
      @media (min-width: 992px) {  
        right: -60px;
        left:auto;
      }
      @media (min-width: 1600px) {  
        right: -90px;
      }
    }
  }
  &:first-child{
    .step-card{
      &:after {              
        background-color: #F32435;
        border-color: #F32435;        
        box-shadow: 0 0 0px 4px #111415,0 0 0px 6px #fff;
        @media (min-width: 992px) {  
          box-shadow: 0 0 0px 8px #111415, 0 0 0px 10px #fff;
        }
      }
    }
  }
  &:last-child{
    .step-card{
      &:before {      
        display:none;
      }
    }
  }
`
const StepCard = styled.div`
  position:relative;
  padding-bottom:20px;
  @media (min-width:992px) {
    padding-bottom:0;
  }

  &:before {
    content: "";
    position: absolute;
    top:25%;    
    z-index: 0;
    --s:10px; /* control the space between dashes */
    width: 2px;
    height: 100%;
    background: 
    radial-gradient(circle closest-side,#272828 98%,#0000) 0 0/100% var(--s),
    linear-gradient(#272828 50%, #0000 0) 0 calc(var(--s)/2)/100% calc(2*var(--s));
  }

   &:after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border:2px solid #272828;
    background: #111415;
    position: absolute;    
    transform: translateX(-50%);
    z-index: 1;
    top:25%;
  }

`
const StepCardInner = styled.div`
  background: #FFF;
  box-shadow: 7px 12px 20px -15px rgba(118, 149, 168, 0.19);    
  border-radius: 10px;    
  @media (min-width:992px) {
    border-radius: 15px;    
  }
  @media (min-width:1200px) {
    border-radius: 20px;    
  }
  @media (min-width:1600px) {
    border-radius: 30px;    
  }
`
const StepHeader = styled.div`
  border-bottom: 1px solid #E2EAEF;
  background: #F8FBFD;
  border-radius:10px 10px 0 0;    
  padding:10px 20px;
  @media (min-width:992px) {
    border-radius:15px 15px 0 0;    
  }
  @media (min-width:1200px) {
    border-radius:20px 20px 0 0;    
    padding:15px 30px;
  }
  @media (min-width:1600px) {
    border-radius:30px 30px 0 0;    
    padding:20px 40px;
  }
`
const StepTitle = styled.div`
  font-weight: 600;
  color:#0D0A0B;
  font-family: 'Rajdhani', serif;
  letter-spacing: -0.56px;
  text-transform: capitalize;
  
  font-size: 18px;
  line-height: 30px;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }

  @media (min-width: 992px) {
    font-size: 24px;
    line-height: 34px;
  }

  @media (min-width: 1200px) {
    font-size: 28px;
    line-height: 38px;
  }

`
const StepBoby = styled.div`
  padding:30px 40px;
  border-radius:0 0 10px 10px;    
  padding:15px 20px;
  @media (min-width:992px) {
    border-radius:0 0 15px 15px;    
  }
  @media (min-width:1200px) {
    border-radius:0 0 20px 20px;    
    padding:20px 30px;
  }
  @media (min-width:1600px) {
    border-radius:0 0 30px 30px;    
    padding:30px 40px;
  }
  p{
    font-weight: 300;
    margin-bottom:0;
    + p{
      margin-top:15px;
    }
  }
`


const BlockCommonFinanceProcess = ({ data }) => {
  return (
    <Section $ept="0" $epb="0" $xpt="0" $xpb="0" $pt="0" $pb="0" $bgcolor="#fff">
      <Container>
        <SectionBox>
          <SectionTitle $textAlign="center" $textColor="#fff">{data.title}</SectionTitle>
          <SectionDescription $textAlign="center" $textColor="#fff" $maxWidth="640px" $mb="30px" dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />

          <StepTimeline>
            <Steps>
              {data.refCollections.map((item, index) => (
                <StepItem key={index}>
                  <StepCard className="step-card">
                    <StepCardInner>
                      <StepHeader>
                        <StepTitle>{item.textShort}</StepTitle>
                      </StepHeader>
                      <StepBoby>
                        <p>{item.textLong.textLong}</p>
                      </StepBoby>
                    </StepCardInner>
                  </StepCard>
                </StepItem>
              ))}
            </Steps>
          </StepTimeline>

        </SectionBox>
      </Container>
    </Section>
  );
};
export default BlockCommonFinanceProcess;