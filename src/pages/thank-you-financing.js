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


const ThankYouPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="Thank You" />
      <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
      <Section $ept="220px" $xpt="160px" $pt="100px">
        <Container>
          <Nodata>
            <NodataMedia><StaticImage src="../images/correct.png" alt="Thanks" /></NodataMedia>
            <NodataTitle className="h2">Thank You</NodataTitle>
            <NodataDesc mb="30px"><p>Our team of experts is ready to provide you with a detailed, professional quote for your upcoming building project. We are committed to ensuring that you get the highest quality metal building in the industry.</p></NodataDesc>
            <NodataAction>
              <Link to="/"><DefaultButton icon={<CircleArrowLeft />} text="Home" /></Link>
            </NodataAction>
          </Nodata>
        </Container>
      </Section>
    </Layout>
  )
}

export default ThankYouPage
