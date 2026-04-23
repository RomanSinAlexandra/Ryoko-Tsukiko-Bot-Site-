import Image from "next/image";
import TextCard from "./components/TextCard/TextCard";
import Button from "./components/Button/Button";
import styles from "./Page.module.css";

export default function Home() {
  return (
          <main className={styles.main}>
            <div className={styles.hero}>
              <Image
                src="/Ryoko-Tsukiko-Bot-Site-/Logobg.svg"
                alt="Logo background"
                fill
                className={styles.heroBg}
                priority
              />
              <div className={styles.heroContent}>
                <Image
                  src="/Ryoko-Tsukiko-Bot-Site-/Logo.svg"
                  alt="Ryoko logo"
                  width={952}
                  height={405}
                  className={styles.heroLogo}
                  priority
                />
                <Button title="Add to Discord free" href="https://discord.com/oauth2/authorize?client_id=1466479357500325918&permissions=8&integration_type=0&scope=bot"/>
              </div>
            </div>
            
            <div>
                <div className={styles.section}>
                  <div className={styles.imageWrapper}>
                    <Image 
                      src="/Ryoko-Tsukiko-Bot-Site-/RyokoSchool.svg" 
                      alt="Ryoko anime" 
                      fill 
                      priority
                    />
                  </div>

                    <div className={styles.contentWrapper}>
                      <TextCard
                        title="Anime!"
                        text="Anime isn't just a hobby, it's a whole life! Search for anime by title or screenshot, find characters, and see the top anime of the season and all time—it's all at your fingertips."
                        fontHSize="clamp(32px, 5vw, 64px)"
                        fontSize="clamp(16px, 2vw, 48px)"
                      />
                    </div>
                </div>

                  <div className={styles.section}>
                    <div className={styles.contentWrapper}>
                      <TextCard
                        title="Music!"
                        text="Make your gaming experience unforgettable! Ryoko can play any music in a flash, whether it's on YouTube or Spotify. And if you can't find anything, you can turn on  internet radio to any genre and preference..."
                        fontHSize="clamp(32px, 5vw, 64px)"
                        fontSize="clamp(16px, 2vw, 48px)"
                      />
                    </div>
                  
                  <div className={styles.imageWrapper}>
                    <Image 
                      src="/Ryoko-Tsukiko-Bot-Site-/RyokoSinger.svg" 
                      alt="Ryoko singer" 
                      fill 
                      priority
                    />
                  </div>
                </div>

                  <div className={styles.section}>
                     <div className={styles.imageWrapper}>
                        <Image 
                          src="/Ryoko-Tsukiko-Bot-Site-/RyokoArima.svg" 
                          alt="Ryoko art" 
                          fill 
                          priority
                        />
                    </div>
                    <div className={styles.contentWrapper}>
                      <TextCard
                        title="Art!"
                        text="Ryoko has a large selection of character art,  catgirls, r34, reactions, and all your favorite  waifus and husbendos!"
                        fontHSize="clamp(32px, 5vw, 64px)"
                        fontSize="clamp(16px, 2vw, 48px)"
                      />
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.contentWrapper}>
                      <TextCard
                        title="News!"
                        text="News from around the world about anime, games, and more is available
                        on your Discord server! With support for three languages ​​and various
                        sources, just specify the time and channel."
                        fontHSize="clamp(32px, 5vw, 64px)"
                        fontSize="clamp(16px, 2vw, 48px)"
                      />
                    </div>

                    <div className={styles.imageWrapper}>
                      <Image 
                        src="/Ryoko-Tsukiko-Bot-Site-/RyokoPiper.svg" 
                        alt="Ryoko news" 
                        fill 
                        priority
                      />
                  </div>
                </div>

            </div>
        </main>
  );
}