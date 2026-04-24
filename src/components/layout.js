/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Context } from "./context.js";
import Header from "./Header"
import Footer from "./Footer"
import FontPreLoad from "./FontPreLoad"
import RequestModal from "./RequestModal"

const Layout = ({ children, location, noHeader }) => {
  const [popupContext, setPopupContext] = useState({
    isVisible: false,
    thanksURL: "/thank-you",
  });
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // Check if we're on staging environment
  const isStaging =
    typeof window !== "undefined" &&
    (window.location.hostname.includes("staging-prospan-steel.netlify.app") ||
      window.location.hostname.includes("staging.") ||
      window.location.hostname === "localhost");

  return (
    <Context.Provider
      value={{
        popupContext,
        setPopupContext
      }}
    >
      {isStaging && (
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
      )}
      <FontPreLoad />
      {!noHeader && (
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} location={location} />
      )}
      <main>{children}</main>
      <Footer location={location} />
      <RequestModal location={location} thanksURL={popupContext.thanksURL} />
    </Context.Provider>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout