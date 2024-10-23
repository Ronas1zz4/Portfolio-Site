import React from 'react'
import Navbar from './components/Navbar'
import { Links } from './components/Links'
import ScrollReveal from './components/ScrollReveal'
import Projects from './Pages/Project/Projects'
import About from './Pages/About'
import Experience from './Pages/Experience/Experience'


const App = () => {
  return (
    <>
<Navbar />
<About/>
<Projects/>
<Experience/>
{/* <Contact/>  */} 


    </>

  )
}

export default App