import React from 'react'
import { Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-css'

import '../pages/praktices.css'

const Container = styled.div`
    text-align: center;
    margin: 0 auto;
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;

    .details{
        width: 80%;
        margin: 0 auto;
    }

    .my-masonry-grid{
        width: 80%;
        margin: 0 auto;
        background: white;
    }
    .praktice{
        margin: 1rem;
        padding: 1rem;

        img{
            border-radius: 2rem;
        }
    }

    .praktices{
        display: grid;
        grid-column-gap: 0rem;
        grid-template-columns: repeat(2, 1fr);
    }
    .button{
        margin-bottom: 2rem;
    }
`

const Studio = () => {
    const data = useStaticQuery(graphql`
    query {
        studio: allSanityStudio(limit: 6) {
            nodes {
                image {
                    asset {
                        fluid {
                            src
                        }
                    }
                }
            }
        }
    }
`)


    const breakpointColumnsObj = {
        default: 2,
        1100: 2,
        700: 2,
        500: 1
      };

    const praktices = data.studio.nodes;

    return (
        <Container>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                // style={{background: 'black'}}
                >
                {praktices.map((praktice, index) => {
                    return(
                        <div className="praktice" key={index} style={{position: 'relative', boxShadow: `0px 3px 15px rgba(0,0,0,0.4)`, paddingBottom: `.3rem`, borderRadius: `2rem`}}>
                            <Link to="/studio">
                                <Img fluid={praktice.image.asset.fluid} style={{height: 400, borderRadius: `1rem`}} />
                            </Link>
                        </div>
                    )
                })}
            </Masonry>
        </Container>
    )
}

export default Studio