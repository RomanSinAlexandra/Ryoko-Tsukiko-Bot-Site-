import Link from 'next/link';
import Image from 'next/image';
import styles from './PageNotFound.module.css';


export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image 
          src={`/Ryoko-Tsukiko-Bot-Site-/RyokoChibi.svg`} 
          alt="Not Found" 
          width={300} 
          height={300}
          layout="responsive"
        />
      </div>
      <div>
      <h1 className={styles.title}>404</h1>

      <p className={styles.description}>
        Ой! Похоже, Рёко не смогла найти эту страницу.
      </p>

      <Link href="/" className={styles.button}>
        Вернуться домой
      </Link>
      </div>
    </div>
  );
}