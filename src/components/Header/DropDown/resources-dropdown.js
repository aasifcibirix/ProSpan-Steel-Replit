import React from "react"
import { Link } from 'gatsby'
import {
  DropDown,
  DropDownList,
  DropDownListItem,
  DropDownBody
} from './dropdown'


function ResourcesDropdown({ isActive }) {
  return (
    <DropDown className={`dropdown-menu ${isActive ? 'active' : ''}`}>
      <DropDownBody>
        <DropDownList>
          {
            [
              {
                title: 'Blogs',
                link: '/blog',
              },
              {
                title: 'Faqs',
                link: '/faqs',
              },
              {
                title: 'Insulation',
                link: '/insulation',
              },
              {
                title: 'Color Options',
                link: '/color-options',
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

export default ResourcesDropdown