import React from 'react'
import styled from 'styled-components'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Icons() {
  return (
    <Container>
      <a href="#">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </Container>
  )
}

export default Icons

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  padding: 10% 0 10% 8px;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;

  a {
    color: #e6ebe0;
    font-size: 1.625rem;
    font-size: clamp(1.625rem, 1.55rem + 0.375vw, 2rem);
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #d45113;
    }
  }
`
