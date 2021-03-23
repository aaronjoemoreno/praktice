import { Link } from "gatsby"
import React, { useState, useEffect }from "react"
import styled from "styled-components"
import '../mobile-nav.css'

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;

  nav{
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    text-align: center;
    align-items: baseline;
    padding-bottom: 2rem;
    background: var(--white-color);
  }

  .mobile-nav{
    display: none;
    position: sticky;
  }

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


  @media (max-width: 768px) {
    position: relative;

    nav{
      display: none;
    }

    .mobile-nav{
      display: block;
      position: relative;
      height: 4rem;
    }

    .hamburger{
      position: absolute;
      right: 2rem;
    }

    .mobile-nav-itmes{
      display: grid;
      justify-content: center;
      margin-bottom: 10rem;
    }

    .mobile-nav-itmes a{
      padding: 0;
      margin: 0 auto;
      margin-top: 2rem;
    }
  }
`

const MemberShipNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [navState, setNavState] = useState('')

  useEffect(() =>{
    isOpen ? setNavState('open') : setNavState('')
  }, [isOpen])


  return(
  <Container>
    <nav>
      <Link to="/members/dashboard">
        <h4>DASHBOARD</h4>
      </Link>

      <Link to="/members/schedule">
        <h4>SCHEDULE</h4>
      </Link>

      <Link to="/praktices">
        <h4>PRA<span style={{color: `var(--secondary-color)`}}>K</span>TICES</h4>
      </Link>

      <Link to="/members/contact">
        <h4>CONTACT</h4>
      </Link>

      <Link to="/members/profile">
        <h4>PROFILE</h4>
      </Link>
    </nav>

    <div className="mobile-nav">
      <div className={`hamburger ${navState}`} onClick={() => setIsOpen(!isOpen)}>
          <div className={`hamburgerTop ${navState}`}></div>
          <div className={`hamburgerMiddle ${navState}`}></div>
          <div className={`hamburgerBottom ${navState}`}></div>
      </div>
    </div>

  {isOpen &&
    <div className="mobile-nav-itmes">
      <Link to="/">
        <h4>HOME</h4>
      </Link>

      <Link to="/about">
        ABOUT
      </Link>

      <Link to="/praktices">
        <h4>PRA<span style={{color: `var(--secondary-color)`}}>K</span>TICES</h4>
      </Link>

      <Link to="/contact">
        <h4>CONTACT</h4>
      </Link>

      <Link to="/members">
        <h4>MEMBERS</h4>
      </Link>
    </div>
  }
  </Container>
  )
}

export default MemberShipNav