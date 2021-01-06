import React from 'react'
import styled from 'styled-components'

const MainButton = styled.div`
    margin: 0 auto;
    font-size: 1.7rem;
    width: 12rem;
    height: 4rem;
    line-height: 4rem;
    border-radius: 2.5rem;
    background: var(--secondary-color);
    color: var(--white-color);

    &:hover{
        cursor: pointer;
        opacity: .7;
    }
`

const Button = ({text, clickedButton}) => {
    return (
        <MainButton onClick={clickedButton}>
            {text}
        </MainButton>
    )
}

export default Button;