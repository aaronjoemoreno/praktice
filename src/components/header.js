import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  align-items: baseline;
  padding-bottom: 2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  background: var(--white-color);

  a{
    font-size: 1.5rem;
    color: var(--main-color);
    text-decoration: none;
  }

 a:nth-child(3){
   font-size: 1.8rem;
 }

  a:hover{
    text-decoration: underline var(--secondary-color);
  }
`

const Header = () => (
  <Container>
    <Link to="/">
      <h4>HOME</h4>
    </Link>

    <Link to="/about">
      <h4>ABOUT</h4>
    </Link>

    <Link to="/praktics">
      <h4>PRA<span style={{color: `var(--secondary-color)`}}>K</span>TICES</h4>
    </Link>

    <Link to="/contact">
      <h4>CONTACT</h4>
    </Link>

    <Link to="/members">
      <h4>MEMBERS</h4>
    </Link>
  </Container>
)

export default Header
