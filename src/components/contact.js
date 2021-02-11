import React, { useState } from 'react'
import styled from 'styled-components'
import Scheduler from './scheduler'

const Container = styled.div`
    width: 80%;
    height: auto;
    margin: 0 auto;
    text-align: center;

    .tabs{
        width: 80%;
        margin: 0 auto;
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(3, 1fr);
        text-align: center;
    }

    .tab{
        font-size: 2rem;
        height: 40px;
        background: var(--main-white);
        border: .2px solid var(--main-color);
        border-radius: 2.5rem;
    }

    .tab:hover{
        background: var(--secondary-color);
        color: white;
        cursor: pointer;
    }

    .active{
        background: var(--secondary-color);
        color: var(--white-color);
    }

    @media (max-width: 768px) {
        width: 90%;

        .tabs{
            width: 70%;
            grid-gap: 1rem;
    }

        .tab{
            font-size: 1.4rem;
            height: 30px;
        }
    }
`

const Email = styled.div`
    width: 100%;
    margin: 0 auto;
    padding-top: 5rem;
    margin-top: 7rem;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    grid-template-columns: 1fr;
    text-align: center;
    justify-content: center;
    height: 400px;

    input, textarea{
        width: 50%;
        margin: 0 auto;
        min-height: 2rem;
        font-size: 2rem;
        margin: 1rem;
        border: .5px solid var(--main-color);
    }

    input:focus{
        background: #F5E9E9;
    }

    .submit{
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

const Call = styled.div`
    width: 100%;
    margin: 0 auto;
    padding-top: 5rem;
    margin-top: 7rem;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    grid-template-columns: 1fr;
    text-align: center;
    justify-content: center;
    height: 170px;

    @media (max-width: 768px) {
        width: 100%;

        .submit{
            background: purple;
        }
    }
`

export const Contact = () => {
    const [tab, setTab] = useState('email');

    const contactTab = (e) =>{
        e.preventDefault()
        setTab(e.currentTarget.value)
    }

return (
        <Container id="contact">
            <h1>Contact Us</h1>
            <div className="tabs">
                <button className={`email tab ${tab == "email" ? "active" : ""}`} value="email" onClick={contactTab}>Email</button>
                <button className={`schedule tab ${tab == "schedule" ? "active" : ""}`} value="schedule" onClick={contactTab}>Tour</button>
                <button className={`call tab ${tab == "call" ? "active" : ""}`} value="call" onClick={contactTab}>Call</button>
            </div>

            {tab === 'email' &&
                <Email>
                    <h2>Send Us a Message:</h2>
                    <form method="post" netlify-honeypot="bot-field" data-netlify="true" data-netlify-recaptcha="true" name="contact">
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="text" name="name" placeholder="Full Name"/>
                        <input type="email" name="email" placeholder="Email"/>
                        <input type="phone" name="email" placeholder="Phone"/>
                        <textarea name="message" placeholder="message"></textarea>
                        <input type="submit" className="submit" placeholder="Submit" />
                    </form>
                </Email>
            }

            {tab === 'schedule' &&
                <Scheduler />
            }

            {tab === 'call' &&
                <Call>
                    <h2>Give Us a Call:</h2>
                    <h2>Tel: <a href="tel:917-945-1287">917-945-1287</a></h2>
                </Call>
            }
        </Container>
    )
}