import style from './Navbar.module.css'
import Text from '../Text/Text.tsx'
import {Search} from '../Search/Search.tsx'

export const Navbar = () => {
  return (
    <nav>
        <div className={style.content}>

            <div className={style.logo}>
              <Text variant= "h1" style={{color: "#0ef8d1",fontFamily: "Lucida Console, Courier New, monospace", fontWeight:500}} > HYKROX </Text>
              <Text variant={"p"} style={{color: "#0ef8d1"}}> unique designs </Text>
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
