import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {

  return (
      <div>
       <Sidenav/>
       <Main/>
       <Work/>
       <Skills/>
      <Contact/>
       <Footer/>
      </div>
  )
}

export default App
