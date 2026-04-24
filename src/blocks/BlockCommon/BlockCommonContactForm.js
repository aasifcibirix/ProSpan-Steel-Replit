import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Section, SectionDescription, SectionBox, SectionTitle, SectionImageBkg } from "src/components/Section";
import RequestForm from "src/components/RequestForm";
import styled from "styled-components";

const Row = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;    
  margin:0 -10px;
  @media(min-width:1600px){
  margin:0 -15px;
  }  
`;

const ColLeft = styled.div`
  position:relative;
  width:100%;  
  padding:0 10px;
  @media(min-width:1200px){
    flex:0 0 60%;
    max-width:60%;
  }
  @media(min-width:1600px){
    padding:0 15px;
  }
`;

const ColRight = styled.div`
  position:relative;
  width:100%;  
  padding:0 10px;
  @media(min-width:1200px){
    flex:0 0 40%;
    max-width:40%;
  }
  @media(min-width:1600px){
    padding:0 15px;
  }
`;

const FormBox = styled.div`   
  position:relative;
  background: #181A1B;
  padding:20px 10px;
  border-radius: 15px;
  margin-bottom:20px;
  @media(min-width:992px){		
    margin-bottom:40px
  }
  @media(min-width:1200px){        
    padding:30px;
    border-radius: 20px;
    margin-bottom:50px
  }
  @media(min-width:1600px){        
    padding:40px;
    border-radius: 30px;
    margin-bottom:60px
  }
  @media(min-width:1900px){
    padding:50px;
  }
`;

const SectionBoxs = styled(SectionBox)`   
  padding-bottom:0;
`;

const SectionImageBkgs = styled(SectionImageBkg)`   
  top:auto;
  width:100%;
  display:none;
  @media(min-width:1200px){
    display:block;
    left: 80px;
    bottom: -80px;
    max-width:800px;
  }
  @media(min-width:1600px){
    left: 100px;
    bottom: -100px;
    max-width: 900px;     
  }
  @media(min-width:1900px){
    left: 100px;
    bottom: -160px;
    max-width:1100px;
  }
`;

const BlockCommonContactForm = ({ data, location }) => {
  return (
    <Section $ept="0" $epb="0" $xpt="0" $xpb="0" $pt="0" $pb="0" $bgcolor="#fff" className="contact">
      <Container>
        <SectionBoxs $bgcolor="#111415" $borderColor="#111415">
          <SectionImageBkgs $width="auto" $height="auto">
            <GatsbyImage image={data.image.gatsbyImageData} alt={data.titleLong.rawMarkdownBody} />
          </SectionImageBkgs>
          <Row>
            <ColLeft>
              <SectionTitle
                $textColor="#fff"
                $maxWidth="550px"
                $ml="0"
                dangerouslySetInnerHTML={{ __html: data.titleLong.childMarkdownRemark.html }}
              />
              <SectionDescription
                $textColor="#fff"
                dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }}
              />
            </ColLeft>
            <ColRight>
              <FormBox>
                <RequestForm location={location} thanksURL="thank-you-contact-us" />
              </FormBox>
            </ColRight>
          </Row>
        </SectionBoxs>
      </Container>
    </Section>
  );
};

export default BlockCommonContactForm;