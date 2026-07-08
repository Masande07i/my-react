import React from 'react'
import style from './Footer.module.css'
import { ContentContainer } from '../ContentContainer.tsx'


export const Footer = () => {
  return (
    <>

      <div className ={style['flexbox-container']}>
        <div className={style['flexbox-item']} >PROJECT</div>
        <div className={style['flexbox-item']} >PLEASURE</div>
        <div className={style['flexbox-item']} >CUSTOMER</div>
        <div className={style['flexbox-item']} >TEAM MEMEBERS</div>
      </div>

        {/* <ContentContainer  className = {style['footer-cont']}>
            DESIGN BY HYKROX
        </ContentContainer>
    */}
    </>
    
  )
}
