import React from 'react'
import { useStaticQuery, graphql, navigate } from "gatsby"
import Img from 'gatsby-image'
import Button from './button'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    width: 80%;
    margin: 0 auto;
    border-top: 1px solid black;
    text-align: center;
    padding-top: 2rem;

    p{
      margin: 0 auto;
      font-size: 2rem;
      width: 80%;
    }

    q{
      font-size: 2rem;
      font-style: italic;
      border-left: 2px solid var(--secondary-color);
    }

    h3{
        text-decoration: underline;
    }

    .main-logo{
      width: 80%;
    }

    .about-vision{
        margin: 0 auto;
    }

    .active{
      background: var(--secondary-color);
      color: var(--white-color);
    }

    .pilates{
      border-radius: 2.5rem;
    }

    @media (max-width: 1080px) {
      .quote{
        padding: 5rem;
      }
    }

    @media (max-width: 768px) {
      .main-logo{
        width: 100%;
      }

      .value{
        h2{
          padding: 0 !important;
          margin: 0;
          top: 0 !important;
          right: 10px !important;
          font-size: 5rem !important;
        }
      }

      .mission{
        width: 100%;
        margin: 0 auto;
        padding: 0;

        h2{
          padding: 0 !important;
          margin: 0;
          top: 150px !important;
          right: 10px !important;
          font-size: 5rem !important;
        }
      }

      .quote{
        p{
          padding: 2rem;
        }

        img{
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
      }
    }


    @media (max-width: 470px) {
      .quote{
        padding-bottom: 10rem;
      }
    }


    @media (max-width: 410px) {
      .quote{
        width: 100%;
        padding: 0;

        p{
          margin: 0 auto;
          text-align: center;
          padding-bottom: 5rem;
        }
      }
    }
`

const CovidContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 2rem;
  border-top: 2px solid var(--main-color);
  border-bottom: 2px solid var(--main-color);
  padding: 4rem 0 1rem 0;

  .images{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1260px) {
    .images{
      grid-template-columns: 1fr;
    }
  }
`

const About = ({img}) => {
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
          pilates: allImageSharp(filter: {fluid: {originalName: {eq: "pilates.jpg"}}}) {
            edges {
              node {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          molekule: allImageSharp(filter: {fluid: {originalName: {eq: "molekule.jpg"}}}) {
            edges {
              node {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          sanitize: allImageSharp(filter: {fluid: {originalName: {eq: "sanitize.jpg"}}}) {
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
            <p>PRAKTICE is a private wellness studio designed to empower practitioners. Our unique and versatile space allows practitioners to work privately and independently, or with their clients to establish themselves as authorities in their fields.</p>
            <br/>
            <br/>
            <p>Our studio is a 150 square foot space paved with interlocking rubber tiles and comes equipped with stall wall bars, polymetric stacks, stability balls, TRX, medicine balls, a dumbbell rack, a stretching table, and more accessories that will afford you the flexibility to train your clients in different modalities.
            </p>

            <div style={{paddingBottom: `2rem`}}>
              {img &&

                  <Img fluid={img.about.edges[0].node.fluid} className="main-logo" alt="pilates" style={{margin: `0 auto`, borderRadius: `2.5rem`, marginTop: `4rem`, marginBottom: `4rem`}}/>
              }

              {!img &&
                <Img fluid={data.pilates.edges[0].node.fluid} className="main-logo" alt="pilates" style={{margin: `0 auto`, borderRadius: `2.5rem`, marginTop: `4rem`, marginBottom: `4rem`}}/>
              }

              <p style={{paddingBottom: `4rem`}}>We strive to be an incubator that puts the needs of the practitioner first. While practitioners are the key players affecting the lives, health and fitness industry, their concerns are often not considered by the institutions through which they work.</p>
              {img &&
                  <Button text="Contact Us" clickedButton={() => navigate('/contact')}/>
              }

            </div>

            {!img &&

            <div className="quote" style={{paddingTop: `4rem`}}>
              <q style={{fontSize: `2.5rem`}}>Practice makes perfect. 
              After a long time of practicing, our work will become natural, skillful, swift, and steady.
              </q>
              <p>Bruce Lee</p>

              <Img fluid={data.about.edges[0].node.fluid} className="quote-img" alt="praktice logo" style={{margin: `0 auto`, marginTop: `-100px`,marginBottom: `-100px`, zIndex: `-100`}}/>
            </div>

            }

            <CovidContainer>
              <h2>COVID 19 - KEEPING SAFE </h2>
              <div className="images">
                <Img fluid={data.sanitize.edges[0].node.fluid} className="main-logo" alt="sanitize" style={{margin: `0 auto`, borderRadius: `2.5rem`, marginTop: `4rem`, marginBottom: `4rem`}}/>

                <p>PRAKTICE offers the privacy and seclusion that cannot be found at most wellness centers. We are committed to keep an exclusive and germ free zone to maximize the safety of our practitioners and their clients. PRAKTICE is equipped with a Molekule Pro air purifier.  We allow ten minute intervals between sessions for cleaning, further ventilation and sanitization.  In addition, each practitioner is required to wipe down all equipment before and after use and wearing masks during sessions.
                </p>

                <Img fluid={data.molekule.edges[0].node.fluid} className="main-logo" alt="molekule" style={{margin: `0 auto`, borderRadius: `2.5rem`, marginTop: `4rem`, marginBottom: `4rem`, width: `30%`}}/>
              </div>
            </CovidContainer>

            <div style={{borderBottom: `2px solid var(--main-color)`, padding: `4rem 0 4rem 0`}} className="value">
              <div style={{position: `relative`}}>
                <Img fluid={data.why.edges[0].node.fluid} className="main-logo" alt="mission" style={{width: `100%`, borderRadius: `2.5rem`, height: `300px`, marginTop: `2rem`, marginBottom: `4rem`}}/>
                <h2 style={{position: `absolute`, top: `0px`, right: `50px`, fontSize: `6rem`, color: `var(--white-color)`}}>Our Values</h2>
              </div>
              <p>KINDNESS in our COMMUNICATION towards our fellow practitioners leading to a steadfast GROWTH and cultivating PROFESSIONALISM. We are committed to QUALITY, CONSISTENCY and COURTSEY at all times.
              </p>
            </div>

            <div style={{borderBottom: `2px solid var(--main-color)`, padding: `4rem 0 4rem 0`}} className="mission">
              <div style={{position: `relative`}}>
                <Img fluid={data.mission.edges[0].node.fluid} className="main-logo" alt="mission" style={{width: `100%`, borderRadius: `2.5rem`, height: `300px`, marginTop: `2rem`, marginBottom: `4rem`}}/>
                <h2 style={{position: `absolute`, top: `100px`, right: `50px`, fontSize: `6rem`, color: `var(--white-color)`, marginBottom: `4rem`}}>Our Mission</h2>
              </div>
              <p>PRAKTICE will work to create a powerful community of Independent practitioners which can help and enrich one another and grow together by establishing a network of knowledge, clients, methodologies, ideas and collaborations.
              </p>
            </div>
        </Container>
    )
}

export default About