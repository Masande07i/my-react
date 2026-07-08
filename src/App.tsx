
import './App.css'
import { Navbar } from './components/Navbar/Navbar.tsx'
import {Hero} from './components/Hero/Hero.tsx'
import { Section } from './components/Section/Section.tsx'
import { About } from './components/About/About.tsx'
import { Footer } from './components/Footer/Footer.tsx'
function App() {

  return(
    <div>

       <div className= "backgroundLetters">
          <span>H</span>
          <span>Y</span>
          <span>K</span>
          <span>R</span>
          <span>O</span>
          <span>X</span>
       </div>


      <Navbar/>
      <Hero/> 
      <Section/> 
      <About/>
      <Footer/> 
   
    </div>
  )
}
export default App
