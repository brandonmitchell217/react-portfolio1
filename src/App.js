import { Routes, Route, Link } from 'react-router-dom'
import Nav from './components/Nav'
import Icons from './components/Icons'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <Icons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
