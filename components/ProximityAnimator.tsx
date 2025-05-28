"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ProximityAnimatorProps {
  selector: string;
  threshold?: number; // pixels of proximity to trigger
}

export default function ProximityAnimator({
  selector,
  threshold = 150,
}: ProximityAnimatorProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    ref.current = document.querySelector(selector) as HTMLElement;
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = ref.current!.getBoundingClientRect();
      const distance = Math.sqrt(
        Math.pow(e.clientX - (rect.left + rect.width / 2), 2) +
          Math.pow(e.clientY - (rect.top + rect.height / 2), 2)
      );

      if (distance < threshold) {
        gsap.to(ref.current, {
          scale: 1.05,
          rotateZ: 3,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(ref.current, {
          scale: 1,
          rotateZ: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [selector, threshold]);

  return null;
}
