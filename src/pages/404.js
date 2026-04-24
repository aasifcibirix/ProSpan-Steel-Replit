import React from "react"
import Seo from "src/components/seo"
import Layout from "src/components/layout";
import { Link } from "gatsby";
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { CircleArrowLeft } from "src/components/Icons";
import {
  Nodata, NodataTitle, NodataDesc, NodataMedia, NodataAction
} from "src/components/Nodata";
import DefaultButton from "src/components/Button/DefaultButton";
import { Section, Container } from "src/components/Section";


const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404" />
      <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
      <Section $ept="220px" $xpt="160px" $pt="100px">
        <Container>
          <Nodata>
            <NodataMedia><StaticImage src="../images/404.png" alt="Page not found" /></NodataMedia>
            <NodataTitle className="h2">Page not found</NodataTitle>
            <NodataDesc mb="30px"><p>Sorry 😔, we couldn’t find what you were looking for.</p></NodataDesc>
            <NodataAction>
              <Link to="/"><DefaultButton icon={<CircleArrowLeft />} text="Home" /></Link>
            </NodataAction>
          </Nodata>
        </Container>
      </Section>
    </Layout>
  )
}

export default NotFoundPage

