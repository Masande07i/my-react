import Text from "../Text/Text";
import style from "./Section.module.css";
import { SectionCard } from "../SectionCard/SectionCard";
import {FaLaptopCode, FaThLarge,  FaObjectGroup, FaImage,} from "react-icons/fa"
import { useState } from "react";


export const Section = () => {

  
const [services] = useState([
    {icon: FaLaptopCode, title: "Website Design", description: "We can design for you a website and we can upload them.", id:1},
    {icon: FaThLarge ,title: "Mobile & Desktop App" , description: "We can create for you mobile and desktop app.", id:2},
    {icon:  FaObjectGroup,title: "UI & UX Design", description: "We can create for you mobile and desktop app." ,id:3},
    {icon: FaImage,title: "Editing Photo" , description:"We can design for you a website and we can upload them.", id:4 }
])


  return (
    <section className={style.section}>
      <div className={style.left}>
        <Text variant="h6" style={{ color: "#0ef8d1",fontFamily: "Rajdhani, sans-serif",fontWeight: 500 }}>
          OUR SERVICES
        </Text>

        <Text variant="h1">
          WHAT WE <span className={style.highlight}>DO</span>?
        </Text>

        <div className={style.line}></div>

        <Text variant="p" style={{ color: "white"}}>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book.
            <br/>
            <br/>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
        </Text>

        <button className={style.button}>VIEW ALL</button>
      </div>

       <div className={style.right}> 
      
        <div className={style.cards}>
          {
          services && services.length> 0 && services.map(product =>
          {
            return <SectionCard 
             icon={product.icon}
             title ={product.title}
             description= {product.description}
             id={product.id}
             />
             
          })
          }
         </div> 

      </div> 
    </section>
  );
};