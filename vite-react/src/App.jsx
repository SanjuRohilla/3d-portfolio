import React from 'react'
import Navbar from './sections/navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './components/Clients'
//  import Contact from './sections/Contact'
const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
         {/* <Contact/>   */}
    </main>
  )
}

export default App