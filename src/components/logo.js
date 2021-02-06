import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'

const Container = styled.div`
    width: 40%;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 70%;
        margin-top: 2rem;
    }
`


const Logo = () => {

    const data = useStaticQuery(graphql`
        query SiteLogoQuery {
            logo: allImageSharp(filter: {fluid: {originalName: {eq: "praktice.jpg"}}}) {
                edges {
                    node {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    `)

    return(
        <Container>
            <Link to="/">
                <Img fluid={data.logo.edges[0].node.fluid} alt="praktice logo"/>
            </Link>
        </Container>
    )
}
export default Logo;