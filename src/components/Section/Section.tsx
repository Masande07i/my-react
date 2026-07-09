import Text from "../Text/Text";
import style from "./Section.module.css";
import {FaLaptopCode, FaThLarge,FaPaintBrush, FaImage,} from "react-icons/fa"


const services = [
  {
    icon: FaLaptopCode,
    title: "Website Design",
    description: "We can design for you a website and we can upload them.",
  },
  {
    icon: FaThLarge,
    title: "Mobile & Desktop App",
    description: "We can create for you mobile and desktop app.",
  },
  {
    icon: FaPaintBrush,
    title: "UI & UX Design",
    description: "We can create for you mobile and desktop app.",
  },
  {
    icon: FaImage,
    title: "Editing Photo",
    description: "We can design for you a website and we can upload them.",
  },
];

export const Section = () => {
  return (
    <section className={style.section}>
      <div className={style.left}>
        <Text variant="h4" style={{ color: "#12F7D6", letterSpacing: "2px" }}>
          OUR SERVICES
        </Text>

        <Text variant="h1" style={{ color: "white"}}>
          WHAT WE <span className={style.highlight}>DO</span>?
        </Text>

        <div className={style.line}></div>

        <Text variant="p" style={{ color: "white"}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s.
        </Text>

        <button className={style.button}>VIEW ALL</button>
      </div>
{/*  */}
      <div className={style.right}>
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div className={style.card}>
              <Icon className={style.icon} />

              <Text variant="h3" style ={{color:"white"}}>{service.title}</Text>

              <Text variant="p" >{service.description}</Text>
            </div>
          );
        })}

      </div>
    </section>
  );
};