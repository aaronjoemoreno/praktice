import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid var(--main-color);

    h2{
        text-align: left;
        padding-left: 5rem;
    }

    ul{
        font-size: 1.7rem;
        list-style: none;
        text-align: left
    }

    img{
        border-radius: 1rem;
        margin-top: 2rem;
    }
`

const ApplicationProcess = () => {
    const data = useStaticQuery(graphql`
    query{
      schedule: allImageSharp(filter: {fluid: {originalName: {eq: "schedule.jpg"}}}) {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      yoga: allImageSharp(filter: {fluid: {originalName: {eq: "yoga.jpg"}}}) {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      site {
        siteMetadata {
          description,
          details
        }
      }
    }
  `)


    return (
        <Container>
                <Img fluid={data.schedule.edges[0].node.fluid}     className="header-img-profile" alt="schedule"/>
                <h2>Application Process</h2>
                <ul>
                    <li>1.	A tour in the studio, virtually or in person before booking is required. </li>
                    <li>2.	Following your tour, you will receive a one-time code to open your profile on our members and booking platform. </li>
                    <li>3. In our booking platform you can upload your professional certification or license and a certificate of insurance for review . </li>
                    <li>4.	Review and sign our agreement and waiver forms. </li>
                    <li>5. We will request that you add PRAKTICE LLC as the additional Insured to your COI.</li>
                    <li>6. Congrat! You can now book PRAKTICE </li>
                </ul>

                <Img fluid={data.yoga.edges[0].node.fluid}     className="yoga" alt="yoga"/>
            </Container>
    )
}

export default ApplicationProcess
