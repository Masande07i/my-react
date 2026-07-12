import style from './Footer.module.css'
import Text from '../Text/Text'
import {FaRegWindowRestore,FaChartBar,FaUserAlt,FaUsers} from 'react-icons/fa'


export const Footer = () => {
  return (
    <footer className = {style.footer}>

      <div className ={style.container}>

          <div className={style.card}>
          <FaRegWindowRestore className={style.icon} />
          <Text variant='h3'>PROJECT</Text>
           <Text variant = 'h1' style ={{color: "#0ef8d1"}}>
          300+ </Text>
          </div>

          <div className={style.card}>
            <FaChartBar className={style.icon}/>
            <Text variant = 'h3'>PLEASURE</Text>
            <Text variant = 'h1' style ={{color: "#0ef8d1"}}>
            8,9</Text>
          </div>

          <div className= {style.card}>
            <FaUserAlt className={style.icon}/>
            <Text variant = 'h3'>CUSTOMER</Text>
            <Text variant = 'h1' style ={{color: "#0ef8d1"}}> 
            3000+</Text>
          </div>

          <div className= {style.card}>
            <FaUsers className= {style.icon}/>
            <Text variant = 'h3'>TEAM MEMBERS</Text>
            <Text variant = 'h1' style ={{color: "#0ef8d1"}}>
            23</Text>
          </div>

      </div>


        <div className={style['footer-label']}>
          <Text variant='h4' style={{color:"white"}}> DESIGN BY{" "}
          <span className={style.name}>HYKROX</span>
        </Text>
      </div>
     
      
     </footer> 
  )
}
