import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  padding: 1.45rem 1.0875rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  align-items: baseline;

  a{
    color: black;
    text-decoration: none;
  }

 a:nth-child(3){
   font-size: 1.25rem;
 }

  a:hover{
    border-bottom: 1px solid red;
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
      <h4>PRA<span style={{color: `red`}}>K</span>TICES</h4>
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
