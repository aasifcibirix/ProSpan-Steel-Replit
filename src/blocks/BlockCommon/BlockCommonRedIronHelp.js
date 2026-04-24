import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Section, SectionImageBkg, SectionTitle } from "src/components/Section"
import { CallIcon } from "src/components/Icons"
import PrimaryButton from "src/components/Button/PrimaryButton"

const Grid = styled.div`
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
`
const GridLeft = styled.div`
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
const GridRight = styled.div`
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
const NeedHelpBlock = styled.div`
  position:relative;
  background: #2B2B2B;
  box-shadow: 0 51px 46px -30px rgba(0, 0, 0, 0.15);
  overflow:hidden;

  padding:20px;
  border-radius:10px;
  @media(min-width:992px){		
    border-radius:15px;
    padding:40px;
  }
  @media(min-width:1200px){		
    border-radius:20px;
    padding:50px;
	}
	@media(min-width:1600px){
    border-radius:30px;
		padding:70px;
	}

`
const Action = styled.div`   
   
`

const BlockCommonBuildingPackagesHelp = ({ data }) => {
  return (
    <Section $bgcolor="#fff" className="section-help">
      <Container>
        <NeedHelpBlock>
          <SectionImageBkg><GatsbyImage image={data.image.gatsbyImageData} alt={data.title} /></SectionImageBkg>
          <Container $maxWidth="1410px">
            <Grid>
              <GridLeft>
                <SectionTitle $textColor="#fff" $mdTextAlign="center">
                  {data.title}
                  <span className="h5">{data.subTitle}</span>
                </SectionTitle>
              </GridLeft>
              <GridRight>
                <Action><a href="tel:3862470255" aria-label="phone number"><PrimaryButton icon={<CallIcon />} text="(386) 247-0255" /></a></Action>
              </GridRight>
            </Grid>
          </Container>
        </NeedHelpBlock>
      </Container>
    </Section>
  )
}

export default BlockCommonBuildingPackagesHelp;