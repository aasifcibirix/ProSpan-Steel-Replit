import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import PrimaryButton from "../Button/PrimaryButton";
import WhiteButton from "../Button/WhiteButton";
import { CallIcon, CircleArrowIcon } from '../Icons';
import { Container } from "../Section";
import { HeroBanner, HeroCover, HeroControler, HeroImage, HeroTitle, HeroLead, HeroButton, HeroItemBtn } from "../Hero";

const HeroBanners = () => {

    return (
        <HeroBanner>
            <HeroCover>
                <HeroImage><StaticImage src="../../images/agricultural-banner.jpg" alt="Agricultural Metal Buildings" /></HeroImage>
            </HeroCover>
            <HeroControler>
                <Container>
                    <HeroTitle $maxWidth="1120px">Agricultural Metal Buildings</HeroTitle>
                    <HeroLead $maxWidth="1120px"><p>Agricultural buildings are a staple of America's farming industry and a trusted way to protect your equipment, tools, livestock, and horses. These structures are built from durable steel components and can be engineered to tackle any project on and off the farm. From small family-owned plots to enormous commercial operations, our metal buildings are THE choice for the savvy farmer. </p></HeroLead>
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
                </Container>
            </HeroControler>
        </HeroBanner>
    );
}


export default HeroBanners;