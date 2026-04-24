import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import PrimaryButton from "src/components/Button/PrimaryButton";
import WhiteButton from "src/components/Button/WhiteButton";
import { CallIcon, CircleArrowIcon } from "src/components/Icons";
import { Container } from "src/components/Section";
import { HeroBanner, HeroCover, HeroControler, HeroCaption, HeroImage, HeroTitle, HeroSubTitle, HeroLead, HeroRow, HeroButton, HeroItemBtn } from "src/components/Hero";
import { Context } from "src/components/context"


const HeroBanners = styled(HeroBanner)`
  height:auto;
  @media (min-width: 1200px) {
    height:100vh;
  }    
`

const HeroCaptions = styled(HeroCaption)`
  @media (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (min-width: 1200px) {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
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
  cursor: pointer;
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
`;

const BlockCommonHomeHero = ({ data, thanksURL }) => {
  const { popupContext, setPopupContext } = useContext(Context);
  const HandleModalOpen = () => {
    setPopupContext({
      isVisible: true,
      thanksURL: "thank-you-quote-popup"
    })
  }
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);


  useEffect(() => {
    if (popupContext.isVisible === true) {
      document.querySelector("body").classList.add("modal-open")
    } else {
      document.querySelector("body").classList.remove("modal-open")
    }
  }, [popupContext, setPopupContext])

  return (
    <HeroBanners>
      <HeroCover>
        <Slider
          asNavFor={nav2}
          ref={slider => (sliderRef1 = slider)}
          arrows={false}
        >
          {data.mediaCollections.map((d, i) =>
            <SlickItem key={i}>
              <HeroImage>
                <GatsbyImage image={d.gatsbyImageData} alt={`banner-${i}`} placeholder="blurred" loading="eager" fetchPriority="high" />
              </HeroImage>
            </SlickItem>
          )}
        </Slider>
      </HeroCover>
      <HeroControler>
        <Container>
          <HeroRow>
            <HeroCaptions>
              <HeroTitle className="h1-xl">{data.title}</HeroTitle>
              <HeroSubTitle>{data.subTitle}</HeroSubTitle>
              <HeroLead dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
              <HeroButton className="hero-button">
                <HeroItemBtn className="hero-item-btn">
                  <button type="button" onClick={HandleModalOpen}>
                    <PrimaryButton icon={<CircleArrowIcon />} text={data.quote_button.text} />
                  </button>
                </HeroItemBtn>
                <HeroItemBtn className="hero-item-btn">
                  <a href={`tel:${data.phone_button.text}`} aria-label="phone number">
                    <WhiteButton icon={<CallIcon />} text={data.phone_button.text} />
                  </a>
                </HeroItemBtn>
              </HeroButton>
            </HeroCaptions>
            <SlickAsNav>
              <Slider
                asNavFor={nav1}
                ref={slider => (sliderRef2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                arrows={false}
              >
                {data.mediaCollections.map((d, i) =>
                  <SlickNavItem key={i}>
                    <SlickNavImage>
                      <GatsbyImage image={d.gatsbyImageData} alt={`banner-${i}`} placeholder="blurred" loading="eager" fetchPriority="high" />
                    </SlickNavImage>
                  </SlickNavItem>
                )}
              </Slider>
            </SlickAsNav>
          </HeroRow>
        </Container>
      </HeroControler>
    </HeroBanners>
  );
};

export default BlockCommonHomeHero;