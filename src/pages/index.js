import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'
import About from '../components/about'
import { Contact } from '../components/contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Praktice" />
    <Hero />
    <About />
    <Contact/>
  </Layout>
)

export default IndexPage
