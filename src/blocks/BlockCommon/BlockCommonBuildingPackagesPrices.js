import React, { useEffect, useContext } from "react"
import styled from "styled-components";
import { Container, Section, SectionDescription, SectionBox, SectionTitle, ExploreMore } from "src/components/Section";
import WhiteOutlineButton from "src/components/Button/WhiteOutlineButton";
import DefaultCard from "src/components/DefaultCard";
import { Context } from "src/components/context"

const ListCardGrid = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(1, 1fr);
  @media(min-width:768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media(min-width:1200px) {
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }
  &.grid-5 {
    @media(min-width:1200px){		
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;

const ListCardItem = styled.div`
  position:relative;
`;

const BlockCommonBuildingPackagesPrices = ({ data, location }) => {
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
    <Section $ept="0" $epb="0" $xpt="0" $xpb="0" $pt="0" $pb="0" $bgcolor="#fff" className="section-packages">
      <Container>
        <SectionBox $pxy="5px" $bgcolor="#111415" $borderColor="#111415">
          <SectionTitle $textAlign="left" $textColor="#fff">{data.title}</SectionTitle>
          <SectionDescription $maxWidth="1470px" $ml="0" $textAlign="left" $textColor="#fff" dangerouslySetInnerHTML={{ __html: data.titleLong.childMarkdownRemark.html }} />
          <SectionDescription $mb="20px" $textColor="#fff" dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
          <ListCardGrid className="grid-5">
            {data.refCollections.map((item, index) => (
              <ListCardItem key={index}>
                <DefaultCard size="sm" icon={<img src={item.icon.file.url} alt="Red Iron Building Package Prices" />} title={item.textShort} description={item.textLong.textLong} />
              </ListCardItem>
            ))}
          </ListCardGrid>
          <ExploreMore $justifyContent="flex-start" $mt="10px"><button type="button" onClick={HandleModalOpen}><WhiteOutlineButton text="Request for Price" /></button></ExploreMore>
        </SectionBox>
      </Container>
    </Section>
  );
};

export default BlockCommonBuildingPackagesPrices;