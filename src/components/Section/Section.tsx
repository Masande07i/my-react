import Text from "../Text/Text.tsx";
import { Card } from "../Card/Card.tsx";
import style from "./Section.module.css";

export const Section = () => {
  return (
    <section className={style.section}>

      {/* Left Side */}
      <div className={style.left}>

        <Text variant="h4" className={style.subtitle}>
          OUR SERVICES
        </Text>

        <Text variant="h1" className={style.heading}>
          WHAT WE <span className={style.highlight}>DO?</span>
        </Text>

        <div className={style.line}></div>

        <Text variant="p" className={style.description}>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </Text>

        <button className={style.button}>
          VIEW ALL
        </button>

      </div>

      {/* Right Side */}
      <div className={style.cards}>

        <Card
          title="Website Design"
          description="We create modern and responsive websites."
        />

        <Card
          title="Mobile App"
          description="We build mobile applications for Android and iOS."
        />

        <Card
          title="UI / UX Design"
          description="We design user-friendly interfaces and experiences."
        />

        <Card
          title="Photo Editing"
          description="Professional image editing and enhancement."
        />

      </div>

    </section>
  );
};