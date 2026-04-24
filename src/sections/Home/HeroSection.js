import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import PrimaryButton from "../../components/Button/PrimaryButton";
import WhiteButton from "../../components/Button/WhiteButton";
import { CallIcon, CircleArrowIcon } from '../../components/Icons';
import { Container } from "../../components/Section";
import { HeroBanner, HeroCover, HeroControler, HeroCaption, HeroImage, HeroTitle, HeroSubTitle, HeroLead, HeroRow, HeroButton, HeroItemBtn } from "../../components/Hero";

const HeroBanners = styled(HeroBanner)`
    height:auto;
    @media (min-width: 1200px) {
        height:100vh;
    }
    
`
const SlickItem = styled.div`
    position:relative;
    margin:0;
    @media (min-width: 576px) {
        display: flex !important;
    }
`
const SlickNavItem = styled.div`
    position: relative;
    
`
const SlickNavImage = styled.div`
    position: relative;
    margin: 0 10px;
    border-radius: 15px;
    overflow: hidden;
    border: 3px solid #fff;
`
const SlickAsNav = styled.div`   
    position: relative;
    width: 100%;
    padding:0 15px;
    @media (max-width: 991.98px) {  
        display:none;
    }
    @media (min-width: 992px) {
        flex: 0 0 50%;
        max-width: 50%;
    }
    @media (min-width: 1200px) {
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
    }

`

const HeroCarousel = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    return (
        <HeroBanners>
            <HeroCover>
                <Slider asNavFor={nav2}
                    ref={slider => (sliderRef1 = slider)}
                    arrows={false}>
                    <SlickItem>
                        <HeroImage><StaticImage src="../../images/banner01.jpg" alt="ProSpan Steel" /></HeroImage>
                    </SlickItem>
                    <SlickItem>
                        <HeroImage><StaticImage src="../../images/banner01.jpg" alt="ProSpan Steel" /></HeroImage>
                    </SlickItem>
                    <SlickItem>
                        <HeroImage><StaticImage src="../../images/banner01.jpg" alt="ProSpan Steel" /></HeroImage>
                    </SlickItem>
                </Slider>
            </HeroCover>
            <HeroControler>
                <Container>
                    <HeroRow>
                        <HeroCaption>
                            <HeroTitle className="h1-xl">ProSpan Steel</HeroTitle>
                            <HeroSubTitle>Your Trusted Provider of Red Iron Buildings</HeroSubTitle>
                            <HeroLead><p>ProSpan is a leading provider of pre-engineered metal buildings (PEMB) across the US for nearly 20 years. We design and deliver metal buildings with the highest quality standards for commercial, agricultural, aviation, and industrial uses, serving contractors and businesses throughout the Southeast.</p></HeroLead>
                            <HeroButton className="hero-button">
                                <HeroItemBtn className="hero-item-btn">
                                    <button type="button">
                                        <PrimaryButton icon={<CircleArrowIcon />} text="Get A Quote" />
                                    </button>
                                </HeroItemBtn>
                                <HeroItemBtn className="hero-item-btn">
                                    <a href="tel:(386) 247-0255" aria-label="phone number">
                                        <WhiteButton icon={<CallIcon />} text="(386) 247-0255" />
                                    </a>
                                </HeroItemBtn>
                            </HeroButton>
                        </HeroCaption>
                        <SlickAsNav>
                            <Slider asNavFor={nav1}
                                ref={slider => (sliderRef2 = slider)}
                                slidesToShow={3}
                                swipeToSlide={true}
                                focusOnSelect={true}
                                arrows={false}>
                                <SlickNavItem>
                                    <SlickNavImage><StaticImage src="../../images/banner01.jpg" alt="ProSpan Steel" /></SlickNavImage>
                                </SlickNavItem>
                                <SlickNavItem>
                                    <SlickNavImage><StaticImage src="../../images/banner01.jpg" alt="ProSpan Steel" /></SlickNavImage>
                                </SlickNavItem>
                                <SlickNavItem>
                                    <SlickNavImage><StaticImage src="../../images/banner01.jpg" alt="ProSpan Steel" /></SlickNavImage>
                                </SlickNavItem>
                            </Slider>
                        </SlickAsNav>
                    </HeroRow>
                </Container>
            </HeroControler>

        </HeroBanners>
    );
}


export default HeroCarousel;