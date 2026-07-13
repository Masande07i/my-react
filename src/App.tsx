
import './App.css'
import { Navbar } from './components/Navbar/Navbar.tsx'
import {Hero} from './components/Hero/Hero.tsx'
import { Section } from './components/Section/Section.tsx'
import { About } from './components/About/About.tsx'
import { Footer } from './components/Footer/Footer.tsx'
function App() {


  return(
    <>
     <div className ='page-container'> 
       
       <div className ='bg-text-container'>
         <h1 className='vertical-text'>HYKROX</h1> 
       </div>

      <div className='main-content'>
          <Navbar/>
          <Hero/> 
          <Section/>   
          <About/>
          <Footer/>
      </div>
     </div>
    </>
  )
}

export default App
