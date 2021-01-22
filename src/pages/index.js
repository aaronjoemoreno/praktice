import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'
import About from '../components/about'
import Footer from '../components/footer'
import { Contact } from '../components/contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Praktice" />
    <Hero />
    <About />
    <Contact/>
    <Footer />
  </Layout>
)

export default IndexPage
