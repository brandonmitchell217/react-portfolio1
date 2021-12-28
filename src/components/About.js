import React from 'react'
import styled from 'styled-components'
import BackButton from './BackButton'

function About() {
  return (
    <Container>
      <SectionTitle>
        <h3>About</h3>
      </SectionTitle>
      <SectionTitle1>
        <h3>About</h3>
      </SectionTitle1>
      <AboutText>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          recusandae doloribus expedita laborum consequuntur odit deserunt
          asperiores ipsam velit dolorem, dicta dolorum magni, accusantium aut
          esse porro nemo eius. Sapiente porro eligendi voluptate ratione odit
          deleniti quam? Rerum provident nulla, quidem ex maiores qui aliquid
          architecto minima! Quo mollitia sunt aperiam sequi adipisci saepe.
          Tempora dicta magni commodi velit fuga. Veritatis labore culpa magni,
          cum architecto autem illo perferendis minus eveniet voluptatum! Quo
          mollitia sunt aperiam sequi adipisci saepe. Tempora dicta magni
          commodi velit fuga. Veritatis labore culpa magni, cum architecto autem
          illo perferendis minus eveniet voluptatum!
        </p>
      </AboutText>
      <Skills>
        <img src="../img/icons/icons8-html-5.svg" alt="" />
        <img src="../img/icons/icons8-css3.svg" alt="" />
        <img src="../img/icons/icons8-javascript.svg" alt="" />
        <img src="../img/icons/icons8-react.svg" alt="" />

        <img src="../img/icons/icons8-adobe-photoshop.svg" alt="" />
        <img src="../img/icons/icons8-adobe-xd.svg" alt="" />
        <img src="../img/icons/icons8-figma.svg" alt="" />
        <img src="../img/icons/icons8-blender-3d.svg" alt="" />
      </Skills>
      <BackButton />
    </Container>
  )
}
export default About

const Container = styled.section`
  min-height: 100vh;
  padding: 8em 0;
  position: relative;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
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
    left: -122px;
    font-size: 62px;
  }
  &:after {
    content: '>';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 4px;
    right: -122px;
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
    left: -122px;
    font-size: 62px;
  }
  &:after {
    content: '>';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 4px;
    right: -122px;
    font-size: 62px;
  }
`
const AboutText = styled.div`
  max-width: 800px;
  width: 60%;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  font-size: clamp(0.875rem, 0.825rem + 0.25vw, 1.125rem);
  line-height: 1.4;
`
const Skills = styled.div`
  max-width: 800px;
  width: 60%;
  display: grid;
  place-items: center;
  grid-gap: 10%;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  img {
    max-width: 10vw;
    width: 100px;
  }
`
