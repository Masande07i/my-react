import React from 'react'
import style from './About.module.css'
import AboutImage from '../../assets/SectionCard.png'
import Text from '../Text/Text.tsx'
import { FaEye, FaLaptopCode } from 'react-icons/fa'

export const About = () => {
  return (
    <section className={style.about}>

        <div className= {style.left}>
            <img src={AboutImage} alt="About" className={style.image}/>
        </div>

        <div className={style.right}>
            <Text variant= 'h4' style={{color: "#12F7D6", letterSpacing: "2px"}}>
                ABOUT US
            </Text>

            <Text variant= 'h1' style={{color:" white"}}>
                WHO ARE {" "}
                <span className={style.highlight}>WE</span>
                 ?
            </Text>

            <div className={style.line}></div>

             <Text variant='p' style={{color: "white"}}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type.
             </Text>

             <div className={style.features}>

      <div className={style.feature}>

     <div className={style.featureHeader}>
      <FaEye className={style.icon} />

      <Text variant="h3" style={{ color: "white" }}>
        Clean Code
      </Text>
    </div>

    <Text variant="p" style={{ color: "white" }}>
      Lorem Ipsum is simply dummy text of the printing.
    </Text>

  </div>

  <div className={style.feature}>

    <div className={style.featureHeader}>
      <FaLaptopCode className={style.icon} />

      <Text variant="h3" style={{ color: "white" }}>
        Modern Design
      </Text>
    </div>

    <Text variant="p" style={{ color: "white" }}>
      Lorem Ipsum is simply dummy text of the printing.
    </Text>

  </div>

</div>
        </div>


    </section>
  )
}
