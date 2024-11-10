"use client";

import { useState, useEffect } from "react";

type TypewriterType = {
  displayText: string;
  isDeleting: boolean;
};

export default function useTypewriter(
  texts: string[],
  speed = 100,
  pauseDuration = 1000
): TypewriterType {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const typingInterval = setInterval(() => {
      if (isPaused) return;

      if (!isDeleting) {
        if (index < currentText.length) {
          setDisplayText((prevText) => prevText + currentText.charAt(index));
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsPaused(false);
          }, pauseDuration);
        }
      } else {
        if (index > 0) {
          setDisplayText((prevText) => prevText.slice(0, -1));
          setIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setIndex(0);
          setDisplayText("");
        }
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [texts, speed, isDeleting, index, textIndex, isPaused, pauseDuration]);

  return { displayText, isDeleting };
}
