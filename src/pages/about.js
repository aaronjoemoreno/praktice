import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import Logo from '../components/logo'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    text-align: center;
`

const About = () => {
    return (
        <Container>
            <Header />
            <Logo />
           <h1>ABOUT Us Coming Soon...</h1>
        </Container>
    )
}

export default About
