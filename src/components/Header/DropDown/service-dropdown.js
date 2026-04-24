import React from "react";
import { Link } from "gatsby";
import { DropDown, DropDownList, DropDownListItem, DropDownBody } from "./dropdown";

function ServiceDropdown({ isActive }) {
  return (
    <DropDown className={`dropdown-menu ${isActive ? 'active' : ''}`}>
      <DropDownBody>
        <DropDownList>
          <DropDownListItem><Link to="/alabama">Alabama</Link></DropDownListItem>
          <DropDownListItem><Link to="/florida">Florida</Link></DropDownListItem>
          <DropDownListItem><Link to="/georgia">Georgia</Link></DropDownListItem>
          <DropDownListItem><Link to="/north-carolina">North Carolina</Link></DropDownListItem>
          <DropDownListItem><Link to="/south-carolina">South Carolina</Link></DropDownListItem>
        </DropDownList>
      </DropDownBody>
    </DropDown>
  );
}

export default ServiceDropdown;
