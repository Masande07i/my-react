import style from './Hero.module.css'
import HeroImage from '../../assets/HeroImage.jpeg'
import Text from '../Text/Text.tsx'

export const Hero = () => {
  return (
    <section className={style.hero}>

      <div className={style.left}>
          <Text variant='h6' style={{color: "#0ef8d1",fontFamily: "Rajdhani, sans-serif",fontWeight: 500}} >
            CREATIVE DESIGNER
          </Text>
      
          <Text variant='h1'>
            WE ARE{" "}
            <span className={style.highlight}>CREATIVE</span>
            <br/>
           DESIGNERS
          </Text>

      <div className={style.line}></div>

         <Text variant='p'>  
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book.
        </Text>

      </div>

      <div className={style.right}>

        <img src={HeroImage} alt="Hero" className={style.image}/>

      </div>

    </section>
  )
}
