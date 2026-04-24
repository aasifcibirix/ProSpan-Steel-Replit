import React from "react"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Section, SectionSubTitle, SectionDescription, SectionTitle, StickySidebar } from "src/components/Section";


const BlackBox = styled.div`
    background-color:#111415;
    border-radius:10px;
    padding:20px;
    @media(min-width:992px){		
        border-radius:20px;
        padding:40px;
	}
    @media(min-width:1200px){		
      border-radius:25px;
      padding:60px;
	}
	@media(min-width:1600px){
        border-radius:35px;
		padding:80px;
	}
`;
const Row = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin:0 -10px;
    @media(min-width:1200px){		
        margin:0 -15px;
    }
    @media(min-width:1600px){
        margin:0 -15px;
    }
`;
const ColLeft = styled.div`
    position:relative;
    width:100%;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;

    padding:0 10px;     
     @media(min-width:992px){		
        padding:0 15px;
	}
	@media(min-width:1600px){
        padding:0 25px;
    }
`;
const ColRight = styled.div`
    position:relative;
    width:100%;
    padding:0 10px;
    display:none;
    @media(min-width:992px){		
        display:flex;
        padding:0 15px;
        flex:0 0 33.33333%;
        max-width:33.33333%;
	}
	@media(min-width:1600px){
        padding:0 25px;
        
	}
    
`;
const ListFeature = styled.div`
    margin-bottom:30px;
`;
const ListItemFeature = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;    
    justify-content: flex-start;
    flex-direction:column;
    gap:15px;
    @media(min-width:576px){
        flex-wrap:nowrap;
        flex-direction: row;
    }
    @media(min-width:1600px){
        gap:20px;
    }
    .figure{
            margin-bottom:0;
            margin-right: auto;
            .gatsby-image-wrapper{
            overflow:hidden;
            border-radius:40px;
            height:80px;
            @media(min-width:576px){
                border-radius:80px;
                height:auto;
            }
        }
    }
    .figure-content{   
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
        h3{
            font-weight:600;
            font-size: 18px;
            line-height: 30px;
            color:#fff;
            margin-bottom:0;
            @media (min-width: 768px) {
                font-size: 20px;
                line-height: 30px;
            }
            @media (min-width: 992px) {
                font-size: 24px;
                line-height: 34px;
            }
            @media (min-width: 1200px) {
                font-size: 26px;
                line-height: 36px;
            }
        }   
        p{
            color:#fff;
            margin-bottom:0;
            font-weight: 300;
        }     
    }
    + div{
        border-top:1px solid #272828;
        margin-top:10px;
        padding-top:10px;
        @media(min-width:1200px){
            margin-top:15px;
            padding-top:15px;
        }
        @media(min-width:1600px){
            margin-top:20px;
            padding-top:20px;
        }
        @media(min-width:1900px){
            margin-top:30px;
            padding-top:30px;
        }
    }
`;

const Figure = styled.div`
    margin:0;
`;


const FeaturesSection = () => {
    return (
        <Section className="section-customization" $ept="0" $epb="80px" $xpt="0" $xpb="60px" $pt="0" $pb="40px" $bgcolor="#fff">
            <Container>
                <BlackBox>
                    <SectionTitle $textColor="#fff"><SectionSubTitle $textColor="#fff">Customization Features for Agricultural Steel Buildings</SectionSubTitle></SectionTitle>
                    <SectionDescription $textColor="#fff"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed varius lectus. Pellentesque luctus sem quis neque condimentum, id mattis eros accumsan. Integer interdum nunc ac quam commodo, vel interdum eros mattis. Pellentesque venenatis varius suscipit. Pellentesque eu sem vulputate, gravida tortor vel, dictum velit. Curabitur sit amet lacus posuere.</p></SectionDescription>
                    <Row>
                        <ColLeft>
                            <ListFeature>
                                <ListItemFeature>
                                    <figure className="figure">
                                        <StaticImage src="../../images/building-size.jpg" alt="Building Size" />
                                    </figure>
                                    <div className="figure-content">
                                        <h3>Building Size</h3>
                                        <p>From small storage structures to enormous training facilities, you will be able to get the building you've always wanted.</p>
                                    </div>
                                </ListItemFeature>
                                <ListItemFeature>
                                    <figure className="figure">
                                        <StaticImage src="../../images/doors-windows.jpg" alt="Number of Doors and Windows" />
                                    </figure>
                                    <div className="figure-content">
                                        <h3>Number of Doors and Windows</h3>
                                        <p>Add your preferred number of roll-up garage doors, walk-in doors, and windows to make your structure easy to access from any angle. </p>
                                    </div>
                                </ListItemFeature>
                                <ListItemFeature>
                                    <figure className="figure">
                                        <StaticImage src="../../images/color-schemes.jpg" alt="Color Schemes" />
                                    </figure>
                                    <div className="figure-content">
                                        <h3>Color Schemes</h3>
                                        <p>You'll be able to choose from a wide range of color options, including trim and wainscoting shades, for excellent color schemes.</p>
                                    </div>
                                </ListItemFeature>
                                <ListItemFeature>
                                    <figure className="figure">
                                        <StaticImage src="../../images/accessories.jpg" alt="Accessories" />
                                    </figure>
                                    <div className="figure-content">
                                        <h3>Accessories</h3>
                                        <p>Top off your structure with lean-to attachments, insulation, cupolas, ventilation, skylights, and more.</p>
                                    </div>
                                </ListItemFeature>
                            </ListFeature>
                        </ColLeft>
                        <ColRight>
                            <StickySidebar>
                                <Figure><StaticImage src="../../images/why-flat-ground.jpg" alt="Customization Features for Agricultural Steel Buildings" /></Figure>
                            </StickySidebar>
                        </ColRight>
                    </Row>
                </BlackBox>
            </Container>
        </Section>
    )
}

export default FeaturesSection
