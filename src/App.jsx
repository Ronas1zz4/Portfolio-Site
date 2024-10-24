import React from 'react'
import Navbar from './components/Navbar'
import { Links } from './components/Links'
import ScrollReveal from './components/ScrollReveal'
import Projects from './Pages/Project/Projects'
import About from './Pages/About'
import Contact from './Pages/Contact/Contact'
import Experience from './Pages/Experience/Experience'


const App = () => {
  return (
    <>
    <div className='flex flex-col'>
    <Navbar />
<About/>
<Projects/>
<Experience/>
<Contact/>  
    </div>



    </>

  )
}

export default App