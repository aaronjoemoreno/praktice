import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import Logo from '../components/logo'

const Container = styled.div`
    width: 100%;
    text-align: center;
`

const Card = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 5rem;
    margin-top: 7rem;
    margin-bottom: 4rem;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    grid-template-columns: 1fr;
    text-align: center;
    justify-content: center;
    height: 450px;

    input, textarea{
        width: 50%;
        margin: 0 auto;
        min-height: 2rem;
        font-size: 2rem;
        margin: 1rem;
        border: .5px solid var(--main-color);
    }

    p{
        font-size: 2rem;
    }

    p span{
        text-decoration: underline var(--secondary-color);

        &:hover{
            cursor: pointer;
        }
    }

    h4:hover{
        cursor: pointer;
    }

    button{
        display: block;
        margin: 0 auto;
        font-size: 2rem;
        width: 20rem;
        height: 5rem;
        line-height: 4rem;
        border-radius: 2.5rem;
        border: none;
        background: var(--secondary-color);
        color: var(--white-color);

        &:hover{
            cursor: pointer;
            opacity: .7;
        }

        @media (max-width: 768px) {
            font-size: 2rem;
            width: 10rem;
            height: 5rem;
            line-height: 4rem;
        }
    }
`

const Members = () => {
    const [newMember, setNewMember] = useState(true)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    useEffect(() => {
        if(password !== confirmPassword){
            setErrors(true);
            console.log('passwords do not match')
        }
    }, [password])


    return (
        <>
        <Container>
            <Header />
            <Logo />

            {newMember &&
                <Card>
                    <h1>Sign Up and join our Pra<span style={{color: "var(--secondary-color)"}}>k</span>tices</h1>

                    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="text" name="name" placeholder="name"/>
                        <input type="email" name="email" placeholder="email"/>
                        <input type="tel" name="phone" placeholder="phone"/>
                        <input type="password" name="phone" placeholder="password" onKeyUp={(e) => setPassword(e.target.value) }/>
                        <input type="password" name="phone" placeholder="confirm password" onKeyUp={(e) => setConfirmPassword(e.target.value)}/>
                        <button type="submit">Send</button>
                    </form>
                    <p>have an account? <span onClick={() => setNewMember(false)}>sign in</span></p>
                </Card>
            }

            {!newMember &&
                <Card>
                <h1>Member Sign In</h1>
                    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="email" name="email" placeholder="email"/>
                        <input type="password" name="phone" placeholder="password"/>
                        <button type="submit">Send</button>
                        <h4 style={{color: 'var(--secondary-color)'}}>Forgot your password?</h4>
                    </form>
                    <p>don't have an account? <span onClick={() => setNewMember(true)}>sign up</span></p>
                </Card>
            }
        </Container>



        </>
    )
}

export default Members