import React from "react"
import SEO from "../components/seo"
import Header from '../components/header'
import { Contact as ContactComponent } from '../components/contact'
import Logo from '../components/logo'
import Footer from '../components/footer'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ContactContianer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding-bottom: 8rem;

    .details{
        margin-top: 2rem;
        background: #F4F4F4;
        height: auto;
        padding-right: 5rem;

        ul{
            padding-inline-start: 0px;
            padding-inline-end: 20px;
        }

        h3{
            text-align: left;
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;

        .details{
            margin-top: 4rem;
        }
    }
`

const Contact = ({ data }) => {
    console.log(data);
    return (
        <>
            <SEO title="Praktice" />
            <Header />
            <Logo />
            <ContactContianer>
                <ContactComponent />
                <div className="details">
                    <ul>
                        <h3>Praktice LLC </h3>
                        <h3>Open 24/7 for Practitioners</h3>
                        <br></br>
                            <h3>
                            Address:
                            <br></br>
                            117 Dobbin Street, Brooklyn New York 11222
                            </h3>
                        <br></br>
                            <h3>
                            Office Hours:
                            <br></br>
                            Every day
                            <br></br>
                            9am - 6pm
                            <br></br>
                            Email: contact@praktice.nyc
                            </h3>
                    </ul>
                </div>
            </ContactContianer>
            <Img fluid={data.contact.edges[0].node.fluid} className="header-img-profile" alt="male trainer" style={{ margin: `0 auto`, borderRadius: `2.5rem`, width: `80%`, height: `400px` }}/>
            <Footer />
        </>
    )
}

export default Contact


export const query = graphql`
    query {
        contact: allImageSharp(filter: {fluid: {originalName: {eq: "athletic.jpg"}}}) {
            edges {
            node {
                fluid {
                ...GatsbyImageSharpFluid
                }
            }
            }
        }
    }
`