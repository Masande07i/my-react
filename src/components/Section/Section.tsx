import Text from '../Text/Text.tsx'
import style from './Section.module.css'
import {FaLaptopCode,FaThLarge,FaPaintBrush,FaImage,} from 'react-icons/fa'

export const Section = () => {
  return (
    <section className={style.section}>

    
      <div className={style.left}>

        <Text variant='h4' style={{color:"#12F7D6" , letterSpacing: "2px"}}>
          OUR SERVICES
        </Text>

        <Text variant='h1' style={{color: "white"}}>
          WHAT WE {" "}
          <span className={style.highlight}>DO</span>
          ?
        </Text>

        <div className={style.line}></div>

          <Text variant='p' style={{color: "white"}}>  
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book.
                  <br/>
                  <br/>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
          </Text>

        <button className={style.button}>
          VIEW ALL
        </button>
      </div>

      <div className={style.right}>

        <div className={style.card}>
        <FaLaptopCode className={style.icon} />
         <Text variant="h3"  style={{color:"white"}}>Website Design</Text>
         <Text variant="p">
          We can design for you a website and we can upload them.
         </Text>
        </div>

       <div className={style.card}>
        <FaThLarge className={style.icon} />
        <Text variant="h3" style={{color: "white"}}>Mobile & Desktop App</Text>
        <Text variant="p">
         We can create for you mobile and desktop app.
        </Text>
      </div>

       <div className={style.card}>
         <FaPaintBrush className={style.icon} />
         <Text variant="h3" style={{color:"white"}}>UI & UX Design</Text>
         <Text variant="p">
        We can create for you mobile and desktop app.
       </Text>
     </div>

     <div className={style.card}>
      <FaImage className={style.icon} />
      <Text variant="h3" style={{color:"white"}}>Editing Photo</Text>
      <Text variant="p">
      We can design for you a website and we can upload them.
      </Text>
     </div>

    </div>

  </section>
  );
};