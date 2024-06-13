import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className='container'>
      <Title subTitle='Our PROGRAM' title='What We Offer'/> 
      <Programs/>
      <About/>
      <Title subTitle='Gallary' title='Campus Photos'/> 
      <Campus/>
      <Title subTitle='Testimonials' title='What Students say'/> 
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get in Touch'/> 
      <Contact/>
      <Footer/>
      
      
      </div>
      
      
     
    </div>
  )
}

export default App