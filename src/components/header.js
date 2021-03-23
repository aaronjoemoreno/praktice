import { Link } from "gatsby"
import React, { useState, useEffect }from "react"
import styled from "styled-components"
import './mobile-nav.css'

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
    background: var(--white-color);
  }

  .mobile-nav{
    display: none;
    position: sticky;
  }

  a{
    font-size: 1.5rem;
    color: var(--main-color);
    list-style: none;
  }

  a:nth-child(3){
   font-size: 1.8rem;
  }

  a:hover{
    text-decoration: underline var(--secondary-color);
  }

  .dropdown {
    position: relative;
    display: inline-block;
    text-align: center;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 4.5rem;
    background-color: #f1f1f1;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.4);
    z-index: 1;
    border-radius: 2rem;
  }
  .dropdown-content ul{
    padding: 0;
  }

  .dropdown-content ul li{
    color: black;
    padding: 1rem;
    list-style: none;
    display: block;
    text-align: center;
  }

  .dropdown-content ul li a{
    width: 100%;
    margin: 0 auto;
  }

  .dropdown-content li a:hover {
    text-decoration: underline var(--secondary-color) !important;
    text-decoration-line: underline !important;
    text-decoration-color: var(--secondary-color) !important;
  }

  .dropdown:hover .dropdown-content {display: block;}

  .dropdown:hover .dropbtn {background-color: #3e8e41;}

  #praktice-nav{
    font-size: 1.8rem;
  }

  #praktice-nav:hover .dropdown {
    display: block;
  }


  @media (max-width: 768px) {
    position: relative;
    padding-top: 2rem;

    nav{
      display: none;
    }

    .mobile-nav{
      display: block;
      position: relative;
      height: 4rem;
      width: 50px;
      float: right;
    }

    .hamburger{
      position: absolute;
      right: 0;
      left: 0;
      top: -20px;
    }

    .mobile-nav-itmes{
      display: grid;
      width: 100%;
      justify-content: center;
      margin-bottom: 10rem;
    }

    .mobile-nav-itmes a{
      padding: 0;
      margin: 0 auto;
      margin-top: 2rem;

      &:hover{
        cursor: pointer;
      }
    }

    .mobile-nav-expand{
      text-align: center;

      ul{
        margin: 0 auto;
        padding-inline-start: 0;
      }

      ul li{
        list-style-type: none;
        margin-top: .5rem;
        text-decoration: underline var(--secondary-color) !important;
      }
    }
  }
`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [navState, setNavState] = useState('')
  const [aboutIsOpen, setAboutIsOpen] = useState(false);
  const [prakticeIsOpen, setPrakticeIsOpen] = useState(false);

  useEffect(() =>{
    isOpen ? setNavState('open') : setNavState('');
    navState == ('') ? setAboutIsOpen(false) : setAboutIsOpen(aboutIsOpen);
    navState == ('') ? setPrakticeIsOpen(false) : setPrakticeIsOpen(prakticeIsOpen);
  }, [isOpen])


  return(
  <Container>
    <nav>
      <Link to="/">
        <h4>HOME</h4>
      </Link>

      <div class="dropdown">
        <Link to="/about" className="dropbtn">
          <h4>ABOUT</h4>
        </Link>
        <div className="dropdown-content">
          <ul>
            <li>
              <Link to="/about/#covid">Covid 19</Link>
            </li>
            <li>
              <Link to="/about/#values">Our Values</Link>
            </li>
            <li>
              <Link to="/about/#mission">Our Mission</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="dropdown">
        <Link to="/praktices" className="dropbtn">
        <h4 id="praktice-nav">PRA<span style={{color: `var(--secondary-color)`}}>K</span>TICES</h4>
        </Link>
        <div className="dropdown-content">
          <ul>
            <li>
              <Link to="/praktices/#application">Application Process</Link>
            </li>
            <li>
              <Link to="/praktices/#rates">Rates and Prices</Link>
            </li>
            <li>
              <Link to="/praktices/#cancellation">Cancellation Policy</Link>
            </li>
            <li>
              <Link to="/praktices/#gallery">Gallery</Link>
            </li>
          </ul>
        </div>
      </div>

      <Link to="/contact">
        <h4>CONTACT</h4>
      </Link>

      <Link to="/members">
        <h4>MEMBERS</h4>
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

      <>
        <a><h4 onClick={() => setAboutIsOpen(!aboutIsOpen)}>ABOUT</h4></a>
        {aboutIsOpen &&
        <div className="mobile-nav-expand">
          <ul>
            <li>
              <Link to="/about/#covid">Covid 19</Link>
            </li>
            <li>
              <Link to="/about/#values">Our Values</Link>
            </li>
            <li>
              <Link to="/about/#mission">Our Mission</Link>
            </li>
          </ul>
        </div>
      }
      </>

      <>
      <a><h4 onClick={() => setPrakticeIsOpen(!prakticeIsOpen)}>PRA<span style={{color: `var(--secondary-color)`}}>K</span>TICES</h4></a>
      {prakticeIsOpen &&
        <div className="mobile-nav-expand">
          <ul>
            <li>
              <Link to="/praktices/#application">Application Process</Link>
            </li>
            <li>
              <Link to="/praktices/#rates">Rates and Prices</Link>
            </li>
            <li>
              <Link to="/praktices/#cancellation">Cancellation Policy</Link>
            </li>
            <li>
              <Link to="/praktices/#gallery">Gallery</Link>
            </li>
          </ul>
        </div>
      }
      </>

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

export default Header