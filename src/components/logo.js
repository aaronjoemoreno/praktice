import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'


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
        <>
            <Img fluid={data.logo.edges[0].node.fluid} alt="praktice logo" style={{width: '60%', margin: '0 auto'}}/>
        </>
    )
}
export default Logo;