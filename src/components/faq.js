import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    text-align: center;

    .question{
        font-weight: bold;
        text-decoration: underline var(--secondary-color);
    }

`

const Faq = () => {
    return (
        <Container>
              <div className="questions">
              <p className="question">What is PRAKTICE?</p>
              <p className="answer">PRAKTICE is a wellness studio with limited wellness accessories and no machines. Our goal is to allow a diverse roster of wellness practitioners to rent a space where they can develop their skills.</p>

              <p className="question">What do I need to do in order to rent PRAKTICE?</p>
              <p className="answer">You must be a certified and insured practitioner.</p>

              <p className="question">I am a private customer and would like to book PRAKTICE for myself?</p>
              <p className="answer">We apologize but only certified and insured practitioners can book PRAKTICE.</p>

              <p className="question">What are the booking Options?</p>
              <p className="answer">60 minute time slots consist of 45 minutes for training plus 15 minutes for clothing change before and after your PRAKTICE. As a precaution, a 1o-minute interval will be added between each time slot. During that time the studio must be vacated to allow for ventilation, cleaning and sanitization by our staff.</p>

              <p className="question">How can I book Praktice?</p>
              <p className="answer">Please see our booking process info.</p>

              <p className="question">Are there any fees or deposits required?</p>
              <p className="answer">A one time processing fee of $35 is taken upon your first booking. A refundable deposit of $300 will be required to cover any damage or equipment missing and/or over booking times.</p>

              <p className="question">Is PRAKTICE a Gym?</p>
              <p className="answer">No. PRAKTICE Is a wellness studio where practitioners train their clients. PRAKTICE can be booked for sessions of one hour or longer.  PRAKTICE does not offer subscriptions, health or training programs, nor does it make referrals between clients and practitioners.</p>
              </div>
        </Container>
    )
}

export default Faq