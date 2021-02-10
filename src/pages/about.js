import React from 'react'
import styled from 'styled-components'
import { graphql, navigate} from 'gatsby'
import Header from '../components/header'
import Logo from '../components/logo'
import Faq from '../components/faq'
import Button from '../components/button'
import Footer from '../components/footer'
import { default as AboutComponent } from '../components/about'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    text-align: center;

    .quote{
        margin-top: 2rem;
        padding: 0rem 0 2rem 0;

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

      p{
      margin: 0 auto;
      font-size: 2rem;
      width: 80%;
    }
    }
`

const About = ({ data }) => {
    return (
        <Container>
            <Header />
            <Logo />
                <div className="quote">
                    <q>Practice is a means of inviting the perfection desired.</q>
                    <br></br>
                    <br></br>
                    <p>Martha Graham</p>
                </div>
            <AboutComponent img={data}/>
            <Faq />
            <Button text="Contact Us" clickedButton={() => navigate('/contact')}/>
            <Footer />
        </Container>
    )
}

export default About

export const query = graphql`
    query {
        about: allImageSharp(filter: {fluid: {originalName: {eq: "condition.jpg"}}}) {
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