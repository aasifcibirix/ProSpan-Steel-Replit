import React, { useEffect, useContext } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Section, SectionDescription, SectionTitle, ExploreMore } from "src/components/Section";
import { CircleArrowIcon } from "src/components/Icons";
import DefaultButton from "src/components/Button/DefaultButton";
import { Context } from "src/components/context"
import styled from "styled-components";


const RowContent = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;  
  align-items:center;
  margin:0 -10px;  
  @media(min-width:1200px){
      margin:0 -15px;
  }
  @media(min-width:1600px){
    margin:0 -30px;
  }
`;
const ContentColumn = styled.div`
    position:relative;
    width:100%;   
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    padding:0 10px;
    @media(min-width:1200px){
        padding:0 15px;
    }
    @media(min-width:1600px){
        padding:0 30px;
    }
`;
const ImageColumn = styled.div`
    position:relative;
    width:100%;     
    display:none;
    padding:0 10px;
    @media(min-width:1200px){		
        flex:0 0 33.33333%;
        max-width:33.33333%;
        display:flex;
    }
    @media(min-width:1600px){		
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
    @media(min-width:992px){		
        padding:20px;
        border-radius:20px;
    }
    @media(min-width:1200px){		
        border-radius:30px;
    }
    @media(min-width:1600px){		
        border-radius:45px;
    }

    .gatsby-image-wrapper{
        border-radius:10px;
        @media(min-width:992px){		
            border-radius:15px;
        }
        @media(min-width:1200px){		
            border-radius:25px;
        }
        @media(min-width:1600px){		
            border-radius:30px;
        }
    }
`;
const ListCircle = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin:0 -5px 15px -5px;
  gap: 15px 0;
  @media (min-width: 1200px) {
    margin:0 -10px 20px -10px;
    gap: 20px 0;
  }
  @media (min-width: 1600px) {
    margin:0 -15px 30px -15px;
    gap: 30px 0;
  }
  `;
const ListItemCircle = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  position:relative;
  gap:10px;
  width:100%;
  padding:0 5px;
  @media(min-width:768px){
    flex:0 0 50%;
    max-width:50%;
  }  
  @media (min-width: 1200px) {
    padding:0 10px;
  } 
  @media (min-width: 1600px) {
    padding:0 15px;
  } 
  .icon{
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    background-color:#2B2B2B;
    width:34px;
    height:34px;
    min-width:34px;

    flex: 0 0 auto;
    width: auto;
    max-width: none;
    @media (min-width: 992px) {
      width:40px;
      height:40px;
      min-width:40px;
    }
    @media (min-width: 1200px) {
      width:50px;
      height:50px;
      min-width:50px;
    }
    svg, img{
      fill:#fff;
      width:60%;
      margin:0;
      padding:0;
        @media (min-width: 992px) {
          width:80%;
      
        }
        @media (min-width: 1200px) {
          width:auto;
        }
    }
  }
  .text{
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;

    font-size: 18px;
    line-height: 28px;
    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 30px;
    }
    @media (min-width: 992px) {
      font-size: 22px;
      line-height: 32px;
    }
  }
`;

const DefaultIconCard = ({ size, icon, title }) => {
  return (
    <ListItemCircle>
      <div className="icon">{icon}</div>
      <div className="text">{title}</div>
    </ListItemCircle>
  );
};

const BlockCommonFinanceMetal = ({ data }) => {
  const { popupContext, setPopupContext } = useContext(Context);
  const HandleModalOpen = () => {
    setPopupContext({
      isVisible: true,
      thanksURL: "thank-you-financing"
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
    <Section $bgcolor="#fff">
      <Container $maxWidth="1760px">
        <RowContent>
          <ContentColumn>
            <SectionTitle $ml="0">{data.title}</SectionTitle>
            <SectionDescription dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
            <ListCircle>
              {data.refCollections.map((item, index) => (
                <DefaultIconCard key={index} icon={<img src={item.icon.file.url} alt={item.textShort} />} title={item.textShort} />
              ))}

            </ListCircle>
            <ExploreMore $justifyContent="flex-start">
              <button type="button" onClick={HandleModalOpen}>
                <DefaultButton icon={<CircleArrowIcon />} text="Apply for Financing" />
              </button>
            </ExploreMore>
          </ContentColumn>
          <ImageColumn>
            <MediaBox><GatsbyImage image={data.image.gatsbyImageData} alt={data.title} /></MediaBox>
          </ImageColumn>
        </RowContent>
      </Container>
    </Section>
  )
}
export default BlockCommonFinanceMetal;