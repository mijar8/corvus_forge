import React, { useEffect, useState, useRef } from 'react';
import './CursorGlow.css';

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(true);
  const glowRef = useRef(null);

  useEffect(() => {
    let cx = 0, cy = 0, tx = 0, ty = 0;
    const lerpFactor = 0.08;
    let animId;

    const handleMouseMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const handleTouchStart = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart, { once: true });

    const animateCursor = () => {
      cx += (tx - cx) * lerpFactor;
      cy += (ty - cy) * lerpFactor;
      if (glowRef.current) {
        glowRef.current.style.left = cx + 'px';
        glowRef.current.style.top = cy + 'px';
      }
      animId = requestAnimationFrame(animateCursor);
    };

    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isVisible) return null;

  return <div className="cursor-glow" ref={glowRef}></div>;
}
