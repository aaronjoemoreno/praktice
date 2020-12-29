import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    border-top: 1px solid black;
    text-align: center;

    p{
        font-size: 2rem;
    }
`


const About = () => {
    return (
        <Container>
            <h1>ABOUT</h1>
            <p>PRAKTICE  is a private wellness studio designed to empower trainers and practitioners. Our unique and versatile space allows professionals to work privately and independently with their clients to establish themselves as authorities in their fields.</p>
            <p>PRAKTICE strives to be an incubator that puts the needs of the practitioner first.  While practitioners are the key players affecting lives in the health and fitness industry, their concerns are often not considered by the institutions through which they work.</p>
        </Container>
    )
}

export default About