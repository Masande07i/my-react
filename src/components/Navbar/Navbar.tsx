
import style from './Navbar.module.css'
import Text from '../Text/Text.tsx'
import {Search} from '../Search/Search.tsx'

export const Navbar = () => {
  return (
    <nav>
        <div className={style.content}>

            <div className={style.logo}>
            <Text variant= "h2" style={{color: "rgb(8, 244, 204)"}} > HYKROX </Text>
             <Text variant={"h3"} style={{color: "rgb(8, 244, 204)"}}> unique designs </Text>
             </div>

             <div className={style.links}>
                <a href= '/#' className={style.link}>HOME</a>
                <a href= '/#' className={style.link}>DESIGNS</a> 
                <a href= '/#' className={style.link}>SERVICES</a>
                <a href= '/#' className={style.link}>ABOUT US</a>
                <a href= '/#' className={style.link}>CONTACT US</a> 


                <Search/>

            </div>
        </div>
    </nav>
  ) 
}
