import React from 'react'
import style from './Hero.module.css'
import HeroImage from '../../assets/HeroImage.jpeg'

export const Hero = () => {
  return (
    <section className={style.hero}>

      <div className={style.left}>

        <h4>CREATIVE DESIGNER</h4>

        <h1>
          WE ARE <span>CREATIVE</span>
          <br />
          DESIGNERS
        </h1>

        <div className={style.line}></div>

        <p>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s.
        </p>

      </div>

      <div className={style.right}>

        <img src={HeroImage} alt="Hero" className={style.image}/>

      </div>

    </section>
  )
}
