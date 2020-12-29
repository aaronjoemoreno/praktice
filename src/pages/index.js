import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'
import About from '../components/about'

const IndexPage = () => (
  <Layout>
    <SEO title="Praktice" />
    <Hero />
    <About />
  </Layout>
)

export default IndexPage
