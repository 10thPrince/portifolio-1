import { useState } from 'react'
import About from './components/About.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar /> */}

      <Nav />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
      
    </>
  )
}

export default App
