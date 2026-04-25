"use client";
import Link from 'next/link';
import Lottie from 'lottie-react';
import styles from './PageNotFound.module.css';
import Button from './components/Button/Button';
import ryokoAnimation from '@/public/ryoko.json';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Lottie 
          animationData={ryokoAnimation} 
          loop={true} 
          /* Меняем жесткие пиксели на 100% */
          style={{ width: '100%', height: '100%' }} 
        />
      </div>
      <div>
        <h1 className={styles.title}>404</h1>
        <p className={styles.description}>
          Oops! Looks like Ryoko couldn't find this page.
        </p>
        <Button title="Back to Home" href="/" />
      </div>
    </div>
  );
}