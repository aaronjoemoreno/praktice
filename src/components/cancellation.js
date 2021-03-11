import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    padding: 2rem 0 4rem 0;

    .cancellation{
        width: 100%;
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

        .header{
            border-bottom: 1px solid var(--secondary-color);
        }

        .header, .details{
            display: grid;
            width: 100%;
            grid-template-columns: repeat(3, 1fr);

            h3{
                text-align: center;
                padding: 0;
            }
        }
    }
`

const Cancellation = () => {
    return (
        <Container id="cancellation">
            <h2>Cancellation & Refund  Policy </h2>
            <div>
                <div className="card">
                    <div className="outline">
                        <div className="header">
                            <h3>Under 3 weeks</h3>
                            <h3>3-6 Weeks</h3>
                            <h3>Over 6 Weeks</h3>
                        </div>
                        <div className="details">
                            <p>Non Refundable </p>
                            <p>Credit for future Bookings</p>
                            <p>Full refund minus $35 handling fee</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Cancellation