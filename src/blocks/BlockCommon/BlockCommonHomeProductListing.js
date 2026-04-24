import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby";
import { Container, Section, SectionTitle, SectionSubTitle, ExploreMore } from "src/components/Section";
import DefaultButton from "src/components/Button/DefaultButton";
import styled from "styled-components";
import ProductCard from "src/components/ProductCard";

const Row = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin:0 -10px;  
`;

const Col = styled.div`
  position:relative;
  width:100%;
  padding:0 10px;
  @media(min-width:768px){
    flex:0 0 50%;
    max-width:50%;
  }
  @media(min-width:1200px){
    flex:0 0 33.333333%;
    max-width:33.333333%;
  }
`;

const BlockCommonHomeProductListing = ({ data, location }) => {
  const productListing = useStaticQuery(graphql`
    query {
      allContentfulProduct {
        edges {
          node {
            id
            title
            sku
            slug
            price
            pageTemplate {
              id
              url
            }
            imageMain {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);
  const priorityProduction = data.refCollections
  const allProducts = productListing.allContentfulProduct.edges.map(c => c.node);
  const priorityTitles = priorityProduction ? priorityProduction.map(item => item.title) : [];

  const sortedProducts = allProducts.sort((a, b) => {
    const aIsPriority = priorityTitles.includes(a.title);
    const bIsPriority = priorityTitles.includes(b.title);

    // If both are priority or both are not priority, maintain original order
    if (aIsPriority === bIsPriority) return 0;
    // If only a is priority, a comes first
    if (aIsPriority) return -1;
    // If only b is priority, b comes first
    return 1;
  });

  const currentProducts = sortedProducts.slice(0, 15);
  return (
    <Section className="section-product" $bgcolor="#111415">
      <Container>
        <SectionTitle $textAlign="center" $textColor="#fff" $mb="30px" $md-mb="15px" className="h2-xl">
          <SectionSubTitle $textColor="#fff" >
            {data.title}
          </SectionSubTitle>
          {data.subTitle}
        </SectionTitle>
        <Row>
          {currentProducts.map(d =>
            <Col key={d.id}>
              <ProductCard data={d} location={location} />
            </Col>
          )}
        </Row>
        <ExploreMore>
          <Link to={data.view_button.link}>
            <DefaultButton text={data.view_button.text} />
          </Link>
        </ExploreMore>
      </Container>
    </Section>
  );
};

export default BlockCommonHomeProductListing;
