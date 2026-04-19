import Image from "next/image";
import { ReactNode } from "react";
import styles from "./footer.module.css";


export default function footer () {


  return (
<footer className={styles.footerWrapper}>

        <Image
          src="/bgCity.svg"
          alt="City"
          fill
          className={styles.bgCity}
        />

        <div className={styles.contentWrapper}>

          <div className={styles.cardWrapper}>
            <Image
              src="/bgText.svg"
              alt="bg"
              fill
              className={styles.cardBg}
            />

            <div className={`${styles.cardContent} ${styles.text}`}>

              <Image
                src="/RyokoTsukikoLogo.svg"
                alt="Logo"
                width={696}
                height={168}
                className={styles.cardLogo}
                priority
              />

              <div className={styles.cardText}>
                {`Ryouko Tsukiko
                Yes, I really am like this.
                No, I'm not joking.
                Yes, the bow is mandatory even at
                3 a.m.
                No, I'm not tired of repeating
                myself.
                ...One more time?`}
              </div>

            </div>
          </div>

          <div className={styles.ryoko}>
            <Image 
              src="/Ryoko.svg" 
              alt="Ryoko" 
              width={621} 
              height={931}
              priority
              style={{ width: '100%', height: 'auto' }} 
            />
          </div>
        </div>

        <div className={`${styles.bottomBar} ${styles.text}`}>
          © 2026 Ryoko Tsukiko. Created with love.
        </div>

      </footer>
  );
}