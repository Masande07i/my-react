import React from 'react'
import style from './SectionCard.module.css'
import Text from '../Text/Text.tsx'
import type { IconType } from 'react-icons'

type SectionProps={
    icon: IconType
    title: string,
    description : string,
    

}

export const SectionCard: React.FC<SectionProps> = ({icon:Icon, title,  description}) => {
  return (
    <div className= {style.card}>
        <Icon className ={style.icon}/> 
        <Text variant ={'h2'}>{title}</Text>
        <Text variant ={'p'}>{description}</Text>
        
    </div>
  )
}
