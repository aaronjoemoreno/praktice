import React, { useState, useEffect } from 'react'
import { navigate } from "gatsby"
import styled from 'styled-components'
import Header from '../components/header'
import Logo from '../components/logo'
import Scheduler from '../components/scheduler'
import { handleLogin, isLoggedIn } from "../services/auth"
// import Firebase from '../components/Firebase/firebase'
// import FirebaseState from '../components/Firebase/FirebaseState'
// import { navigate } from 'gatsby'

const Container = styled.div`
    width: 100%;
    height: 100%;
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
    min-height: 1400px;

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
        padding-bottom: 2rem;
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
    }

        @media (max-width: 768px) {
            font-size: 2rem;
            width: 100%;
            height: 5rem;
            line-height: 4rem;
        }
    `

    const SignInCard = styled.div`
        width: 80%;
        margin: 0 auto;
        padding-top: 2rem;
        margin-top: 7rem;
        margin-bottom: 4rem;
        box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
        grid-template-columns: 1fr;
        text-align: center;
        justify-content: center;
        min-height: auto;

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
            padding-bottom: 2rem;
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
        }

        @media (max-width: 768px) {
            font-size: 2rem;
            height: auto;
            line-height: 4rem;
            width: 90%;
        }
    `

const Members = () => {
    //TODO - LOOK AT REFS
    const [newMember, setNewMember] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [errors, setErrors] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleLogin({username: email, password })

        // Firebase.auth().signInWithEmailAndPassword(email, password)
        // .then(res => {
        //     console.log(res);
        //     navigate("/members/dashboard")
        // })
        // .catch((err) => {
        //     setErrors("username or password is incorrect")
        //     console.warn(err);

        //     setTimeout(() =>{
        //         setErrors('')
        //     },4000)
        // });
    }

    // useEffect(() => {
    //     if (isLoggedIn()) {
    //         navigate(`/dashboard`)
    //     }
    // }, [])

    return (
        <>
            {/* <FirebaseState> */}
                <Container>
                    <Header />
                    <Logo />

                    {newMember &&
                        <Card>
                            <h1>Sign Up and join our Pra<span style={{color: "var(--secondary-color)"}}>k</span>tices</h1>

                            <h3>First Step, Set up a visit with us...</h3>
                            <Scheduler />
                            <p>have an account? <span onClick={() => setNewMember(false)}>sign in</span></p>
                        </Card>
                    }

                    {!newMember &&
                        <SignInCard>
                        {errors &&
                            <div className='errors'>
                                <h2>{errors}</h2>
                            </div>
                        }
                        <h1>Member Sign In</h1>
                            <form onSubmit={handleSubmit}>
                                <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                                <input type="password" placeholder="password" onChange={(e) => setpassword(e.target.value)}/>
                                <button type="submit" onClick={handleSubmit} >Send</button>
                                <h4 style={{color: 'var(--secondary-color)'}}>Forgot your password?</h4>
                            </form>
                            <p>don't have an account? <span onClick={() => setNewMember(true)}>sign up</span></p>
                        </SignInCard>
                    }
                </Container>
            {/* </FirebaseState> */}
        </>
    )
}

export default Members