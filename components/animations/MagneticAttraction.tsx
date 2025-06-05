'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

interface MagneticAttractionProps {
  selector: string;
  strength?: number;
  threshold?: number;
}

export default function MagneticAttraction({
  selector,
  strength = 0.3,
  threshold = 100,
}: MagneticAttractionProps) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);
    if (!elements.length) return;

    const handleMouseMove = (e: MouseEvent) => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < threshold) {
          const moveX = dx * strength;
          const moveY = dy * strength;

          gsap.to(el, {
            x: moveX,
            y: moveY,
            scale: 1.05,
            duration: 0.3,
            ease: 'power3.out',
          });
        } else {
          gsap.to(el, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: 'power3.out',
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [selector, strength, threshold]);

  return null;
}
