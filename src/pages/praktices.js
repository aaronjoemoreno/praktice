import React from 'react'
import Header from '../components/header'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Container = styled.div`
    text-align: center;
    margin: 0 auto;

    .details{
        width: 80%;
        margin: 0 auto;
    }

    .praktices{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        padding: 2rem;
    }

`

const Praktices = ({data}) => {

    const praktices = data.praktices.nodes;

    console.log(praktices);

    return (
        <Container>
            <Header />
            <div className="details">
                <h2>If you do not see your Praktice <Link to="/contact">Contact Us!</Link></h2>
                <h3>PRAKTICE is designated to serve practitioners for Solo session or with one or two Customers Virtual Instruction: Live or, prerecorded - Photoshoots - Consultations</h3>
            </div>

            <div className="praktices">
                {praktices.map(praktice => {
                    return(
                        <div className="praktice" key={praktice.title}>
                            <Img fluid={praktice.image.asset.fluid}/>
                            <h1>{praktice.title}</h1>
                        </div>
                    )
                })}
            </div>
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


