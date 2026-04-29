"use client";
import { useEffect } from "react";

export const useSound = () => {
  const playSound = (soundPath: string) => {
    const fullPath = `${soundPath}`;
    try {
      const audio = new Audio(fullPath);
      audio.volume = 0.3;
      audio.play().catch((err) => {
      });
    } catch (error) {
      console.error("Audio API Error:", error);
    }
  };

  useEffect(() => {
    const unlockAudio = () => {

      const silentAudio = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==");
      silentAudio.play().then(() => {

        window.removeEventListener("click", unlockAudio);
      }).catch(() => {});
    };

    window.addEventListener("click", unlockAudio);
    return () => window.removeEventListener("click", unlockAudio);
  }, []);

  const playHover = () => playSound('/Sound/button-hover.wav');
  const playClick = () => playSound('/Sound/button-click.wav');
  const playStart = () => playSound('/Sound/start.wav');

  return { playHover, playClick, playSound };
};