import React from 'react'
import JotformEmbed from 'react-jotform-embed';
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: grid;

    .number{
        text-decoration: underline;
        font-weight: bold;
    }
`

const CertificationAndInsurance = () => {
    return (
        <Container>
            <h3><span className="number">First:</span> Before being able to schedule at Pra<span style={{color: 'var(--secondary-color)'}}>k</span>tice, you'll need to send us few documents...</h3>
            <JotformEmbed src="https://form.jotform.com/210158648836160" />
        </Container>
    )
}

export default CertificationAndInsurance
