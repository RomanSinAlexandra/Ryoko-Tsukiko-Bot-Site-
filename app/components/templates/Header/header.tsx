"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logoHover}>
        <Image src="/Ryoko-Tsukiko-Bot-Site-/RyokoChibi.svg" alt="Ryoko" width={100} height={100} className={styles.desktopChibi} />
        <Image src="/Ryoko-Tsukiko-Bot-Site-/RyokoText.svg" alt="Text" width={200} height={80} className={styles.logoText} />
      </a>

      <button 
        className={styles.mobileMenuButton} 
        onClick={toggleMenu} 
        aria-label="Toggle menu"
      >
        <Image src="/Ryoko-Tsukiko-Bot-Site-/RyokoChibi.svg" alt="Menu" width={100} height={100} />
      </button>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ""}`}>
        <Link href="/" className={styles.navLink} onClick={closeMenu}>Home</Link>
        <Link href="/pages/command" className={styles.navLink} onClick={closeMenu}>Command</Link>
        <Link href="/pages/news" className={styles.navLink} onClick={closeMenu}>News</Link>
        <Link href="/pages/api" className={styles.navLink} onClick={closeMenu}>API</Link>
        <Link href="/pages/contact" className={styles.navLink} onClick={closeMenu}>Contact</Link>
      </nav>
    </header>
  );
}