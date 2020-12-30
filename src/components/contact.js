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
        border: 1px solid var(--main-color);
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

    console.log(tab);

return (
        <AboutContainer>
            <h1>Contact</h1>
            <div className="tabs">
                <button className="email tab" value="email" onClick={contactTab}>Email</button>
                <button className="schedule tab" value="schedule" onClick={contactTab}>Schedule</button>
                <button className="call tab" value="call" onClick={contactTab}>Call</button>
            </div>

            {tab === 'email' &&
                <Email>
                <form name="contact" method="POST" data-netlify="true">
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
                <h2>Call</h2>
            }
        </AboutContainer>
    )
}
export default Contact;
