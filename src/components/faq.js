import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image';

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    padding-top: 2rem;
    text-align: center;
    font-size: 1.75rem;
    padding-bottom: 2rem;

    img{
        border-radius: 1.5rem;
    }

    .questions{
        padding-top: 2rem;

        p{
          padding: 0;
          margin: 0;
        }
    }

    .question{
        font-weight: bold;
        /* text-decoration: underline var(--secondary-color); */
        text-align: left;
        font-weight: bold;
    }

    .answer{
        color: var(--grey-color);
        text-align: left;
        margin-bottom: 2rem !important;
    }

    .main-img{
      position: relative;

      h1{
        position: absolute;
        top: 0;
        left: 10%;
        z-index: 999;
        color: var(--white-color);
        font-size: 10rem;
      }

      img{
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    @media (max-width: 768px) {
      .main-img{
        h1{
          font-size: 5rem;
        }
      }
    }
`

const Faq = () => {
    const data = useStaticQuery(graphql`
    query {
      faq: allImageSharp(filter: {fluid: {originalName: {eq: "faq.jpg"}}}) {
        edges {
          node {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

    return (
        <Container>
            <div className='main-img'>
              <h1>FAQ</h1>
              <Img fluid={data.faq.edges[0].node.fluid} className="header-img-profile" alt="F.A.Q."/>
            </div>
            <div className="questions">
                <p className="question">What is Pra<span style={{color: `var(--secondary-color)`}}>K</span>tice?</p>
                <p className="answer">PRAKTICE is a wellness studio with limited wellness accessories and no machines. Our goal is to allow a diverse roster of wellness practitioners to rent a space where they can develop their skills.</p>

                <p className="question">What do I need to do in order to rent Pra<span style={{color: `var(--secondary-color)`}}>K</span>tice?</p>
                <p className="answer">You must be a certified and insured practitioner.</p>

                <p className="question">I am a private customer and would like to book Pra<span style={{color: `var(--secondary-color)`}}>K</span>tice for myself?</p>
                <p className="answer">We apologize but only certified and insured practitioners can book PRAKTICE.</p>

                <p className="question">What are the booking Options?</p>
                <p className="answer">60 minute time slots consist of 45 minutes for training plus 15 minutes for clothing change before and after your PRAKTICE. As a precaution, a 10-minute interval will be added between each time slot. During that time the studio must be vacated to allow for ventilation, cleaning and sanitization by our staff.</p>

                <p className="question">How can I book Pra<span style={{color: `var(--secondary-color)`}}>K</span>tice?</p>
                <p className="answer">Please see our <Link to="/praktices">booking process</Link> info.</p>

                <p className="question">Are there any fees or deposits required?</p>
                <p className="answer">A one time processing fee of $35 is taken upon your first booking. A refundable deposit of $300 will be required to cover any damage or equipment missing and/or over booking times.</p>

                <p className="question">Is Pra<span style={{color: `var(--secondary-color)`}}>K</span>tice a Gym?</p>
                <p className="answer">No. PRAKTICE Is a wellness studio where practitioners train their clients. PRAKTICE can be booked for sessions of one hour or longer.  PRAKTICE does not offer subscriptions, health or training programs, nor does it make referrals between clients and practitioners.</p>
              </div>
        </Container>
    )
}

export default Faq