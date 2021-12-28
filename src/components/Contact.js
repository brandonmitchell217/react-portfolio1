import React from 'react'
import styled from 'styled-components'
import BackButton from './BackButton'

function Contact() {
  return (
    <Container>
      <SectionTitle>
        <h3>Contact</h3>
      </SectionTitle>
      <SectionTitle1>
        <h3>Contact</h3>
      </SectionTitle1>
      <BackButton />
    </Container>
  )
}

export default Contact

const Container = styled.section`
  min-height: 100vh;
`
const SectionTitle = styled.div`
  position: absolute;
  top: 8vh;
  left: 80px;
  font-family: 'Source Code Pro', monospace;
  font-size: 55px;
  text-transform: lowercase;

  &:before {
    content: '<';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 4px;
    left: -160px;
    font-size: 62px;
  }
  &:after {
    content: '>';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 4px;
    right: -160px;
    font-size: 62px;
  }
`
const SectionTitle1 = styled.div`
  position: absolute;
  bottom: 8vh;
  right: 80px;
  font-family: 'Source Code Pro', monospace;
  font-size: 55px;
  text-transform: lowercase;

  &:before {
    content: '</';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 4px;
    left: -160px;
    font-size: 62px;
  }
  &:after {
    content: '>';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 4px;
    right: -170px;
    font-size: 62px;
  }
`
