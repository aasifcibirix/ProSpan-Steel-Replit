import React from "react"
import { Link } from 'gatsby'
import {
  DropDown,
  DropDownList,
  DropDownListItem,
  DropDownBody
} from './dropdown'


function CompanyDropdown({ isActive }) {
  return (
    <DropDown className={`dropdown-menu ${isActive ? 'active' : ''}`}>
      <DropDownBody>
        <DropDownList>
          {
            [
              {
                title: 'About Us',
                link: '/about-us',
              },
              {
                title: 'Contact Us',
                link: '/contact-us',
              }].map((item, i) => (
                <DropDownListItem key={i}>
                  <Link to={item.link}>{item.title}</Link>
                </DropDownListItem>
              ))}
        </DropDownList>
      </DropDownBody>
    </DropDown>
  )
}

export default CompanyDropdown