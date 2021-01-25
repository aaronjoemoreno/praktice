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
    width: 80%;

    .details{
        width: 80%;
        margin: 0 auto;
    }

    .my-masonry-grid{
        background: white;
    }

    .praktices{
        display: grid;
        grid-column-gap: 10rem;
        grid-template-columns: repeat(2, 1fr);
    }

    .praktice img{
        border-radius: 1rem;
    }
`

const BookingContainer = styled.div`
    width: 70%;
    margin: 0 auto;
    text-align: center;

    h2{
        text-align: left;
        padding-left: 5rem;
    }

    ul{
        font-size: 1.5rem;
        list-style: none;
        text-align: left
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
                                <h3 style={{color: `var(--main-color)`}}>{praktice.title}</h3>
                            </Link>
                        </div>
                        </>
                    )
                })}
            </Masonry>

            <BookingContainer>
                <h2>Application Process</h2>
                <ul>
                    <li>1.	A tour in the studio, virtually or in person before booking is required. </li>
                    <li>2.	Following your tour, you will receive a one-time code to open your profile on our members and booking platform. </li>
                    <li>3. In our booking platform you can upload your professional certification or license and a certificate of insurance for review . </li>
                    <li>4.	Review and sign our agreement and waiver forms. </li>
                    <li>5. We will request that you add PRAKTICE LLC as the additional Insured to your COI.</li>
                    <li>6. Congrat! You can now book PRAKTICE </li>
                </ul>


            </BookingContainer>


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