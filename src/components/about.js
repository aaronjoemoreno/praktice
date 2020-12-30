import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    width: 80%;
    margin: 0 auto;
    border-top: 1px solid black;
    text-align: center;

    p{
        font-size: 2rem;
    }

    .integrity h3{
        margin-top: 2rem;
    }

    .integrity, .mission{
        display: grid;
        width: 100%;
        max-width: 1000px;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 5rem;
        padding-bottom: 2rem;
    }
    h3{
        text-decoration: underline;
    }

    .about-vision{
        margin: 0 auto;
    }
`

const About = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        about: allImageSharp(filter: {fluid: {originalName: {eq: "about.jpg"}}}) {
            edges {
              node {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
        }
        integrity: allImageSharp(filter: {fluid: {originalName: {eq: "integrity.jpg"}}}) {
            edges {
              node {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
        }
        mission: allImageSharp(filter: {fluid: {originalName: {eq: "mission.jpg"}}}) {
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

    return (
        <Container>
            <h1>ABOUT</h1>
            <p>PRAKTICE  is a private wellness studio designed to empower trainers and practitioners. Our unique and versatile space allows professionals to work privately and independently with their clients to establish themselves as authorities in their fields.</p>
            <p>PRAKTICE strives to be an incubator that puts the needs of the practitioner first.  While practitioners are the key players affecting lives in the health and fitness industry, their concerns are often not considered by the institutions through which they work.</p>

            <Img fluid={data.about.edges[0].node.fluid} className="main-logo" alt="praktice logo" style={{width: `50%`, margin: `0 auto`}}/>

            <p>This is why from today onward each certified and insured practitioner can use PRAKTICE to flourish, influence and break boundaries with their customers, on their own, or with colleagues. </p>

            <p>Rent by the hour <br />
            Help their customers deal with their Self Image which is the hardest obstacle for new ppl try to work out when they go to a shared space. </p>

            <div className="about-vision" style={{borderTop: '1px solid black'}}>
                <h2 style={{textAlign: 'left'}}>Our Values:</h2>
                <div className="integrity">
                    <p style={{textAlign: 'left'}}>KINDNESS in our COMMUNICATION towards our fellow practitioners and customers which will create a steadfast PROFESSIONAL path of mutual GROWTH, increasing KNOWLEDGE and ETHICS</p>

                    <Img fluid={data.integrity.edges[0].node.fluid} className="main-logo" alt="integrity" style={{width: `100%`}}/>
                </div>

                <h2 style={{textAlign: 'right'}}>Our Mission:</h2>
                <div className="mission">
                    <Img fluid={data.mission.edges[0].node.fluid} className="main-logo" alt="mission" style={{width: `100%`}}/>
                    <p style={{textAlign: 'right'}}>PRAKTICE  will work to create a powerful community of Independent professional practitioners which can help, who can enrich each other and grow together by establishing a network of knowledge, clients, methodologies, ideas and collaborations.</p>
                </div>
            </div>

        </Container>
    )
}

export default About