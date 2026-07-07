import React from 'react'
import style from './Footer.module.css'
import { ContentContainer } from '../ContentContainer.tsx'

export const Footer = () => {
  return (
    <footer>
        <ContentContainer  className = {style['footer-cont']}>
            DESIGN BY HYKROX
        </ContentContainer>
   
    </footer>
    
  )
}
