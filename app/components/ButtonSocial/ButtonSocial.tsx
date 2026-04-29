"use client";
import React from "react";
import styles from "./ButtonSocial.module.css";
import { useSound } from "@/hooks/useSound";

interface ButtonSocialProps {
  title: string;
  iconPath: string;
  onClick?: () => void;
  href?: string;
}

const ButtonSocial = ({ title, iconPath, onClick, href }: ButtonSocialProps) => {

  const prefix = '/Ryoko-Tsukiko-Bot-Site-';
  const { playHover, playClick } = useSound();

  const fullIconPath = iconPath.startsWith('http') ? iconPath : `${prefix}${iconPath}`;

  const handleClick = (e: React.MouseEvent) => {
    playClick();
    if (onClick) onClick();
  };

  const content = (
    <button 
      className={styles.button} 
      onMouseEnter={playHover}
      onClick={handleClick} 
      title={title}
      aria-label={title}
    >
      <div 
        className={styles.icon} 
        style={{ 
          maskImage: `url(${iconPath})`, 
          WebkitMaskImage: `url(${iconPath})` 
        } as React.CSSProperties} 
      />
    </button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles.link}>
        {content}
      </a>
    );
  }

  return content;
};

export default ButtonSocial;