import React from 'react'
import Header from '../components/header'
import Logo from '../components/logo'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-css'
import { Contact } from '../components/contact'
import Footer from '../components/footer'
import './praktices.css'

const Container = styled.div`
    text-align: center;
    margin: 0 auto;
    width: 100%;

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

const Studio = ({data}) => {
    const breakpointColumnsObj = {
        default: 2,
        1100: 2,
        700: 2,
        500: 1
      };

    const praktices = data.studio.nodes;

    return (
        <Container>
            <Header />
            <Logo />
            <h2>Hello Practitioners. Welcome.
            <br></br>
            Meet Your New Home. </h2>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                // style={{background: 'black'}}
                >
                {praktices.map((praktice, index) => {
                    return(
                        <div className="praktice" key={index} style={{position: 'relative', boxShadow: `0px 3px 15px rgba(0,0,0,0.4)`, paddingBottom: `1rem`, borderRadius: `2rem`}}>
                            <a href={praktice.image.asset.fixed.src} target="-blank">
                                <Img fluid={praktice.image.asset.fluid} style={{height: Math.random() * (500 - 200) + 200, borderRadius: `1rem`}} />
                            </a>
                        </div>
                    )
                })}
            </Masonry>
            <div style={{paddingTop: `2rem`}}>
                <Contact />
            </div>
            <Footer />
        </Container>
    )
}

export default Studio

export const query = graphql`
query {
    studio: allSanityStudio {
      nodes{
        title
        details {
            _rawChildren
        }
        image{
            asset{
                fluid(maxWidth: 400){
                    ...GatsbySanityImageFluid
                }
                fixed(width: 1000) {
                    src
                }
            }
        }
      }
    }
  }
`