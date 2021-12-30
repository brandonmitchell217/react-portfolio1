import React, { useEffect } from 'react'
import styled from 'styled-components'
// import '../index.css'
import { gsap } from 'gsap'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'

function Home() {
  gsap.registerPlugin(CSSRulePlugin)
  useEffect(() => {
    const rule = CSSRulePlugin.getRule('.title::before')
    const tl = gsap
      .timeline({ duration: 1, ease: 'sine.out' })
      .from('.image', { x: '-100%' })
      .from('.brandon', { y: '100%' })
      .from('.mitchell', { y: '-100%' }, '+=.25')
      .from('.title', { x: '200%', opacity: 0 }, '+=.25')
      .from(rule, { duration: 1, cssRule: { y: '100%' } }, '-=.45')
      .from('.circle', { opacity: 0, stagger: 0.33 })
      .from('span', { y: '100%', stagger: 0.5 })
  })

  //   // if (sizeOne.matches) {
  //   //   const tl = gsap.timeline({ duration: 1.4, ease: 'circ.out' })
  //   //   tl.from('.image', { duration: 1, x: '-100%' })
  //   //   tl.from('.brandon h1', { y: '100%' }, '+=.25')
  //   //   tl.from('.mitchell h1', { y: '-100%' }, '+=.5')
  //   //   tl.from('.title h2', { x: '200%', opacity: 0 }, '+=.25')
  //   //   tl.from(rule, { duration: 1, cssRule: { y: '100%' } }, '+=.15')
  //   //   tl.from('.icons a', { x: '-150%', stagger: 0.2 })
  //   // tl.from('.circle', { opacity: 0, stagger: 0.33 })
  //   // tl.from('.spns span', { y: '100%', stagger: 0.5 })
  //   //   tl.from('.fullNav ul li', { opacity: 0, stagger: 0.5 })
  //   // }
  // })

  return (
    <Container>
      <Image>
        <img src="../img/dude.jpg" className="image" />
      </Image>
      <Brandon>
        <h1 className="brandon">Brandon</h1>
      </Brandon>
      <Mitchell>
        <h1 className="mitchell">Mitchell</h1>
      </Mitchell>
      <Title>
        <h2 className="title">Front-End Developer</h2>
      </Title>
      <Spans>
        <span>Develop</span>
        <Circle className="circle"></Circle>
        <span>Animate</span>
        <Circle className="circle"></Circle>
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
  top: calc(29vh + 10px);
  z-index: 2;
  transform: translateX(-6%);
  overflow: hidden;
  @media (max-width: 1100px) {
    top: calc(29vh + 20px);
  }
`

const Mitchell = styled.div`
  font-family: 'Days One', sans-serif;
  font-size: 1.875rem;
  font-size: clamp(1.875rem, 1.5625rem + 1.5625vw, 3.4375rem);
  text-transform: uppercase;
  position: absolute;
  right: 2%;
  top: 40vh;
  z-index: 2;
  transform: translateX(-2%);
  overflow: hidden;
  @media (max-width: 750px) {
    top: 39vh;
  }
`

const Title = styled.div`
  position: absolute;
  right: 7vw;
  top: 55vh;
  z-index: 2;

  .title {
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
