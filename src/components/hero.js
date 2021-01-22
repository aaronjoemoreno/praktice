import React from 'react'
import Button from './button'
import Logo from './logo'
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

    .details{
      width: 80%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      h3{
        border-radius: 1rem;
        background: var(--light-grey-color);
        color: var(--main-color);
        padding: 1rem 1rem;
        margin: 1rem;
      }
    }

    .image-container{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
      width: 80%;
      margin: 0 auto;
      padding-top: 2rem;
      padding-bottom: 2rem;

      img{
        border-radius: 2.5rem;
      }
    }

    @media (max-width: 768px) {
      .image-container{
        grid-template-columns: 1fr;
        width: 70%;
      }

      .main-logo{
        width: 70%;
      }

      .details{
        grid-template-columns: repeat(2, 1fr);
      }
    }

`

const Hero = () => {

    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
          description,
          details
        }
      }
    }
  `)
    return (
        <Container>
            <Logo />
            <h2>{data.site.siteMetadata.description}</h2>
            <div className="details">
              {data.site.siteMetadata.details.map(item => {
                return(<h3 key={item}>{item}</h3>)
              })}
            </div>
            <div className="image-container">
              <Img fluid={data.header.edges[0].node.fluid} className="header-img-profile" alt="female trainer"/>
              <Img fluid={data.headerTwo.edges[0].node.fluid} className="header-img-profile" alt="male trainer"/>
            </div>
            <Link to="/contact" style={{textDecoration: 'none'}}>
              <Button text="Contact Us!"/>
            </Link>
        </Container>
    )
}

export default Hero