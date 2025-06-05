
import { useState, useEffect } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
  startOnMount?: boolean;
}

export const useCountUp = ({ end, duration = 2000, startOnMount = true }: UseCountUpProps) => {
  const [count, setCount] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!startOnMount || isStarted) return;
    
    setIsStarted(true);
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(end * easeOutExpo));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, startOnMount, isStarted]);

  return count;
};
