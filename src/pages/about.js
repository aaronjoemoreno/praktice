import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import Logo from '../components/logo'
import { default as AboutComponent } from '../components/about'

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
            <AboutComponent/>
        </Container>
    )
}

export default About
