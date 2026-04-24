import React from "react";
import { Link } from "gatsby";
import { DropDown, DropDownList, DropDownListItem, DropDownBody } from "./dropdown";
import { useStaticQuery, graphql } from "gatsby";

function RedIronBuildingsDropdown({ isActive }) {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProductCategory {
        edges {
          node {
           pageTemplate {
              url
            }
            slug
           title
          }
        }
     }
    }
  `);

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
  const categoriesbasic = data.allContentfulProductCategory.edges;

  const categories = categoriesbasic.sort((a, b) => {
    const aTitle = a.node.title.trim().toLowerCase();
    const bTitle = b.node.title.trim().toLowerCase();

    const aIndex = order.findIndex(category => category.toLowerCase() === aTitle);
    const bIndex = order.findIndex(category => category.toLowerCase() === bTitle);

    const aValidIndex = aIndex === -1 ? order.length : aIndex;
    const bValidIndex = bIndex === -1 ? order.length : bIndex;

    return aValidIndex - bValidIndex;
  })


  return (
    <DropDown className={`dropdown-menu dropdown-mega-menu ${isActive ? 'active' : ''}`}>
      <DropDownBody>
        <DropDownList className="dropdown-mega-list">
          {categories.map((d, index) => (
            d.node.title !== "Automotive Shops" &&
            <DropDownListItem key={index}><Link to={`${d.node.pageTemplate.url}/${d.node.slug}`}>{d.node.title}</Link></DropDownListItem>
          ))}
        </DropDownList>
      </DropDownBody>
    </DropDown>
  );
}

export default RedIronBuildingsDropdown;
