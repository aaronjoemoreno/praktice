import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    padding: 2rem 0 4rem 0;

    .prices{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
    }

    .card{
        box-shadow: 0px 3px 15px rgba(0,0,0,0.4);
        padding-bottom: .3rem;
        border-radius: 2rem;
        width: 100%;
        padding: 1rem 0 1rem 0;

        .outline{
            margin: 2rem;
            border: 1px solid var(--secondary-color);
            border-radius: 2rem;
        }

        p{
            font-size: 1.8rem;
        }

        .header, .details{
            display: grid;
            width: 100%;
            grid-template-columns: 1fr 1fr;

            h2{
                text-align: center;
                padding: 0;
            }
        }

        .details{
            border-bottom: 1px solid var(--secondary-color);
        }

        .details:last-child{
            border-bottom: none;
        }
    }

    @media (max-width: 814px) {
        .prices{
            grid-template-columns: 1fr;
            grid-gap: 2rem;
        }
    }
`

const Pricing = () => {
    return (
        <Container id="rates">
            <h2>Rates</h2>
            <div className="prices">
                <div className="card">
                    <div className="outline">
                        <h3 style={{fontSize: `3rem`}}>Peak</h3>
                        <div>
                            <p>6:00 am - 10:30 am</p>
                            <p>4:30 pm - 10:30 pm</p>
                        </div>
                        <div className="header">
                            <h2>Weekly</h2>
                            <h2>Hourly Rate</h2>
                        </div>
                        <div className="details">
                            <p>1-6 Hours</p>
                            <p>$39</p>
                        </div>
                        <div className="details">
                            <p>7-11 Hours</p>
                            <p>$37</p>
                        </div>
                        <div className="details">
                            <p>Over 12 Hours</p>
                            <p>$35</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="outline">
                        <h3 style={{fontSize: `3rem`}}>Off Peak</h3>
                        <div>
                            <p>10:30 am - 4:30 pm</p>
                            <p>4:20 pm - 5:50 am</p>
                        </div>
                        <div className="header">
                            <h2>Weekly</h2>
                            <h2>Hourly Rate</h2>
                        </div>
                        <div className="details">
                            <p>1-6 Hours</p>
                            <p>$34</p>
                        </div>
                        <div className="details">
                            <p>7-11 Hours</p>
                            <p>$32</p>
                        </div>
                        <div className="details">
                            <p>Over 12 Hours</p>
                            <p>$30</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Pricing