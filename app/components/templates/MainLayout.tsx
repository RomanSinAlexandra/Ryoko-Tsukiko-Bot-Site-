import Image from "next/image";
import { ReactNode } from "react";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <div className={styles.logoHover}>
            <Image src="/RyokoChibi.svg" alt="Ryoko" width={100} height={100} />
            <Image src="/RyokoText.svg" alt="Text" width={200} height={80} />
          </div>
        </div>

        <nav className={`${styles.nav} ${styles.text}`}>
          <a href="/home" className={styles.navLink}>Home</a>
          <a href="/about" className={styles.navLink}>Command</a>
          <a href="/services" className={styles.navLink}>API</a>
          <a href="/contact" className={styles.navLink}>Contact</a>
        </nav>
      </header>

      <main>{children}</main>

      {/* FOOTER */}
      <footer className={styles.footerWrapper}>

        <Image
          src="/bgCity.svg"
          alt="City"
          fill
          className={styles.bgCity}
        />

        <div className={styles.contentWrapper}>

          {/* LEFT */}
          <div className={styles.cardWrapper}>
            <Image
              src="/bgText.svg"
              alt="bg"
              width={696}
              height={604}
              className={styles.cardBg}
            />

            <div className={`${styles.cardContent} ${styles.text}`}>

              <Image
                src="/RyokoTsukikoLogo.svg"
                alt="Logo"
                width={696}
                height={168}
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

          {/* RIGHT */}
          <div className={styles.ryoko}>
            <Image src="/Ryoko.svg" alt="Ryoko" width={621} height={931} />
          </div>

        </div>

        <div className={`${styles.bottomBar} ${styles.text}`}>
          © 2026 Ryoko Tsukiko. Created with love.
        </div>

      </footer>
    </>
  );
}