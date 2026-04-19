import Image from "next/image";
import styles from "./TextCard.module.css";

interface TextCardProps {
  title: string;
  text: string;
  fontHSize: string;
  fontSize: string;
}

const TextCard = ({ title, text, fontHSize, fontSize }: TextCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <p className={styles.title} style={{ fontSize: fontHSize }}>
          {title}
        </p>

        <p className={styles.text} style={{ fontSize }}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default TextCard;