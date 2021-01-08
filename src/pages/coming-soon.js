import React from 'react'
import Header from '../components/header';
import Logo from '../components/logo';

const ComingSoon = () => {
    return (
        <>
            <Header />
            <Logo />
            <h1 style={{width: '100%', textAlign: 'center'}}>This Will Be Coming Soon!</h1>
            <h3 style={{width: '100%', textAlign: 'center'}}>In the meantime, sign up for our email list for updates.</h3>
        </>
    )
}

export default ComingSoon