import React from 'react'
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';


const Container = styled.div`
    height: 500px;

    .main-logo{
        width: 60%;
        margin: 0 auto;
    }

    h2{
        text-align: center;
        width: 50%;
        margin: 0 auto;
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

  console.log(data);

    return (
        <Container>
            <Img fluid={data.images.nodes[0].fluid} className="main-logo"/>
            <h2>{data.site.siteMetadata.description}</h2>
        </Container>
    )
}

export default Hero