import React, { useEffect, useContext } from "react"
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Section, SectionDescription, SectionTitle, ExploreMore, ExploreItemMore } from "src/components/Section";
import { CallIcon, CircleArrowIcon } from "src/components/Icons";
import DefaultButton from "src/components/Button/DefaultButton";
import PrimaryButton from "src/components/Button/PrimaryButton";
import { Context } from "src/components/context"

const Row = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  margin:0 -10px;
  @media(min-width:1600px) {
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
  @media(min-width:1600px) {
    padding:0 15px;
  }
`;

const ColRight = styled.div`
  position:relative;
  width:100%;     
  display:none;
  padding:0 10px;
  @media(min-width:1200px) {
    flex:0 0 33.33333%;
    max-width:33.33333%;
    display:flex;
  }
  @media(min-width:1600px) {
    padding:0 15px;
  }
`;

const MediaBox = styled.div`
  background-color:#2B2B2B;
  overflow:hidden;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:10px;
  border-radius:10px;
  @media(min-width:992px) {
    padding:20px;
    border-radius:20px;
  }
  @media(min-width:1200px) {
    border-radius:30px;
  }
  @media(min-width:1600px) {
    border-radius:45px;
  }
  .gatsby-image-wrapper{
    border-radius:10px;
    @media(min-width:992px) {
      border-radius:15px;
    }
    @media(min-width:1200px) {
      border-radius:25px;
    }
    @media(min-width:1600px) {
      border-radius:30px;
    }
  }
`;

const BlockCommonBuildingPackagesSummary = ({ data, location }) => {

  const { popupContext, setPopupContext } = useContext(Context);
  const HandleModalOpen = () => {
    setPopupContext({
      location: { location },
      isVisible: true,
      thanksURL: "thank-you-packages-popup"
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
    <Section $bgcolor="#fff" className="section-summary">
      <Container $maxWidth="1760px">
        <Row>
          <ColLeft>
            <SectionTitle $maxWidth="925px" $ml="0">{data.title}</SectionTitle>
            <SectionDescription dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
            <ExploreMore $justifyContent="flex-start" $ml="-10px" $mr="-10px" smmx="-5px">
              <ExploreItemMore $smpx="5px">
                <button type="button" onClick={HandleModalOpen}>
                  <PrimaryButton icon={<CircleArrowIcon />} text="Get a Quote" />
                </button>
              </ExploreItemMore>
              <ExploreItemMore $smpx="5px">
                <a href="tel:3862470255" aria-label="phone number"><DefaultButton icon={<CallIcon />} text="(386) 247-0255" /></a>
              </ExploreItemMore>
            </ExploreMore>
          </ColLeft>
          <ColRight>
            <MediaBox>
              <GatsbyImage image={data.image.gatsbyImageData} />
            </MediaBox>
          </ColRight>
        </Row>
      </Container>
    </Section>
  );
};

export default BlockCommonBuildingPackagesSummary;