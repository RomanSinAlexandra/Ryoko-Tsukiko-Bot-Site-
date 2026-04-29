"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import { useSound } from "@/hooks/useSound";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { playHover, playClick } = useSound();

  const toggleMenu = () => {
    playClick();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    playClick();
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Command", href: "/pages/command" },
    { name: "News", href: "/pages/news" },
    { name: "API", href: "/pages/api" },
    { name: "Contact", href: "/pages/contact" },
  ];

  return (
    <header className={styles.header}>
      <Link 
        href="/" 
        className={styles.logoHover} 
        onMouseEnter={playHover} 
        onClick={playClick}
      >
        <Image src="/Ryoko-Tsukiko-Bot-Site-/RyokoChibi.svg" alt="Ryoko" width={100} height={100} className={styles.desktopChibi} />
        <Image src="/Ryoko-Tsukiko-Bot-Site-/RyokoText.svg" alt="Text" width={200} height={80} className={styles.logoText} />
      </Link>

      <button 
        className={styles.mobileMenuButton} 
        onClick={toggleMenu} 
        onMouseEnter={playHover}
        aria-label="Toggle menu"
      >
        <Image src="/Ryoko-Tsukiko-Bot-Site-/RyokoChibi.svg" alt="Menu" width={100} height={100} />
      </button>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ""}`}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${isActive ? styles.active : ""}`}
              onMouseEnter={playHover}
              onClick={handleLinkClick}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}