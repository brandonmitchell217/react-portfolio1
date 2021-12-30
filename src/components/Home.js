import React from 'react'
import styled from 'styled-components'
// import '../index.css'

function Home() {
  return (
    <Container>
      <Image>
        <img src="../img/dude.jpg" />
      </Image>
      <Brandon>
        <h1>Brandon</h1>
      </Brandon>
      <Mitchell>
        <h1>Mitchell</h1>
      </Mitchell>
      <Title>
        <h2>Front-End Developer</h2>
      </Title>
      <Spans>
        <span>Develop</span>
        <Circle></Circle>
        <span>Animate</span>
        <Circle></Circle>
        <span>Design</span>
      </Spans>
    </Container>
  )
}

export default Home

const Container = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 100vh;
  overflow-x: hidden;
`

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const Brandon = styled.div`
  font-family: 'Days One', sans-serif;
  font-size: 1.875rem;
  font-size: clamp(1.875rem, 1.5625rem + 1.5625vw, 3.4375rem);
  text-transform: uppercase;
  position: absolute;
  right: 6%;
  top: 37%;
  z-index: 2;
  transform: translate(-6%, -37%);
  overflow: hidden;
`

const Mitchell = styled.div`
  font-family: 'Days One', sans-serif;
  font-size: 1.875rem;
  font-size: clamp(1.875rem, 1.5625rem + 1.5625vw, 3.4375rem);
  text-transform: uppercase;
  position: absolute;
  right: 2%;
  top: 50%;
  z-index: 2;
  transform: translate(-2%, -50%);
  overflow: hidden;
`

const Title = styled.div`
  position: absolute;
  right: 7%;
  top: 62%;
  z-index: 2;
  transform: translate(-7%, -62%);

  h2 {
    position: relative;
    padding: 0 10px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    font-size: 1.375rem;
    font-size: clamp(1.375rem, 1.0875rem + 1.4375vw, 2.8125rem);
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      height: 100%;
      width: 100%;
      background-color: #246eb9;
      border-radius: 4px;
    }
  }
`

const Spans = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  font-size: 1.125rem;
  font-size: clamp(1.125rem, 1rem + 0.625vw, 1.75rem);
  overflow: hidden;
`

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #246eb9;
  border-radius: 50%;

  @media (max-width: 750px) {
    height: 24px;
    width: 24px;
  }
`
