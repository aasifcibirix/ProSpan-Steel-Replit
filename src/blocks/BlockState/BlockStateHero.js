import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { BreadCrumb, Container } from "src/components/Section";
import { HeroBanner, HeroCover, HeroControler, HeroTitle } from "src/components/HeroInner";

const BlockStateHero = ({ data }) => {
  return (
    <HeroBanner>
      <HeroCover>
        <GatsbyImage image={data.image.gatsbyImageData} alt={data.title} />
      </HeroCover>
      <HeroControler>
        <Container $maxWidth="1760px">
          <BreadCrumb className="breadcrumb"><Link to="/">Home</Link><span>{data.state.title}</span></BreadCrumb>
          <HeroTitle $mb="0">{data.state.title}</HeroTitle>
        </Container>
      </HeroControler>
    </HeroBanner>
  );
};

export default BlockStateHero;