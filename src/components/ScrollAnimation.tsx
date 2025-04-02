import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number; // Opóźnienie animacji dla każdego dziecka
  startAt?: number; // Wysokość, od której ma zaczynać się animacja
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  delay = 0,
  startAt = 100, // Domyślnie zaczyna się przy 100px przewinięcia
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Zmieniamy opacity w zależności od scrolla, ale tylko po osiągnięciu `startAt`
  const opacity =
    scrollY > startAt ? Math.min(1, (scrollY - startAt) / 1000) : 0;

  return (
    <motion.div
      animate={{
        opacity: opacity, // Zmieniamy tylko opacity
      }}
      transition={{
        duration: 0.5,
        delay: delay, // Ustawienie opóźnienia
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
