import TextCard from "../../components/TextCard/TextCard";
import styles from "./API.module.css";

export default function api() {
  const commandsText = `We are sorry, but we cannot provide a list of commands at the moment as the API is still under development. 
  Please follow our website and social media for updates on all news and releases!`;

  return (
    <div className={styles.commandPage}>
      <TextCard 
        title="Sorry!" 
        text={commandsText} 
        fontHSize="clamp(32px, 5vw, 64px)" 
        fontSize="clamp(16px, 2vw, 48px)" 
      />
    </div>
  );
}