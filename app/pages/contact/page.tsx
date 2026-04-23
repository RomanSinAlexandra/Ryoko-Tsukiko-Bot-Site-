import TextCard from "../../components/TextCard/TextCard";
import ButtonSocial from "../../components/ButtonSocial/ButtonSocial";
import styles from "./Contact.module.css";

export default function Contact() {
  const commandsText = `We are currently in the development stage of our project, and we are actively working on creating an amazing experience for our users. We appreciate your interest and support! Please follow our website and social media channels for updates on all news and releases. We can't wait to share our progress with you!`;

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
          iconPath="/Ryoko-Tsukiko-Bot-Site-/discord-icon.svg" 
        />
        <ButtonSocial 
          title="Telegram"
          href="https://t.me/Ichigo_Project"
          iconPath="/Ryoko-Tsukiko-Bot-Site-/telegram-icon.svg" 
        />
        <ButtonSocial 
          title="Instagram"
          href="https://www.instagram.com/roman_prokopenko_son_alexander?igsh=NjM5Mm0yOWdiYng5"
          iconPath="/Ryoko-Tsukiko-Bot-Site-/instagram-icon.svg" 
        />
        <ButtonSocial 
          title="Youtube"
          href="https://www.youtube.com/@Roman_Prokopenko_son_Alexander"
          iconPath="/Ryoko-Tsukiko-Bot-Site-/youtube-icon.svg" 
        />
      </div>

    </main>
  );
}