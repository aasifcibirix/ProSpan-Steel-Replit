import React, { useEffect, useContext } from "react"
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import PrimaryButton from "src/components/Button/PrimaryButton";
import WhiteButton from "src/components/Button/WhiteButton";
import { CallIcon, CircleArrowIcon } from 'src/components/Icons';
import { Container, BreadCrumb } from "src/components/Section";
import { HeroBanner, HeroCover, HeroControler, HeroCaption, HeroImage, HeroTitle, HeroLead, HeroRow, HeroButton, HeroItemBtn } from "src/components/Hero";
import { Context } from "src/components/context"

const BlockCategoryHero = ({ data }) => {
  const { popupContext, setPopupContext } = useContext(Context);
  const HandleModalOpen = () => {
    setPopupContext({
      isVisible: true,
      thanksURL: "thank-you-quote-popup"
    })
  }
  useEffect(() => {
    if (popupContext.isVisible === true) {
      document.querySelector("body").classList.add("modal-open")
    } else {
      document.querySelector("body").classList.remove("modal-open")
    }
  }, [popupContext, setPopupContext])

  return (
    <HeroBanner>
      <HeroCover>
        <HeroImage>
          {data.productCategory.image &&
            <GatsbyImage
              image={data.productCategory.image.gatsbyImageData}
              alt={data.productCategory.title}
              layout="fullWidth"
            />
          }
        </HeroImage>
      </HeroCover>
      <HeroControler>
        <Container>
          <HeroRow>
            <HeroCaption>
              <BreadCrumb className="breadcrumb" $lgTextAlign="center">
                <Link to="/">Home</Link>
                <Link to="/red-iron-buildings/">Red Iron Buildings</Link>
                <span>{data.productCategory.title}</span>
              </BreadCrumb>
              <HeroTitle>{data.productCategory.title}</HeroTitle>
              {data.productCategory.description &&
                <HeroLead dangerouslySetInnerHTML={{ __html: data.productCategory.description.childMarkdownRemark.html }} />
              }
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
            </HeroCaption>
          </HeroRow>
        </Container>
      </HeroControler>
    </HeroBanner>
  );
};

export default BlockCategoryHero;