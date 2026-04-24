import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Container, SectionImageBkg, SectionSubTitle, SectionTitle } from "src/components/Section"
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
    text-align:center;
    @media(min-width:768px){
        text-align:left;
    }
    .h5{
        margin-bottom:15px;
        @media(min-width:768px){
            margin-bottom:0;
        }
    }
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
const NeedHelp = () => {
    return (
        <NeedHelpBlock>
            <SectionImageBkg><StaticImage src="../../images/help-bg.jpg" alt="Need Help Choosing a Package?" /></SectionImageBkg>
            <Container $maxWidth="1410px">
                <Grid>
                    <GridLeft>
                        <SectionTitle $textColor="#fff">Need Help Choosing a Package?</SectionTitle>
                        <SectionSubTitle $textColor="#fff" className="h5">We’re Just a Call Away.</SectionSubTitle>
                    </GridLeft>
                    <GridRight>
                        <Action><a href="tel:3862470255" aria-label="phone number"><PrimaryButton icon={<CallIcon />} text="(386) 247-0255" /></a></Action>
                    </GridRight>
                </Grid>
            </Container>
        </NeedHelpBlock>
    )
}

export default NeedHelp
