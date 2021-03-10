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

    .quote{
      padding: 2rem 0 2rem 0;

      q{
        font-size: 2rem;
        font-style: italic;
        border-left: 2px solid var(--secondary-color);
      }

      .quote-img{
        margin: 0 auto;
        border-radius: 2.5rem;
        width: 70%;
      }
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

    .quote{
      border-top: 1px solid var(--main-color)
    }

    @media (max-width: 1080px) {

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
          top: 160px !important;
          right: 5px !important;
          font-size: 4.5rem !important;
        }
      }
    }


    @media (max-width: 470px) {
      .mission{
        h2{
          top: 210px !important;
        }
      }
    }


    @media (max-width: 410px) {
    }
`

const CovidContainer = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;
  margin-top: 2rem;
  border-top: 1px solid var(--main-color);
  border-bottom: 1px solid var(--main-color);
  padding: 4rem 0 4rem 0;

  .images{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1260px) {
    padding: 4rem 0 1rem 0;

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
          topSection: sanityAbout(title: {eq: "Top Section"}) {
            body {
              children {
                text
              }
            }
          }
          middleSection: sanityAbout(title: {eq: "Middle Section"}) {
            body {
              children {
                text
              }
            }
          }
          covid: sanityAbout(title: {eq: "Covid Section"}) {
            body {
              children {
                text
              }
            }
          }
          valuesSection: sanityAbout(title: {eq: "Values Section"}) {
            body {
              children {
                text
              }
            }
          }
          missionSection: sanityAbout(title: {eq: "Mission Section"}) {
            body {
              children {
                text
              }
            }
          }
        }
  `)

  const { body } = data.topSection;
  const middleSection = data.middleSection.body[0].children[0].text;
  const covid = data.covid.body[0].children[0].text;
  const values = data.valuesSection.body[0].children[0].text;
  const mission = data.missionSection.body[0].children[0].text;

    return (
        <Container>
            <h1>ABOUT</h1>
            <p>{body[0].children[0].text}</p>
            <br/>
            <br/>
            <p>{body[2].children[0].text}</p>

            <div style={{paddingBottom: `2rem`}}>
              {img &&

                  <Img fluid={img.about.edges[0].node.fluid} className="main-logo" alt="pilates" style={{margin: `0 auto`, borderRadius: `2.5rem`, marginTop: `4rem`, marginBottom: `4rem`}}/>
              }

              {!img &&
                <Img fluid={data.pilates.edges[0].node.fluid} className="main-logo" alt="pilates" style={{margin: `0 auto`, borderRadius: `2.5rem`, marginTop: `4rem`, marginBottom: `4rem`}}/>
              }

              <p style={{paddingBottom: `4rem`}}>{middleSection}</p>
              {img &&
                  <Button text="Contact Us" clickedButton={() => navigate('/contact')}/>
              }

            </div>

            {!img &&

            <div className="quote">
              <q>Practice makes perfect. 
              After a long time of practicing, our work will become natural, skillful, swift, and steady.
              </q>
              <br></br>
              <br></br>
              <p>Bruce Lee</p>
              <Img fluid={data.about.edges[0].node.fluid} className="quote-img" alt="praktice logo" />
            </div>

            }

            <CovidContainer>
              <h2>COVID 19 - KEEPING SAFE </h2>
              <div className="images">
                <Img fluid={data.sanitize.edges[0].node.fluid} className="main-logo" alt="sanitize" style={{margin: `0 auto`, borderRadius: `2.5rem`, marginTop: `4rem`, marginBottom: `4rem`}}/>

                <p id="covid">{covid}</p>

                <Img fluid={data.molekule.edges[0].node.fluid} className="main-logo" alt="molekule" style={{margin: `0 auto`, borderRadius: `2.5rem`, marginTop: `4rem`, marginBottom: `4rem`, width: `30%`}}/>
              </div>
            </CovidContainer>

            <div style={{borderBottom: `2px solid var(--main-color)`, padding: `4rem 0 4rem 0`}} className="value">
              <div style={{position: `relative`}}>
                <Img fluid={data.why.edges[0].node.fluid} className="main-logo" alt="mission" style={{width: `100%`, borderRadius: `2.5rem`, height: `300px`, marginTop: `2rem`, marginBottom: `4rem`}}/>
                <h2 style={{position: `absolute`, top: `0px`, right: `50px`, fontSize: `6rem`, color: `var(--white-color)`}}>Our Values</h2>
              </div>
              <p id="values">{values}</p>
            </div>

            <div style={{borderBottom: `2px solid var(--main-color)`, padding: `4rem 0 4rem 0`}} className="mission">
              <div style={{position: `relative`}}>
                <Img fluid={data.mission.edges[0].node.fluid} className="main-logo" alt="mission" style={{width: `100%`, borderRadius: `2.5rem`, height: `300px`, marginTop: `2rem`, marginBottom: `4rem`}}/>
                <h2 style={{position: `absolute`, top: `100px`, right: `50px`, fontSize: `6rem`, color: `var(--white-color)`, marginBottom: `4rem`}}>Our Mission</h2>
              </div>
              <p id="mission">{mission}</p>
            </div>
        </Container>
    )
}

export default About