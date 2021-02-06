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
        width: 50%;
        margin: 0 auto;
        padding: 2rem;
        p{
          padding: 2rem;
        }
      }
`

const About = ({ data }) => {
    return (
        <Container>
            <Header />
            <Logo />
            <div className="quote">
                <q style={{fontSize: `2.5rem`, fontWeight: `100`, color: `var(--grey-color)`, borderLeft: `2px solid var(--secondary-color)`, padding: `1rem`}}>Practice is a means of inviting the perfection desired.</q><br></br>
                <p style={{fontSize: `1.5rem`}}>Martha Graham</p>
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