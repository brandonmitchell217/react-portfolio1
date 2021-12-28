import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function BackButton() {
  return (
    <BackBtn>
      <Link to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
    </BackBtn>
  )
}

export default BackButton

const BackBtn = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  padding: 8px;
  font-size: 48px;
  border: 2px solid rgba(249, 249, 249, 0.6);
  display: grid;
  place-items: center;
  border-radius: 50%;
  cursor: pointer;
  a {
    color: #e6ebe0;
  }
`
