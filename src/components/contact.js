import React, { useState } from 'react'
import styled from 'styled-components'
import Scheduler from './scheduler'

const AboutContainer = styled.div`
    width: 80%;
    height: 1000px;
    margin: 0 auto;
    padding-top: 15rem;
    text-align: center;

    .tabs{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        text-align: center;
    }

    .tab{
        font-size: 2rem;
        background: var(--main-white);
        border: .2px solid var(--main-color);
    }

    .tab:hover{
        background: var(--secondary-color);
        color: white;
        cursor: pointer;
    }

    .selected{
        background: var(--secondary-color);
        color: white;
    }
`

const Email = styled.div`
    width: 100%;
    padding-top: 5rem;
    grid-template-columns: 1fr;
    text-align: center;
    justify-content: center;

    input, textarea{
        width: 50%;
        margin: 0 auto;
        min-height: 2rem;
        font-size: 2rem;
        margin: 1rem;
        border: .5px solid var(--main-color);
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
`

const Contact = () => {
    const [tab, setTab] = useState('email');

    const contactTab = (e) =>{
        e.preventDefault()
        setTab(e.currentTarget.value)
    }

return (
        <AboutContainer id="contact">
            <h1>Contact</h1>
            <div className="tabs">
                <button className="email tab" value="email" onClick={contactTab}>Email</button>
                <button className="schedule tab" value="schedule" onClick={contactTab}>Schedule</button>
                <button className="call tab" value="call" onClick={contactTab}>Call</button>
            </div>

            {tab === 'email' &&
                <Email>
                    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="text" name="name" placeholder="name"/>
                        <input type="email" name="email" placeholder="email"/>
                        <textarea name="message" placeholder="message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </Email>
            }

            {tab === 'schedule' &&
                <Scheduler />
            }

            {tab === 'call' &&
                <h2>Tel: <a href="tel:347-599-2832" style={{textDecoration: 'none'}}>347-599-2832</a></h2>
            }
        </AboutContainer>
    )
}
export default Contact;
