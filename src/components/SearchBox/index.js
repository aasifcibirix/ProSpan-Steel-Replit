/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components";
import { navigate } from "gatsby";
import { DropSearch, DropSearchBody, DropSearchItem } from "src/components/Section";
import { SearchIcon, SearchCloseIcon } from "src/components/Icons";
import { useSearch } from "src/useSearch";

const SearchForm = styled.div`
  position: relative;
  z-index: 2;
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 690px;
  width: 100%;
  margin: 0px auto;
  .input-icon {
    .form-control {
      padding: 4px 10px;      
      background-color:#252525;
      border:none;
      color:#fff;
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
        fill: #CACACA;
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

const SearhBox = () => {

  const [searchKey, setSearchKey] = useState("")
  const results = useSearch(searchKey, "", true)
  const [showSearchDropDown, setShowSearchDropDown] = useState(false)
  const [mobileResults, setMobileResults] = useState([]);
  const searchInputRef = useRef()
  const targetRef = useRef(null)

  const applySearch = () => {
    setMobileResults(results);
  };
  const handleClickOutside = event => {
    if (targetRef.current && !targetRef.current.contains(event.target)) {
      if (event.target.id !== searchInputRef.current.id) {
        setShowSearchDropDown(false)
      }
    }
  }
  useEffect(() => {
    setMobileResults(results);
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  const handleSubmit = e => {
    e.preventDefault()

    navigate("/search-result", { state: { searchKey: searchKey } })
  }

  const handleClick = e => {
    setShowSearchDropDown(false)
    navigate("/search-result", { state: { searchKey: searchKey } })
  }
  const handleChange = e => {
    e.preventDefault()
    setSearchKey(e.target.value)
  }

  return (
    <SearchForm className="search-form">
      <SearchContainer className="search-container">
        <div className="input-icon right">
          <form onSubmit={handleSubmit}>
            <input
              ref={searchInputRef}
              className="form-control"
              type="text"
              placeholder="Search..."
              id="search"
              name="search"
              autoComplete="off"
              onFocus={() => setShowSearchDropDown(true)}
              onChange={e => handleChange(e)}
              onKeyDown={event => {
                if (event.key === "Enter") {
                  setShowSearchDropDown(false)
                  navigate("/search-result", { state: { searchKey: searchKey } })
                }
              }}
            />
          </form>
          <span className="icon" onClick={e => handleClick(e)}>
            <SearchIcon />
          </span>
          <span className="icon" style={{ display: "none" }}>
            <SearchCloseIcon />
          </span>
        </div>
        {showSearchDropDown && (
          <DropSearch ref={targetRef} className="drop-search">
            <DropSearchBody>
              {!!results &&
                results.results.map((item, i) => (
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
      </SearchContainer>
    </SearchForm>
  )
}

export default SearhBox
