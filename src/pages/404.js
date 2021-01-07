import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from '../components/logo'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Logo />
    <div style={{width: '100%', textAlign: 'center'}}>
      <h1 style={{margin: '0 auto'}}>Hold Tight! This page is coming soon...Promise!</h1>
      <h2>Until Then, explore out <Link to="/praktices">Pra<span style={{color: 'red'}}>k</span>tices</Link></h2>
    </div>
  </Layout>
)

export default NotFoundPage
