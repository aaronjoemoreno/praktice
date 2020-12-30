import React from 'react'
import Button from './button'
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';


const Container = styled.div`
    text-align: center;
    padding-bottom: 5rem;

    .main-logo{
        width: 60%;
        margin: 0 auto;
    }

    h2{
        font-size: 2.2rem;
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
      width: 70%;
      margin: 0 auto;
      padding-top: 5rem;
    }

    .header-img-profile:hover{

    }
`

const Hero = () => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      images: allImageSharp {
        nodes {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
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

  const contact = (e) =>{
    //TODO - go to contact section
    alert('go to contact section')
  }

    return (
        <Container>
            <Img fluid={data.images.nodes[0].fluid} className="main-logo" alt="praktice logo"/>
            <h2>{data.site.siteMetadata.description}</h2>
            <Button text="Contact Us!" clickedButton={contact}/>

            <div className="image-container">
              <Img fluid={data.images.nodes[3].fluid} className="header-img-profile" alt="female trainer"/>
              <Img fluid={data.images.nodes[4].fluid} className="header-img-profile" alt="male trainer"/>
            </div>
        </Container>
    )
}

export default Hero