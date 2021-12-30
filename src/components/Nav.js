import React, { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { gsap } from 'gsap'
import '../index.css'
import styled from 'styled-components'

function Nav() {
  function menuOpen() {
    const navMenu = document.querySelector('.navMenu')
    navMenu.style.transform = 'translateY(0)'
    // With gsap, may need to remove css transition - styled components
    // const tl1 = gsap
    //   .timeline({ duration: 0.1, ease: 'sine.out' })
    //   .to(navMenu, { y: 0 })
    //   .to('.mobileNav a', { y: '-20px', stagger: 0.5 }, '-=.5')
  }
  function menuClose() {
    const navMenu = document.querySelector('.navMenu')
    navMenu.style.transform = 'translateY(-100%)'
  }
  function navClear() {
    const navMenu = document.querySelector('.navMenu')
    navMenu.style.transform = 'translateY(-100%)'
  }

  useEffect(() => {
    const tl = gsap
      .timeline({ duration: 1, delay: 3, ease: 'sine.out' })
      .from('.fullNav ul li', { opacity: 0, stagger: 0.5 })
  })

  return (
    <Container>
      <FullNav className="fullNav">
        <ul>
          <li>
            <Link to="about" className="navBtn" onClick={navClear}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" className="navBtn" onClick={navClear}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" className="navBtn" onClick={navClear}>
              Contact
            </Link>
          </li>
        </ul>
      </FullNav>
      <MobileNav className="mobileNav">
        <FontAwesomeIcon icon={faBars} className="burger" onClick={menuOpen} />
        <NavMenu className="navMenu">
          <Link to="about" className="navBtn" onClick={navClear}>
            About
          </Link>
          <Link to="projects" className="navBtn" onClick={navClear}>
            Projects
          </Link>
          <Link to="contact" className="navBtn" onClick={navClear}>
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
