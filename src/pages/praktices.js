import React from 'react'
import Header from '../components/header'
import Logo from '../components/logo'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-css'
import './praktices.css'

const Container = styled.div`
    text-align: center;
    margin: 0 auto;

    .details{
        width: 80%;
        margin: 0 auto;
    }

    .my-masonry-grid{
        background: black;
    }

    .praktices{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        padding: 2rem;
    }

    .praktice img{
        /* border-radius: .5rem; */
    }
`

const Praktices = ({data}) => {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };
    const praktices = data.praktices.nodes;

    // console.log(praktices);

    return (
        <Container>
            <Header />
            <Logo />
            <div className="details" style={{maxWidth: "60%", paddingBottom: '5rem'}}>
                <h3>If you do not see your Praktice <Link to="/contact">Contact Us!</Link></h3>
                <h3>PRAKTICE is designated to serve practitioners for Solo session or with one or two Customers Virtual Instruction: Live or, prerecorded - Photoshoots - Consultations</h3>
            </div>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                // style={{background: 'black'}}
                >
                {praktices.map(praktice => {
                    return(
                        <>
                        <div className="praktice" key={praktice.title} style={{position: 'relative'}}>
                            <Link to="/contact">
                                <Img fluid={praktice.image.asset.fluid} style={{height: Math.random() * (500 - 200) + 200}} />
                                <h3 style={{position: 'absolute', top: 0, left: '5px', background: 'red', color: 'white'}}>{praktice.title}</h3>
                            </Link>
                        </div>
                        </>
                    )
                })}
            </Masonry>
        </Container>
    )
}

export default Praktices

export const query = graphql`
query data {
    praktices: allSanityPraktices {
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
            }
        }
      }
    }
  }
`