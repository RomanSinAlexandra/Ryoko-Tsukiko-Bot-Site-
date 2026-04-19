import React from "react";
import styles from "./ButtonSocial.module.css";

interface ButtonSocialProps {
  title: string;
  iconPath: string;
  onClick?: () => void;
  href?: string;
}

const ButtonSocial = ({ title, iconPath, onClick, href }: ButtonSocialProps) => {
  const content = (
    <button 
      className={styles.button} 
      onClick={onClick} 
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