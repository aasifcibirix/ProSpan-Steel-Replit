import React, { useState, useRef } from "react";
import { useLocation } from "@reach/router";
import styled from "styled-components";
import { Container, MarkdownContent, Section } from "src/components/Section";
import { Sidebar, SidebarCard, SidebarCardBody, SidebarCardTitle, SidebarForm } from "src/components/Sidebar";
import RequestForm from "src/components/RequestForm";

const Row = styled.div`
  display:flex;
  flex-wrap:wrap; 
  margin:0 -10px;
  @media(min-width:992px){
    margin:0 -15px;
  }  
  @media(min-width:1600px){
    margin:0 -30px;
  }
`;

const ColLeft = styled.div`
  position:relative;
  width:100%;
  padding:0 10px;
  @media(min-width:992px){
    padding:0 15px;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }  
  @media(min-width:1600px){
    padding:0 30px;
  }
`;

const ColRight = styled.div`
  position:relative;
  width:100%;
  padding:0 10px;
  @media(min-width:992px){
    padding:0 15px;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }  
  @media(min-width:1600px){
    padding:0 30px;
  }
`;

const ProductTab = styled.div`
  margin-bottom:30px;
`;

const NavTab = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media(max-width:575.98px){
    flex-wrap: nowrap;
    overflow-x: auto;
    margin-bottom:15px;
    padding-bottom: 15px;
    .navtab-link{
      white-space: nowrap;
    }
  }
  margin:0 -5px 20px -5px;
  @media(min-width:1200px){
    margin:0 -10px 30px -10px;
  }
  @media(min-width:1600px){
    margin:0 -20px 40px -20px;
  }
`;

const NavItemTab = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding:0 5px;
  @media(min-width:1200px){
    padding:0 10px;
  }
  @media(min-width:1600px){
    padding:0 20px;
  }
  .navtab-link{
    font-family: 'Rajdhani', serif;
    background-color:transparent;
    color:#5E5E5E;
    font-size:16px;
    line-height:26px; 
    font-weight:600;
    border-radius:28px;
    padding:3px 12px;
    @media(min-width:576px){
      padding:5px 15px;
    }
    @media(min-width:1200px){
      font-size:18px;
      line-height:28px; 
      padding:10px 20px;
    }
    @media(min-width:1600px){
      padding:14px 28px;
    }
    &.active{
      background-color:#0D0A0B;
      color:#fff;
    }
  }
`;

const NavTabContent = styled.div``;

const NavPane = styled.div`
  display:none;
  &.active{
    display:block;    
  }
`;

const BlockProductDetail = ({ data }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]);

  const tabTitles = ["Product Description", "Technical Specifications", "Customization Options"];
  const tabContents = [
    <div dangerouslySetInnerHTML={{ __html: data.product.productDescription.childMarkdownRemark.html }} />,
    <div dangerouslySetInnerHTML={{ __html: data.product.technicalSpecifications.childMarkdownRemark.html }} />,
    <div dangerouslySetInnerHTML={{ __html: data.product.customizationOptions.childMarkdownRemark.html }} />,
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);

    // Center the selected tab on mobile devices
    if (tabRefs.current[index]) {
      tabRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  return (
    <Section className="section-content" $ept="0" $xpt="0" $pt="0" $bgcolor="#fff">
      <Container>
        <Row>
          <ColLeft>
            <ProductTab>
              <NavTab className="navtab" role="tablist">
                {tabTitles.map((title, index) => (
                  <NavItemTab
                    className="navtab-item"
                    key={index}
                    ref={(el) => (tabRefs.current[index] = el)}
                  >
                    <button
                      type="button"
                      className={`navtab-link ${activeTab === index ? "active" : ""}`}
                      onClick={() => handleTabClick(index)}
                      onFocus={(e) => e.target.focus()}
                      role="tab"
                      aria-selected={activeTab === index}
                      aria-controls={`tabpanel-${index}`}
                      id={`tab-${index}`}
                      tabIndex={activeTab === index ? 0 : -1}
                    >
                      {title}
                    </button>
                  </NavItemTab>
                ))}
              </NavTab>
              <NavTabContent className="navtab-content">
                {tabContents.map((content, index) => (
                  <NavPane
                    key={index}
                    className={`navtab-pane ${activeTab === index ? "active" : ""}`}
                    role="tabpanel"
                    id={`tabpanel-${index}`}
                    aria-labelledby={`tab-${index}`}
                    tabIndex={activeTab === index ? 0 : -1}
                  >
                    <MarkdownContent>
                      {content}
                    </MarkdownContent>
                  </NavPane>
                ))}
              </NavTabContent>
            </ProductTab>
          </ColLeft>
          <ColRight>
            <Sidebar className="isSticky">
              <SidebarCard>
                <SidebarCardBody>
                  <SidebarCardTitle>Get a Quote for Your {data.product.title}</SidebarCardTitle>
                  <SidebarForm>
                    <RequestForm location={location} thanksURL="thank-you-product" />
                  </SidebarForm>
                </SidebarCardBody>
              </SidebarCard>
            </Sidebar>
          </ColRight>
        </Row>
      </Container>
    </Section>
  );
};

export default BlockProductDetail;