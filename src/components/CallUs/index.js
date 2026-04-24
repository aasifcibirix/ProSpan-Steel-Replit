import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Section, SectionImageBkg, SectionSubTitle, SectionTitle } from "../Section"
import CallToActon from "../CallToActon"

const Sections = styled(Section)`
    box-shadow: 0px 51px 46px -25px rgba(0, 0, 0, 0.90);
`
const CallGrid = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items: center;
    text-align:center;
    margin:0 -5px;
    @media(min-width:768px){
        margin:0 -15px;
        text-align:left;
    }
    h2{
        text-align:center;
        @media(min-width:768px){
            margin-bottom:0;
            text-align:left;
        }
    }  
`
const CallGridLeft = styled.div`
    position:relative;
    width:100%;
    padding:0 5px;
    @media(min-width:768px){
        padding:0 15px;
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;      
    }
`
const CallGridRight = styled.div`
    position:relative;
    width:100%;
    padding:0 5px;
    @media(min-width:768px){
        padding:0 15px;
        padding:0 15px;
        flex: 0 0 auto;
        width: auto;
        max-width: 100%;
    }
`
const CallTitle = styled.div`
  position:relative;
  overflow:hidden;
  color:#fff;
  margin-bottom:15px;
  span{
    position: relative;
    display: inline-flex;
    font-size: 14px;
    line-height: 24px;
    @media(min-width:768px){
        font-size: 16px;
        line-height: 26px;
    }
    @media(min-width:1200px){
        font-size: 18px;
        line-height: 26px;
    }
    &:after{
        @media(min-width:768px){
            content:'';
            position:absolute;
            left: calc(100% + 10px);
            bottom:0;
            background-color:#fff;
            width:100%;
            height:1px;
        }
    }
  }
`
const CallCta = styled.div`   
    h2{
        margin-bottom:0;
        text-align:center;
        @media(min-width:768px){
            text-align:left;
        }
    }
`
const SectionTitles = styled(SectionTitle)`     
    font-size: 36px;
    line-height: 40px;
    @media (min-width: 576px) {
        font-size: 48px;
        line-height: 52px;
    }
    @media (min-width: 768px) {
        font-size: 54px;
        line-height: 58px;
    }
    @media (min-width: 992px) {
        font-size: 60px;
        line-height: 64px;
    }
    @media (min-width: 1200px) {
        font-size: 80px;
        line-height: 84px;
    }
    @media (min-width: 1600px) {
        font-size: 90px;
        line-height: 94px;
    }
  
`
const CallUs = ({ location }) => {
    return (
        <Sections $ept="60px" $epb="60px" $xpt="40px" $xpb="40px" $pt="30px" $pb="30px" $bgcolor="#F32435" className="section-cta">
            <SectionImageBkg><StaticImage src="../../images/cta-bg.jpg" alt="callus-bg" /></SectionImageBkg>
            <Container $maxWidth="1400px">
                <CallGrid>
                    <CallGridLeft>
                        <SectionTitles $textColor="#fff">Ready to Build? <SectionSubTitle $textColor="#fff">Let’s Talk</SectionSubTitle> </SectionTitles>
                    </CallGridLeft>
                    <CallGridRight>
                        <CallCta>
                            <CallTitle><span>Request a Free Quote or Talk to an Expert</span></CallTitle>
                            <CallToActon location={location} />
                        </CallCta>
                    </CallGridRight>
                </CallGrid>
            </Container>
        </Sections>
    )
}

export default CallUs
