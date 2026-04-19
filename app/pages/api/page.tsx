import TextCard from "../../components/TextCard/TextCard";
import styles from "./API.module.css";

export default function api() {
  const commandsText = `В данный момент мы не можем предоставить список команд, так как API находится в стадии разработки. 
  Пожалуйста, следите за обновлениями на нашем сайте и в социальных сетях, чтобы быть в курсе всех новостей и релизов!`;

  return (
    <div className={styles.commandPage}>
      <TextCard 
        title="ПРОСИМ ПРОЩЕНИЯ!" 
        text={commandsText} 
        fontHSize="clamp(32px, 5vw, 64px)" 
        fontSize="clamp(16px, 2vw, 48px)" 
      />
    </div>
  );
}