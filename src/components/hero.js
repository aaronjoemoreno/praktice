import React from 'react'
import Button from './button'
import styled from "styled-components"
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';


const Container = styled.div`
    text-align: center;
    padding-bottom: 5rem;

    .main-logo{
        width: 40%;
        margin: 0 auto;
    }

    h2{
        font-size: 2rem;
        text-align: center;
        color: var(--grey-color);
        padding-bottom: 2.5rem;
        width: 60%;
        margin: 0 auto;
    }

    .image-container{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
      width: 60%;
      margin: 0 auto;
      padding-top: 5rem;
    }

    @media (max-width: 768px) {
      .header-img-profile{

      }

      .image-container{
        width: 80%;
      }

      .main-logo{
        width: 70%;
      }
    }

`

const Hero = () => {

    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      logo: allImageSharp(filter: {fluid: {originalName: {eq: "praktice.jpg"}}}) {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      header: allImageSharp(filter: {fluid: {originalName: {eq: "header-1.jpg"}}}) {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      headerTwo: allImageSharp(filter: {fluid: {originalName: {eq: "header-2.jpg"}}}) {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      site {
        siteMetadata {
          description
        }
      }
    }
  `)
    return (
        <Container>
            <Img fluid={data.logo.edges[0].node.fluid} className="main-logo" alt="praktice logo"/>
            <h2>{data.site.siteMetadata.description}</h2>
            <Link to="/contact" style={{textDecoration: 'none'}}>
              <Button text="Contact Us!"/>
            </Link>

            <div className="image-container">
              <Img fluid={data.header.edges[0].node.fluid} className="header-img-profile" alt="female trainer"/>
              <Img fluid={data.headerTwo.edges[0].node.fluid} className="header-img-profile" alt="male trainer"/>
            </div>
        </Container>
    )
}

export default Hero