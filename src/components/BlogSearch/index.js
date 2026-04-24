/*eslint-disable no-unused-vars*/
/*eslint-disable jsx-a11y/click-events-have-key-events*/
/*eslint-disable jsx-a11y/no-static-element-interactions*/
/*eslint-disable react-hooks/exhaustive-deps*/
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components";
import { SearchIcon, SearchCloseIcon } from "src/components/Icons";


const SearchForm = styled.div`
  position: relative;
  z-index: 2;
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 100%;
  width: 100%;
  .input-icon {
    .form-control {
      padding: 4px 10px;      
      background-color: #F8FBFD;
      border:1px solid #E2EAEF;
      color:#0D0A0B;
      border-radius:8px;
      &::placeholder {
        color: #CACACA;
      }
      &:focus,
      &:active {
        &::placeholder {
          color: #CACACA;
        }
      }
    }
    .icon {
      cursor: pointer;
      &:after{
        content: '';
        position:absolute;
        left:0;
        top:50%;
        transform: translateY(-50%);
        height:15px;
        width:2px;
        background-color:#000;
      }
      width: 45px;
      > svg {
        fill: #2B2B2B;
        width: 15px;
        height: 15px;
      }
      &:hover {
        > svg {
          fill: #e9242a;
        }
      }
    }
    &.right {
      > .form-control {
        padding-right: 45px;
        padding-left: 10px;
      }
    }
  }
`;


const BlogSearch = ({ blogs, onSearch, location }) => {
  const [search, setSearch] = useState("");
  const searchInputRef = useRef(null);
  const [mobileResults, setMobileResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

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
    onSearch(search);
  };

  const checkWithKeyword = (type, data, search) => {
    if (type === "blogs") {
      if (data.title.toLowerCase().includes(search.toLowerCase())) return true;

      if (data.author.toLowerCase() === search.toLowerCase())
        return true;
    } else if (type === "tag") {
      if (data.toLowerCase().includes(search.toLowerCase())) return true;
    }

    return false;
  };

  const results = blogs.filter((b) => checkWithKeyword("blogs", b, search));

  return (
    <SearchForm className="search-form">
      <SearchContainer className="search-container tw-relative">
        <div className="input-icon right">
          <input
            ref={searchInputRef}
            className="form-control"
            type="text"
            placeholder="Search Blog Here....."
            id="search"
            name="search"
            autoComplete="off"
            value={search}
            onFocus={() => setShowDropdown(true)}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowDropdown(true);
              onSearch(e.target.value);
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
        {/* {showDropdown && (
          <DropSearch ref={targetRef} className="drop-search">
            <DropSearchBody>
              {!!results &&
                results.slice(0, 10).map((item, i) => (
                  <DropSearchItem
                    key={i}
                    onClick={() => {
                      navigate("/blog/" + item.url);
                    }}
                  >
                    {item.title}
                  </DropSearchItem>
                ))}
            </DropSearchBody>
          </DropSearch>
        )} */}
      </SearchContainer>
    </SearchForm>
  )
}

export default BlogSearch
