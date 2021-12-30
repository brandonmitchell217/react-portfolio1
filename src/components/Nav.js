import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../index.css'
import styled from 'styled-components'

function Nav() {
  const navMenu = document.querySelector('.navMenu')
  function menuOpen(e) {
    e.preventDefault()
    navMenu.style.transform = 'translateY(0)'
  }
  function menuClose(e) {
    e.preventDefault()
    navMenu.style.transform = 'translateY(-100%)'
  }

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
        <FontAwesomeIcon icon={faBars} className="burger" onClick={menuOpen} />
        <NavMenu className="navMenu">
          <Link to="about" className="navBtn">
            About
          </Link>
          <Link to="projects" className="navBtn">
            Projects
          </Link>
          <Link to="contact" className="navBtn">
            Contact
          </Link>
          <FontAwesomeIcon
            icon={faTimes}
            className="times"
            onClick={menuClose}
          />
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
    transition: all 500ms cubic-bezier(0.17, 0.67, 0.83, 0.67);

    &:hover {
      color: #d45113;
    }
  }
  @media (max-width: 750px) {
    display: none;
  }
`

const MobileNav = styled.div`
  @media (min-width: 751px) {
    display: none;
  }
`

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
  transform: translateY(-100%);
  transition: all 350ms cubic-bezier(0.13, 0.52, 0.83, 0.67);

  a {
    font-family: 'Source Code Pro', monospace;
    font-weight: 500;
    font-size: 32px;
    color: #e6ebe0;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 500ms cubic-bezier(0.17, 0.67, 0.83, 0.67);

    &:hover {
      color: #d45113;
    }
  }
`
