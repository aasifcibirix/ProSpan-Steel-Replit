import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Section, SectionDescription, SectionTitle } from "src/components/Section";
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

const BlockCommonFinanceRequirments = ({ data }) => {
  return (
    <Section $bgcolor="#fff" $ept="0" $epb="0" $xpt="0" $xpb="0" $pt="0" $pb="0">
      <Container>
        <RowContent>
          <ImageColumn>
            <MediaBox><GatsbyImage image={data.image.gatsbyImageData} alt={data.title} /></MediaBox>
          </ImageColumn>
          <ContentColumn>
            <SectionTitle $ml="0">{data.title}</SectionTitle>
            <SectionDescription dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
            <ListCircle>
              {data.refCollections.map((item, index) => (
                <ListItemCircle>
                  <div className="icon"><img src={item.icon.file.url} alt={item.textShort} /></div>
                  <div className="text">{item.textShort}</div>
                </ListItemCircle>
              ))}
            </ListCircle>
          </ContentColumn>
        </RowContent>
      </Container>
    </Section>
  )
}

export default BlockCommonFinanceRequirments;