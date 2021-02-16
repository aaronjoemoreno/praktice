import React from 'react'
import Button from './button'
import Logo from './logo'
import styled from "styled-components"
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';


const Container = styled.div`
    text-align: center;
    padding-bottom: 4rem;

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
      width: 50%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      h3{
        width: 15rem;
        border-radius: 1rem;
        background: var(--light-grey-color);
        color: var(--main-color);
        padding: 1rem 1rem;
        margin: 0 auto;
        margin-top: 1rem;
      }
    }

    .image-container{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
      width: 70%;
      margin: 0 auto;
      padding-top: 2rem;
      padding-bottom: 4rem;

      img{
        border-radius: 2.5rem;
      }
    }

    @media (max-width: 1080px) {
      .details{
        h3{
          font-size: 1.5rem;
          width: 10rem;
        }
      }
    }

    @media (max-width: 768px) {
      .image-container{
        grid-template-columns: 1fr;
        width: 70%;
      }

      .details{
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 490px) {
      .details{
        h3{
          font-size: 1.2rem;
          width: 8rem;
        }
      }
    }

    @media (max-width: 410px) {
      .details{
        width: 80%;
        grid-template-columns: 1fr 1fr;

        h3{
          width: 10rem;
          font-size: 1.4rem;
        }
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
            <h2>An exclusive versatile wellness studio serving practitioners <br/>
    and their clients at a reasonable cost.</h2>
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