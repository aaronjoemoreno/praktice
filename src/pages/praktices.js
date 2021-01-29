import React from 'react'
import Header from '../components/header'
import Logo from '../components/logo'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-css'
import ApplicationProcess from '../components/applicationProcess'
import Button from '../components/button'
import './praktices.css'

const Container = styled.div`
    text-align: center;
    margin: 0 auto;
    width: 80%;

    .details{
        width: 80%;
        margin: 0 auto;
    }

    .my-masonry-grid{
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

const Praktices = ({data}) => {
    const breakpointColumnsObj = {
        default: 2,
        1100: 2,
        700: 2,
        500: 1
      };
    const praktices = data.praktices.nodes;

    return (
        <Container>
            <Header />
            <h2>Hello Practitioners. Welcome.
            <br></br>
            Meet Your New Home. </h2>
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
                {praktices.map((praktice, index) => {
                    return(
                        <div className="praktice" key={index} style={{position: 'relative', boxShadow: `0px 3px 15px rgba(0,0,0,0.4)`, paddingBottom: `.3rem`, borderRadius: `2rem`}}>
                            <Link to="/contact">
                                <Img fluid={praktice.image.asset.fluid} style={{height: Math.random() * (500 - 200) + 200, borderRadius: `1rem`}} />
                                <h3 style={{color: `var(--main-color)`}}>{praktice.title}</h3>
                            </Link>
                        </div>
                    )
                })}
            </Masonry>
            <div className="button">
                <Link to="/contact">
                    <Button text="Contact Us"/>
                </Link>
            </div>
            <ApplicationProcess />
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