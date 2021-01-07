import React from "react"
import SEO from "../components/seo"
import Header from '../components/header'
import { Contact as ContactComponent } from '../components/contact'
import Logo from '../components/logo'

const Contact = () => {
    return (
        <>
            <SEO title="Praktice" />
            <Header />
            <Logo />
            <ContactComponent />
        </>
    )
}

export default Contact