import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { ArrowUpIcon } from "src/components/Icons";
import { Container, Section, SectionDescription, SectionTitle, SectionImageBkg } from "src/components/Section";
import { CategoryCard, CategoryCaption, CategoryFigure, CategoryName, CategorySummary, CategoryAction } from "src/components/CategoryStyle";
import { Link } from "gatsby";

const Row = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items: center;
  margin:0 -10px;
`;

const ColLeft = styled.div`
  position:relative;
  width:100%;
  padding:0 10px;
  @media(min-width:992px) {
    flex:0 0 48%;
    max-width:48%;
  }   
`;

const ColRight = styled.div`
  position:relative;
  width:100%;
  padding:0 10px;
  @media(min-width:992px) {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
`;

const ListCategories = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin:0 -5px;
  
`;

const ListItem = styled.div`
  position:relative;
  width:100%;
  padding:0 5px;
  @media(min-width:768px) {
    flex:0 0 50%;
    max-width:50%;
  }   
  @media(min-width:992px) {
    flex:0 0 33.33333%;
    max-width:33.33333%;
  }   
  @media(min-width:1600px) {
    flex:0 0 20%;
    max-width:20%;
  }
`;

const WhiteBox = styled.div`
  background-color:#fff;
  position:relative;
  overflow:hidden;
  border-radius:10px;    
  padding:30px 15px;
  @media(min-width:992px){
    border-radius:20px;
    padding:30px;
	}
  @media(min-width:1200px) {
    border-radius:25px;
    padding:40px;
	}
	@media(min-width:1600px) {
    border-radius:35px;
		padding:50px;	
  }
`;

const BlockCommonHomeCategoryListing = ({ data }) => {
  const resourcesCategoryListingContent = data.resources.find(r => r.identify === "CATEGORY_LISTING_CONTENT");
  const order = [
    "Barndominiums",
    "Commercial Buildings",
    "Industrial Facilities",
    "Aviation",
    "Agricultural Buildings",
    "Church Buildings",
    "Recreational Buildings",
    "Government Buildings",
    "Storage Buildings"
  ];
  const categoriesbasic = resourcesCategoryListingContent.contents;

  const categories = categoriesbasic.sort((a, b) => {
    const aTitle = a.title.trim().toLowerCase();
    const bTitle = b.title.trim().toLowerCase();

    const aIndex = order.findIndex(category => category.toLowerCase() === aTitle);
    const bIndex = order.findIndex(category => category.toLowerCase() === bTitle);

    const aValidIndex = aIndex === -1 ? order.length : aIndex;
    const bValidIndex = bIndex === -1 ? order.length : bIndex;

    return aValidIndex - bValidIndex;
  })

  return (
    <Section className="section-category" $bgcolor="#111415">
      <SectionImageBkg $opacity="0.30">
        <GatsbyImage image={data.image.gatsbyImageData} alt={data.title} />
      </SectionImageBkg>
      <Container>
        <WhiteBox>
          <Row>
            <ColLeft>
              <SectionTitle $textColor="#0D0A0B">{data.title}</SectionTitle>
            </ColLeft>
            <ColRight>
              <SectionDescription dangerouslySetInnerHTML={{ __html: data.description.childMarkdownRemark.html }} />
            </ColRight>
          </Row>
          <ListCategories>
            {categories.map(d => (
              d.title !== "Automotive Shops" &&
              <ListItem key={d.id}>
                <Link to={`${d.pageTemplate.url}/${d.slug}`}>
                  <CategoryCard className="card card-categroy">
                    <CategoryFigure className="card-figure">
                      {d.image &&
                        <GatsbyImage
                          image={d.image.gatsbyImageData}
                          alt={d.title}
                        />
                      }
                    </CategoryFigure>
                    <CategoryCaption className="card-caption">
                      <div>
                        <CategoryName className="card-name">{d.title}</CategoryName>
                        {d.summary && <CategorySummary className="card-summary" dangerouslySetInnerHTML={{ __html: d.summary.childMarkdownRemark.html }} />}
                      </div>
                      <CategoryAction className="card-action">
                        <span className="text">View Details</span>
                        <span className="icon"><ArrowUpIcon /></span>
                      </CategoryAction>
                    </CategoryCaption>
                  </CategoryCard>
                </Link>
              </ListItem>
            ))}

          </ListCategories>
          {/* <ExploreMore>
            <Link to="/red-iron-buildings">
              <DefaultOutlineButton text="View All Buildings" />
            </Link>
          </ExploreMore> */}
        </WhiteBox>
      </Container>
    </Section>
  );
};

export default BlockCommonHomeCategoryListing;
