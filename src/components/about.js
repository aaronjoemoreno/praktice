import React from 'react'
import Faq from '../components/Faq'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    width: 80%;
    margin: 0 auto;
    border-top: 1px solid black;
    text-align: center;
    padding-bottom: 5rem;

    p{
        font-size: 2rem;

    }

    q{
      font-size: 2rem;
      font-style: italic;
      border-left: 2px solid var(--secondary-color);
    }

    .values h3{
        margin-top: 2rem;
    }

    .values, .mission{
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

    .main-logo{
      width: 50%;
    }

    .about-vision{
        margin: 0 auto;
    }

    .active{
      background: var(--secondary-color);
      color: var(--white-color);
    }

    @media (max-width: 768px) {
      .main-logo{
        width: 100%;
      }

      .values, .mission{
        grid-template-columns: repeat(1, 1fr);
      }

      .values{
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-orient: vertical;
        -moz-box-orient: vertical;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        /* optional */
        -webkit-box-align: start;
        -moz-box-align: start;
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;

        p{
          -webkit-box-ordinal-group: 2;
          -moz-box-ordinal-group: 2;
          -ms-flex-order: 2;
          -webkit-order: 2;
          order: 2;
        }

        .values-logo{
          -webkit-box-ordinal-group: 1;
          -moz-box-ordinal-group: 1;
          -ms-flex-order: 1;
          -webkit-order: 1;
          order: 1;
        }
      }

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
        values: allImageSharp(filter: {fluid: {originalName: {eq: "values.jpg"}}}) {
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
          why: allImageSharp(filter: {fluid: {originalName: {eq: "why.jpg"}}}) {
            edges {
              node {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          faq: allImageSharp(filter: {fluid: {originalName: {eq: "faq.jpg"}}}) {
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
            <p>PRAKTICE is a private wellness studio designed to empower trainers and practitioners. Our unique and versatile space allows professionals to work privately and independently with their clients to establish themselves as authorities in their fields.</p>
            <p>Our 150 square foot studio is paved with interlocking rubber tiles and comes equipped with stall wall bars, polymetric stacks, stability balls, TRX, medicine balls, a dumbbell rack, a stretching table, and more accessories that will afford you the flexibility to train your clients in different modalities. </p>

            <Img fluid={data.about.edges[0].node.fluid} className="main-logo" alt="praktice logo" style={{margin: `0 auto`}}/>

            <q>Practice makes perfect. 
            After a long time of practicing, our work will become natural, skillful, swift, and steady.
            </q>
            <p>Bruce Lee</p>

            <p>PRAKTICE strives to be an incubator that puts the needs of the practitioner first.  While practitioners are the key players affecting lives in the health and fitness industry, their concerns are often not considered by the institutions through which they work.</p>

            <p>Praktice And Covid 19<br />
            One of the reasons you train your clients at PRAKTICE is for the privacy and seclusion that cannot be found at most fitness centers.  We are committed to keep an exclusive and germ free zone to insure the safety of our practitioners and their clients.  The PRAKTICE studio is equipped with a Molekule Pro air purifier.  We allow ten minute intervals between sessions for cleaning, ventilation and sanitization.  In addition, each practitioner is required to wipe down all equipment before and after use and wearing masks during training sessions is required.
            </p>

            <Img fluid={data.why.edges[0].node.fluid} className="main-logo" alt="why" style={{width: `100%`}}/>

            <p>Why PRAKTICE?<br />
            PRAKTICE  is a private space which allows you to stay focused on your goals, eliminating the all so common distractions we experience when we work in large scale wellness spaces such as gyms and cross fit spaces.
            </p>

            <div className="about-vision" style={{borderTop: '1px solid black'}}>
                <h2 style={{textAlign: 'left'}}>Our Values:</h2>
                <div className="values">
                    <p style={{textAlign: 'left'}}>KINDNESS in our COMMUNICATION towards our fellow practitioners and customers which will create a steadfast PROFESSIONAL path of mutual GROWTH, increasing KNOWLEDGE and ETHICS</p>

                    <Img fluid={data.values.edges[0].node.fluid} className="values-logo" alt="values" style={{width: `100%`}}/>
                </div>

                <h2 style={{textAlign: 'right'}}>Our Mission:</h2>
                <div className="mission">
                    <Img fluid={data.mission.edges[0].node.fluid} className="main-logo" alt="mission" style={{width: `100%`}}/>

                    <p style={{textAlign: 'right'}}>PRAKTICE  will work to create a powerful community of Independent professional practitioners which can help, who can enrich each other and grow together by establishing a network of knowledge, clients, methodologies, ideas and collaborations.</p>
                </div>
                <p>This is why from today onward each certified and insured practitioner can use PRAKTICE to flourish, influence and break boundaries with their customers, on their own, or with colleagues.</p>

                <p>Rent by the hour<br />
                Help their customers deal with their Self Image which is the hardest obstacle for new ppl try to work out when they go to a shared space.
                </p>
            </div>

          <Img fluid={data.faq.edges[0].node.fluid} className="faq" alt="faq" style={{width: `100%`}}/>
          <Faq />
        </Container>
    )
}

export default About