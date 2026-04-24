import React from "react"
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import { BreadCrumb, Container } from "src/components/Section";
import { HeroBanner, HeroCover, HeroControler, HeroTitle } from "src/components/HeroInner";

const BlockCommonContentTemplateHero = ({ data }) => {
  const heroData = data.resources.find(r => r.identify === "CONTENT_TEMPLATE_HERO_DATA");

  if (!heroData) {
    return null;
  }

  return (
    <HeroBanner>
      <HeroCover>
        <GatsbyImage image={heroData.image && heroData.image.gatsbyImageData} alt={heroData.textShort} />
      </HeroCover>
      <HeroControler>
        <Container $maxWidth="1760px">
          <BreadCrumb className="breadcrumb">
            <Link to="/">Home</Link>
            <span>{heroData.textShort}</span>
          </BreadCrumb>
          <HeroTitle $mb="0">
            {heroData.textShort}
          </HeroTitle>
        </Container>
      </HeroControler>
    </HeroBanner>
  )
}

export default BlockCommonContentTemplateHero;