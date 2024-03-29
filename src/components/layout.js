import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import SEO from './seo';
import { Helmet } from "react-helmet"
import "normalize.css"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Praktice NYC" />
        <meta name="twitter:creator" content="@prakticel" />
        <meta name="twitter:image" content="https://www.praktice.nyc/static/e73c4d0ebffcf57efeddd8c3a7781170/0e329/praktice.jpg" />
        <meta name="twitter:description" content="An exclusve versatile wellness studio serving practitioners and their clients at a reasonable cost." />
        <meta property="og:url" content="https://www.praktice.nyc/static/e73c4d0ebffcf57efeddd8c3a7781170/0e329/praktice.jpg" />
        <meta property="og:title" content="Praktice NYC" />
        <meta property="og:description" content="An exclusve versatile wellness studio serving practitioners and their clients at a reasonable cost." />
        <meta property="og:image" content="https://www.praktice.nyc/static/e73c4d0ebffcf57efeddd8c3a7781170/0e329/praktice.jpg" />
      </Helmet>
      <SEO
        content="An exclusve versatile wellness studio serving practitioners and their clients at a reasonable cost." title="Praktice"
      />
      <Header />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
