import style from './About.module.css'
import AboutImage from '../../assets/SectionCard.png'
import Text from '../Text/Text.tsx'
import { FaEye,  FaWindowRestore } from 'react-icons/fa'
import {useState} from "react"
import { SectionCard } from '../SectionCard/SectionCard.tsx'

export const About = () => {

  const [features] = useState([
    {icon: FaEye, title:"Clean Code", description: "Lorem Ipsum is simply dummy text of the printing.",id:1},
    {icon:FaWindowRestore, title:"Modern Design", description:"Lorem Ipsum is simply dummy text of the printing.",id:2}
  ])
  return (
    <section className={style.about}>

        <img src={AboutImage} alt="About" className={style.image}/>
       

        <div className={style.right}>
          <Text variant= 'h6' style={{color: "#0ef8d1",fontFamily: "Rajdhani, sans-serif",fontWeight: 500 }}>
            ABOUT US
          </Text>

          <Text variant= 'h1' style={{color: "white",fontFamily: "Rajdhani, sans-serif",fontWeight: 500}}>
            WHO ARE {" "}
          <span className={style.highlight}>WE</span>
          ?
          </Text>

           <div className={style.line}></div>

             <Text variant='p'>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type.
             </Text>

             <div className={style.features}>
               {
              features && features.length> 0 && features.map(product =>
                {
                return <SectionCard variant=" "
                 key={product.id}
                 icon={product.icon}
                 title={product.title}
                 description={product.description}
                 />
               })
               }



            </div>
        </div>


    </section>
  )
}
