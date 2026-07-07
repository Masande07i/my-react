
import './App.css'
import { Navbar } from './components/Navbar/Navbar.tsx'
// import { Footer } from './components/Footer/Footer.tsx'
import {Hero} from './components/Hero/Hero.tsx'
import { Section } from './components/Section/Section.tsx'
// import { ContentContainer } from './components/ContentContainer.tsx'

function App() {

  return(
    <div>
      
      <Navbar/>
      <Hero/>
      <Section/>

     {/* <Footer/> */}
   


    </div>

    
  )
 
}
export default App
