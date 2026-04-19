import styles from "./Button.module.css"

interface ButtonProps {
  title: string;
  onClick?: () => void;
  href?: string;
}

const Button = ({ title, onClick, href }: ButtonProps) => {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button className={styles.button}>{title}</button>
      </a>
    );
  }

  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;