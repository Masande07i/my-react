import Text from "../Text/Text.tsx";
import style from "./Card.module.css";


type Props = {
  title: string;
  description: string;
};

export const Card = ({ title, description }: Props) => {
  return (
    <div className={style.card}>
      <Text variant="h3" className={style.title}>
        {title}
      </Text>

      <Text variant="p" className={style.description}>
        {description}
      </Text>
    </div>
  );
};