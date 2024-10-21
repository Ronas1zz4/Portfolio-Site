import React from 'react'
import Navbar from './components/Navbar'
import { Links } from './components/Links'
import ScrollReveal from './components/ScrollReveal'
import Projects from './Pages/Project/Projects'
import About from './Pages/About'


const App = () => {
  return (
    <>
<Navbar />
<About/>
{/* <Experience/>
<Contact/>  */}
<Projects/>

    </>

  )
}

export default App