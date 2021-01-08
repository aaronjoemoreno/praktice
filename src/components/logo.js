import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
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
            <Link to="/">
                <Img fluid={data.logo.edges[0].node.fluid} alt="praktice logo" style={{width: '40%', margin: '0 auto'}}/>
            </Link>
        </>
    )
}
export default Logo;