import React from 'react'
import styled from 'styled-components'
import BackButton from './BackButton'

function Projects() {
  return (
    <Container>
      <SectionTitle>
        <h3>Projects</h3>
      </SectionTitle>
      <SectionTitle1>
        <h3>Projects</h3>
      </SectionTitle1>
      <ProjectsCont>
        <Project>
          <img src="../img/vet.jpg" />
          <Text>
            <h2>Project 1</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <Smalls>
              <small>react</small>
              <small>gsap</small>
            </Smalls>
          </Text>
        </Project>
        <Project>
          <img src="../img/burgerPlaceFigma.jpg" />
        </Project>
        <Project>
          <img src="../img/vet.jpg" />
        </Project>
        <Project>
          <img src="../img/burgerPlaceFigma.jpg" />
        </Project>
      </ProjectsCont>
      <BackButton />
    </Container>
  )
}

export default Projects

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
    left: -180px;
    font-size: 62px;
  }
  &:after {
    content: '>';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 4px;
    right: -180px;
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
    left: -180px;
    font-size: 62px;
  }
  &:after {
    content: '>';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 4px;
    right: -180px;
    font-size: 62px;
  }
`

const ProjectsCont = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: 25px;
  place-items: center;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`
const Project = styled.div`
  height: 30vh;
  width: 400px;
  position: relative;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &:hover Text {
    transform: translateY(100%);
  }
`

const Text = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 33%;
  background: linear-gradient(
    to top,
    #030301,
    rgba(3, 3, 1, 0.5) 80%,
    rgba(3, 3, 1, 0.2)
  );
  text-align: left;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  font-family: 'Work Sans', sans-serif;
  h2 {
    font-size: 28px;
    font-weight: 700;
  }
  p {
    padding: 4px 8px;
    font-size: 12px;
    font-weight: 400;
  }
`
const Smalls = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 8px;
  small {
    font-weight: 200;
    margin: 0 8px;
  }
`
