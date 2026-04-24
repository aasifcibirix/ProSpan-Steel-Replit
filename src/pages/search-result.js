/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef, useState } from "react";
import Layout from "src/components/layout"
import Seo from "src/components/seo"
import { Link } from "gatsby";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
import { BreadCrumb, Container, Section } from "src/components/Section";
import { HeroBanner, HeroCover, HeroControler, HeroTitle } from "src/components/HeroInner";
import {
  Nodata,
  NodataTitle,
  NodataDesc,
  NodataMedia,
  NodataGrid,
  NodataItem,
} from "src/components/Nodata";
import { StyleProductCard, StyleProductBody, StyleProductSku, StyleProductFigure, StyleProductName, StyleProductDesc, StyleProductAction } from "src/components/ProductStyle";
import DefaultLinkButton from "src/components/Button/DefaultLinkButton";
import styled from "styled-components";
import { SearchIcon, SearchCloseIcon } from "../components/Icons";
// import Pagination from "src/components/Pagination";
import BreakpointUp from "src/components/Media/BreakpointUp";
import { useSearch } from "../useSearch";

const SearchGrid = styled.div`
  position:relative;
`
const SearchItem = styled.div`
  .card{
    display:flex;
    flex-wrap:wrap;
    text-align:left;
    border:1px solid #E2EAEF;
    background-color:#F8FBFD;
    padding:10px;
    .card-figure{
      position:relative;
      width:100%;
      @media (min-width: 768px) {
        flex: 0 0 35%;
        max-width: 35%;
      }
      @media (min-width: 1200px) {
        flex: 0 0 30%;
        max-width: 30%;
        padding:20px;
      }
      @media (min-width: 1600px) {
        flex: 0 0 25%;
        max-width: 25%;
      }
      .gatsby-image-wrapper{
        height:100%;
      }
    }

    .product-cta{
      background-color:transparent;
      .product-item-cta{
        flex: 0 0 auto;
        width: auto;
        max-width: none;
        a{
          &:hover, &:focus{
            .icon{
              svg{
                fill:#000;                
              }
            }
          }
        }
      }

    }
    .product-desc{
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical; 
      overflow: hidden;
      margin-bottom:10px;
    }
    .card-body{
      @media (min-width: 768px) {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
      }

      padding: 10px;
      @media (min-width: 768px) {
        padding: 10px 20px;
      }
      @media (min-width: 1600px) {
        padding: 10px 30px;
      }
    }
  } 
`
const SearchWrap = styled.div`
  margin-bottom:30px;
`
const SearchInput = styled.div`
  margin-bottom:30px;
  .search-container{
    max-width:100%;
  }
  .input-icon > {
    .form-control{
      background-color: #F8FBFD;
      border:1px solid #E2EAEF;
      color:#0D0A0B;
    }
    .icon{
      > svg{
        fill: #2B2B2B;
      }
    }
  }

`
const SearchResult = styled.div`
  font-size:16px;
  line-height:26px;
  font-weight: 300;
  color:#0D0A0B;
  margin-bottom:30px;
`
const DropSearchBody = styled.div``;

const DropSearch = styled.div`
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.3);
  max-width: calc(100vw - 60px);
  top: 100%;
  left: 0;
  right: 0;
  z-index: 2;
  text-align: left;
  overflow-y: auto;
  max-height: 310px;
  border-radius: 8px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ebebeb;
  }
  &::-webkit-scrollbar-thumb {
    background: #6d6d6d;
    border-radius: 4px;
  }
`;
const DropSearchItem = styled.div`
  cursor: pointer;
  padding: 4px 20px;
  border-bottom: 1px solid rgb(227, 233, 242);
  &:last-child {
    border-bottom: none;
  }
  font-size: 12px;
  & a {
    display: flex;
    align-items: center;
    color: #444;
    font-weight: 500;
    justify-content: space-between;
    padding: 8px 0;
    font-size: 14px;
    line-height: 22px;

    & svg {
      fill: #444;
      transition: transform 0.3s ease-out;
      width: 12px;
      display: none;
      ${BreakpointUp.xl`
				display:block;
			`}
    }
    &:hover {
      color: #000;
      svg {
        transform: translateX(4px);
        fill: #000;
      }
    }
  }
  &:hover {
    background: lightgray;
  }
`;


const SearchResultPage = ({ location }) => {

  const searchInputRef = useRef(null);
  const [search, setSearch] = useState(location.state?.searchKey || "");
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileResults, setMobileResults] = useState([]);
  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { results } = useSearch(search, "", true);

  const handleClickOutside = (event) => {
    if (targetRef.current && !targetRef.current.contains(event.target)) {
      if (event.target.id !== searchInputRef.current.id) {
        setShowDropdown(false);
      }
    }
  };

  const handlePlatform = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    setMobileResults(results);
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("resize", handlePlatform);
    handlePlatform();

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("resize", handlePlatform);
    };
  }, []);

  const applySearch = () => {
    setMobileResults(results);
  };

  const renderSearchResult = () => {
    const products = (isMobile ? mobileResults : results).filter(
      (item) => item.type !== "tag"
    );

    if (!products || !products.length) {
      return (
        <Nodata>
          <NodataGrid>
            <NodataItem>
              <NodataMedia><StaticImage src="../images/no-result.png" alt="No Results Found" /></NodataMedia>
            </NodataItem>
            <NodataItem>
              <NodataTitle className="h4 mb-15">No Results Found</NodataTitle>
              <NodataDesc mb="30px">
                <p>
                  The page you requested could not be found. Try refining your
                  search, or use the navigation above to locate the post..
                </p>
              </NodataDesc>
            </NodataItem>
          </NodataGrid>
        </Nodata>
      );
    }

    return (
      <>
        {search &&
          <SearchResult>Your search for {search} has returned {products.length} results</SearchResult>
        }
        <SearchGrid>
          {products.map((item, index) =>
            <SearchItem key={index}>
              <StyleProductCard className="card card-product">
                <StyleProductFigure className="card-figure">
                  <Link to={`/shop/${item.slug}`}>
                    <GatsbyImage image={item.imageMain.gatsbyImageData} alt={item.title} />
                  </Link>
                </StyleProductFigure>
                <StyleProductBody className="card-body">
                  <StyleProductName className="product-name"><Link to={`/shop/${item.slug}`}>{item.title}</Link></StyleProductName>
                  <StyleProductSku className="product-sku">SKU:{item.sku}</StyleProductSku>
                  <StyleProductDesc className="product-desc"><div dangerouslySetInnerHTML={{ __html: item.productDescription && item.productDescription.childMarkdownRemark.html }} /></StyleProductDesc>
                  <StyleProductAction className="card-footer" $justifyContent="flex-start">
                    <Link to={`/shop/${item.slug}`}>
                      <DefaultLinkButton text="View Details" />
                    </Link>
                  </StyleProductAction>
                </StyleProductBody>
              </StyleProductCard>
            </SearchItem>
          )}
        </SearchGrid>
      </>
    );
  };

  return (
    <Layout location={location}>
      <Seo title="Search Result" description="Search Result" />
      <HeroBanner>
        <HeroCover><StaticImage src="../images/contact-banner.jpg" alt="Search Result" /></HeroCover>
        <HeroControler>
          <Container $maxWidth="1760px">
            <BreadCrumb className="breadcrumb"><Link to="/">Home</Link><span>Search</span></BreadCrumb>
            <HeroTitle $mb="0">Search Result</HeroTitle>
          </Container>
        </HeroControler>
      </HeroBanner>

      <Section $bgcolor="#fff">
        <Container $maxWidth="1540px">
          <SearchWrap>
            <SearchInput className="tw-relative">
              <div className="input-icon right">
                <input
                  ref={searchInputRef}
                  className="form-control"
                  type="text"
                  placeholder="Search By Product..."
                  id="search"
                  name="search"
                  value={search}
                  onFocus={() => setShowDropdown(true)}
                  autoComplete="off"
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setShowDropdown(true);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      setShowDropdown(false);
                      applySearch();
                    }
                  }}
                />
                <span className="icon" onClick={applySearch}>
                  <SearchIcon />
                </span>
                <span className="icon" style={{ display: "none" }}>
                  <SearchCloseIcon />
                </span>
              </div>
              {showDropdown && (
                <DropSearch ref={targetRef} className="drop-search">
                  <DropSearchBody>
                    {!!results &&
                      results.map((item, i) => (
                        <DropSearchItem
                          key={i}
                          onClick={() => {
                            navigate("/shop/" + item.slug);
                          }}
                        >
                          {item.title}
                        </DropSearchItem>
                      ))}
                  </DropSearchBody>
                </DropSearch>
              )}
            </SearchInput>
          </SearchWrap>

          {renderSearchResult()}
          {/* <Nodata>
            <NodataMedia><StaticImage src="../images/no-result.png" alt="No Results Found" /></NodataMedia>
            <NodataTitle className="h4 mb-15">No Results Found</NodataTitle>
            <NodataDesc mb="30px"><p>The page you requested could not be found. Try refining your search, or use the navigation above to locate the post..</p>
            </NodataDesc>
          </Nodata> */}
          {/* <Pagination /> */}
        </Container>
      </Section>

    </Layout >
  )
}

export default SearchResultPage