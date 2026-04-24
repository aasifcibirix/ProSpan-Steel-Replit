import React from "react"
import WindowedSelect from "react-windowed-select"
import styled from "styled-components"

const StyledWindowedSelect = styled(props => <WindowedSelect {...props} />)`
  text-align:left;
  .css-13cymwt-control,
  .css-t3ipsp-control{
    background:transparent;

    color: #fff;
    border:none;
    border-bottom:1px solid #272828;
    border-radius:0;
    font-family: 'Kanit', sans-serif;
    font-size: 16px;
    line-height: 28px;
    font-weight: 300;

    padding: 6px 12px;
    @media (min-width: 1200px) {
      padding: 8px 12px;
    }
    @media (min-width: 1600px) {
      padding: 10px 20px;
    }
    
    &:active
    &:focus,
    &:hover{
      outline: none;
      box-shadow: none;
      border-bottom-color: #fff;
      &::placeholder {
        color: #fff;
      }
    }
  }
  .css-t3ipsp-control{
    box-shadow:none;
    border-color: #fff;
  }
  .css-qbdosj-Input, .css-19bb58m{
    color: #fff;
    margin:0;
    padding:0;
  }
  .css-1dimb5e-singleValue{
    color: #fff;
  }

  .css-1u9des2-indicatorSeparator{
    display: none;
  }

  .css-1jqq78o-placeholder{
    color: #D4D4D4 !important;
    font-weight:300;
  }
  .css-1hwfws3 {
    padding: 6px 12px;
    @media (min-width: 992px) {
      padding: 8px 28px;
    } 

  }

  .css-1fdsijx-ValueContainer, .css-hlgwow{
    padding:0;
  }
  .css-1xc3v61-indicatorContainer,
  .css-15lsz6c-indicatorContainer{
    padding:4px;
  }
  .css-1nmdiq5-menu {
    z-index:10;
  }
`

const StateSelect = props => {
  const options = [
    { label: "Alabama", value: "AL" },
    { label: "Alaska", value: "AK" },
    { label: "Arizona", value: "AZ" },
    { label: "Arkansas", value: "AR" },
    { label: "California", value: "CA" },
    { label: "Colorado", value: "CO" },
    { label: "Connecticut", value: "CT" },
    { label: "Delaware", value: "DE" },
    { label: "District Of Columbia", value: "DC" },
    { label: "Florida", value: "FL" },
    { label: "Georgia", value: "GA" },
    { label: "Hawaii", value: "HI" },
    { label: "Idaho", value: "ID" },
    { label: "Illinois", value: "IL" },
    { label: "Indiana", value: "IN" },
    { label: "Iowa", value: "IA" },
    { label: "Kansas", value: "KS" },
    { label: "Kentucky", value: "KY" },
    { label: "Louisiana", value: "LA" },
    { label: "Maine", value: "ME" },
    { label: "Maryland", value: "MD" },
    { label: "Massachusetts", value: "MA" },
    { label: "Michigan", value: "MI" },
    { label: "Minnesota", value: "MN" },
    { label: "Mississippi", value: "MS" },
    { label: "Missouri", value: "MO" },
    { label: "Montana", value: "MT" },
    { label: "Nebraska", value: "NE" },
    { label: "Nevada", value: "NV" },
    { label: "New Hampshire", value: "NH" },
    { label: "New Jersey", value: "NJ" },
    { label: "New Mexico", value: "NM" },
    { label: "New York", value: "NY" },
    { label: "North Carolina", value: "NC" },
    { label: "North Dakota", value: "ND" },
    { label: "Ohio", value: "OH" },
    { label: "Oklahoma", value: "OK" },
    { label: "Oregon", value: "OR" },
    { label: "Pennsylvania", value: "PA" },
    { label: "Rhode Island", value: "RI" },
    { label: "South Carolina", value: "SC" },
    { label: "South Dakota", value: "SD" },
    { label: "Tennessee", value: "TN" },
    { label: "Texas", value: "TX" },
    { label: "Utah", value: "UT" },
    { label: "Vermont", value: "VT" },
    { label: "Virginia", value: "VA" },
    { label: "Washington", value: "WA" },
    { label: "West Virginia", value: "WV" },
    { label: "Wisconsin", value: "WI" },
    { label: "Wyoming", value: "WY" },
  ]

  if (typeof window !== `undefined`) {
    return (
      <StyledWindowedSelect
        options={options}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder="Select state..."
        required
      />
    )
    // return (
    //   <WindowedSelect
    //     options={options}
    //     id={props.id}
    //     value={props.value}
    //     onChange={props.onChange}
    //     placeholder="Select state..."
    //   />
    // )
  }
  return true
}


export default StateSelect
