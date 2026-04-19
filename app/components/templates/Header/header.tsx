"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      {/* Логотип: на десктопе это ссылка, на мобилках Чиби внутри скроется */}
      <a href="/" className={styles.logoHover}>
        <Image src="/RyokoChibi.svg" alt="Ryoko" width={100} height={100} className={styles.desktopChibi} />
        <Image src="/RyokoText.svg" alt="Text" width={200} height={80} className={styles.logoText} />
      </a>

      {/* Кнопка-бургер: видна ТОЛЬКО на мобилках */}
      <button 
        className={styles.mobileMenuButton} 
        onClick={toggleMenu} 
        aria-label="Toggle menu"
      >
        <Image src="/RyokoChibi.svg" alt="Menu" width={100} height={100} />
      </button>

      {/* Навигация */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ""}`}>
        <a href="/" className={styles.navLink} onClick={closeMenu}>Home</a>
        <a href="/pages/command" className={styles.navLink} onClick={closeMenu}>Command</a>
        <a href="/pages/api" className={styles.navLink} onClick={closeMenu}>API</a>
        <a href="/pages/contact" className={styles.navLink} onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  );
}