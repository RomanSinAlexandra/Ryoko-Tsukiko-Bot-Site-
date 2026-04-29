"use client";
import styles from "./Button.module.css";
import { useSound } from "../../../hooks/useSound";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  href?: string;
}

const Button = ({ title, onClick, href }: ButtonProps) => {
  const { playHover, playClick } = useSound();

  const handleClick = (e: React.MouseEvent) => {
    playClick();
    if (onClick) onClick();
  };

  const buttonProps = {
    className: styles.button,
    onMouseEnter: playHover,
    onClick: handleClick,
  };

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <button {...buttonProps}>{title}</button>
      </a>
    );
  }

  return (
    <button {...buttonProps}>
      {title}
    </button>
  );
};

export default Button;