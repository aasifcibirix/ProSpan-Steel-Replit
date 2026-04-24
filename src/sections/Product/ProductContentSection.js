import React, { useState } from "react";
import { Container, MarkdownContent, Section } from "src/components/Section";
import { Sidebar, SidebarCard, SidebarCardBody, SidebarCardTitle, SidebarForm } from "src/components/Sidebar";
import { NavTab, NavItemTab, NavTabContent, NavPane } from "src/components/TabStyle";
import RequestForm from "src/components/RequestForm";
import styled from "styled-components";

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


const ProductContentSection = ({ location }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabTitles = ["Product Description", "Technical Specifications", "Customization Options"];
  const tabContents = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac mauris interdum, mattis neque a, volutpat justo. Nam id tortor vitae magna eleifend efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras eget ipsum non. ",
    "Maecenas mollis lectus vel elit vehicula, sit amet tristique neque dignissim. Donec non purus ipsum. Praesent placerat ligula eu augue efficitur, sed sagittis dolor semper. Suspendisse potenti. Proin nec magna aliquet arcu euismod convallis facilisis et eros. Aenean aliquet.",
    "Aliquam ullamcorper fringilla velit id blandit. Donec sed nisl at nulla lobortis convallis non sit amet dolor. Mauris posuere arcu dictum congue interdum. Morbi auctor ipsum vel pellentesque accumsan. In hac habitasse platea dictumst. Aenean tempor fermentum ipsum, et suscipit augue luctus a. Nam scelerisque turpis in sagittis venenatis. Mauris luctus lacus.",
  ];
  return (
    <Section className="section-content" $ept="0" $epb="0" $xpt="0" $xpb="0" $pt="0" $pb="0" $bgcolor="#fff">
      <Container>
        <Row>
          <ColLeft>
            <ProductTab>
              <NavTab className="navtab">
                {tabTitles.map((title, index) => (
                  <NavItemTab className="navtab-item" key={index}>
                    <button
                      type="button"
                      className={`navtab-link ${activeTab === index ? "active" : ""}`}
                      onClick={() => setActiveTab(index)}
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
                  <SidebarCardTitle>Get a Quote for Your 40x80 Red Iron Building</SidebarCardTitle>
                  <SidebarForm>
                    <RequestForm location={location} />
                  </SidebarForm>
                </SidebarCardBody>
              </SidebarCard>
            </Sidebar>
          </ColRight>
        </Row>
      </Container>
    </Section>
  )
}

export default ProductContentSection
