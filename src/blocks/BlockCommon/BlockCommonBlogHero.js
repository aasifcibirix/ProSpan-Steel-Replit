import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, BreadCrumb } from "src/components/Section";
import { HeroBanner, HeroCover, HeroControler, HeroTitle } from "src/components/HeroInner";

const BlockCommonBlogHero = ({ data }) => {
  return (
    <HeroBanner>
      <HeroCover><GatsbyImage image={data.image.gatsbyImageData} alt={data.title} /></HeroCover>
      <HeroControler>
        <Container $maxWidth="1760px">
          <BreadCrumb className="breadcrumb"><Link to="/">Home</Link><span>{data.title}</span></BreadCrumb>
          <HeroTitle $mb="0">{data.title}</HeroTitle>
        </Container>
      </HeroControler>
    </HeroBanner>
  )
}

export default BlockCommonBlogHero;