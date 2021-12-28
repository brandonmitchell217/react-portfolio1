import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../index.css'
import styled from 'styled-components'

function Nav() {
  return (
    <Container>
      <FullNav>
        <ul>
          <li>
            <Link to="about" className="navBtn">
              About
            </Link>
          </li>
          <li>
            <Link to="projects" className="navBtn">
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" className="navBtn">
              Contact
            </Link>
          </li>
        </ul>
      </FullNav>
      <MobileNav>
        <FontAwesomeIcon icon={faBars} className="burger" />
        <NavMenu>
          <Link to="about" className="navBtn">
            About
          </Link>
          <Link to="projects" className="navBtn">
            Projects
          </Link>
          <Link to="contact" className="navBtn">
            Contact
          </Link>
          <FontAwesomeIcon icon={faTimes} className="times" />
        </NavMenu>
      </MobileNav>
    </Container>
  )
}

export default Nav

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  padding: 20px 40px 20px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const FullNav = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
  ul li a {
    font-family: 'Source Code Pro', monospace;
    font-weight: 500;
    font-size: clamp(20px, calc(1.25rem + ((1vw - 7.68px) * 0.1736)), 22px);
    min-height: 0vw;
    padding: 0 5vw;
    color: #e6ebe0;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #d45113;
    }
  }
  @media (max-width: 750px) {
    display: none;
  }
`

const MobileNav = styled.div``

const NavMenu = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: #000;
  display: none;

  a {
    font-family: 'Source Code Pro', monospace;
    font-weight: 500;
    font-size: 32px;
    color: #e6ebe0;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #d45113;
    }
  }
`
