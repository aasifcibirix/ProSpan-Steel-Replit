import React from "react"
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Section, SectionDescription, SectionTitle } from "src/components/Section";

const ContentGrid = styled.div`   
    position: relative;
    display: grid;
    gap: 20px;
    align-items: center;
    @media(min-width:768px){	
        grid-auto-flow: column;
    }
    &.gutters-lg-30{
        @media(min-width:992px){	
            gap: 30px;
        }
    }
    &.gutters-lg-40{
        @media(min-width:992px){	
            gap: 40px;
        }
    }
`;

const ContentTextGrid = styled.div`   
`;

const ContentMediaGrid = styled.div`   
    .gatsby-image-wrapper{
        display:inline-flex;
    }
`;

const MediGridImage = styled.figure`   
    overflow:hidden;
    margin-bottom:0;
    border-radius:10px;
    @media(min-width:992px){	
        border-radius:15px;
    }
    @media(min-width:1200px){	
        border-radius:20px;      
    }
    @media(min-width:1600px){	
        border-radius:30px;
    }
    .gatsby-image-wrapper{
        display:block;
    }
`;

const BlockCommonRedIronService = ({ data }) => {
  return (
    <Section className="section-delivery" $bgcolor="#fff" $ept="30px" $epb="30px" $xpt="20px" $xpb="20px" $pt="15px" $pb="15px">
      <Container $maxWidth="1680px">
        <ContentGrid className="gutters-lg-40">
          <ContentTextGrid>
            <SectionTitle>{data.title}</SectionTitle>
            <SectionDescription $mb="0" dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
          </ContentTextGrid>
          <ContentMediaGrid className="d-none d-md-block">
            <MediGridImage><GatsbyImage image={data.image.gatsbyImageData} alt={data.title} /></MediGridImage>
          </ContentMediaGrid>
        </ContentGrid>
      </Container>
    </Section>
  )
}

export default BlockCommonRedIronService;