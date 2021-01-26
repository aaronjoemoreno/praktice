import React from 'react'
import styled from 'styled-components'
import Logo from '../components/logo'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'


const Container = styled.div`
    width: 100%;
    padding-top: 10rem;
    margin-top: 5rem;


    a{
        color: var(--main-color);
        width: 100px;
        margin: 0 auto;
    }
`

const LogoBorder = styled.div`
    width: 100%;
    border-top: 1px solid var(--main-color);
    padding-top: 4rem;
`
const LinkContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    overflow: hidden;

    .left, .right{
        display: grid;
        grid-template-columns: 1;
        grid-template-rows: repeat(2, 1fr);
    }

    .center{
        display: grid;
        padding-top: 3rem;
        grid-template-columns: repeat(2, 1fr);


        .social-img{
            margin: 0 auto;
            width: 60px;
        }

        /* h3{
            margin: 0 auto;
            width: 100px;
            height: 100px;
            line-height: 100px;
            border-radius: 100px;
            border: 1px solid var(--main-color);
        } */
    }

    @media (max-width: 768px) {
        width: 100%;

        .center{
            padding-top: 3rem;
            h3{
                width: 50px;
                height: 50px;
                line-height: 50px;
                border-radius: 50px;
            }
        }
    }
`

const LocationContainer = styled.div`
    width: 100%;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
`

const Footer = () => {
    const data = useStaticQuery(graphql`
    query{
      twitter: allImageSharp(filter: {fluid: {originalName: {eq: "twitter.png"}}}) {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      instagram: allImageSharp(filter: {fluid: {originalName: {eq: "instagram.png"}}}) {
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
            <LogoBorder >
                <Logo />
            </LogoBorder>
            <LinkContainer>
                <div className="left">
                    <Link to="/contact">
                        <h3>Contact</h3>
                    </Link>
                    <Link to="/praktices">
                        <h3>Pra<span style={{color: `var(--secondary-color)`}}>k</span>tices</h3>
                    </Link>
                </div>
                <div className="center">
                <div className="social-img">
                    <a href="https://twitter.com/prakticel" target="_blank">
                        <Img fluid={data.twitter.edges[0].node.fluid} alt="twitter"/>
                    </a>
                </div>
                <div className="social-img">
                    <a href="https://instagram.com/praktice.nyc" target="_blank">
                        <Img fluid={data.instagram.edges[0].node.fluid} alt="instagram"/>
                    </a>
                </div>
                </div>
                <div className="right">
                    <Link to="/about">
                        <h3>About</h3>
                    </Link>
                    <Link to="/members">
                        <h3>Members</h3>
                    </Link>
                </div>
            </LinkContainer>
            <LocationContainer>
                <h4>{new Date().getFullYear()}</h4>
                <h4>Praktice LLC</h4>
                <h4>117 Dobbin street Brooklyn New York 11222</h4>
                <h4>Tel: 646-399-1477</h4>
            </LocationContainer>
        </Container>
    )
}

export default Footer