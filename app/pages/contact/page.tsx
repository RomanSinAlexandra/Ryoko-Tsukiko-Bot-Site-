import TextCard from "../../components/TextCard/TextCard";
import ButtonSocial from "../../components/ButtonSocial/ButtonSocial";
import styles from "./Contact.module.css";

export default function Contact() {
  const commandsText = `Lorem ipsum dolor sit amet consectetur. Est faucibus sit scelerisque semper. Nam ultrices et quis pellentesque elementum a in. Cursus libero montes amet eleifend nunc. Fringilla iaculis justo non nullam senectus pretium sollicitudin. Sit nibh mattis leo vivamus. Magna dictum mattis viverra sed sem elit tristique. Sed mattis orci tristique vitae adipiscing feugiat odio. Arcu molestie adipiscing elit lobortis habitasse rhoncus amet elementum nullam. Proin malesuada facilisis consectetur imperdiet urna ornare.`;

  return (
    // Добавляем стили для главного контейнера
    <main className={styles.mainContainer}>
      
      <div className={styles.commandPage}>
        <TextCard 
          title="RYOKO TSUKIKO DEVELOPMENT" 
          text={commandsText} 
          fontHSize="clamp(32px, 5vw, 64px)" 
          fontSize="clamp(16px, 2vw, 48px)" 
        />
      </div>

      <div className={styles.socialButtons}>
        <ButtonSocial 
          title="Discord"
          href="https://discord.gg/bxJYk74duw"
          iconPath="/discord-icon.svg" 
        />
        <ButtonSocial 
          title="Telegram"
          href="https://t.me/Ichigo_Project"
          iconPath="/telegram-icon.svg" 
        />
        <ButtonSocial 
          title="Instagram"
          href="https://www.instagram.com/roman_prokopenko_son_alexander?igsh=NjM5Mm0yOWdiYng5"
          iconPath="/instagram-icon.svg" 
        />
        <ButtonSocial 
          title="Youtube"
          href="https://www.youtube.com/@Roman_Prokopenko_son_Alexander"
          iconPath="/youtube-icon.svg" 
        />
      </div>

    </main>
  );
}