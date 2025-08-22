"use client";
import { useRef } from "react";

export default function MagneticButton({ children, className="" }: any) {
  const ref = useRef<HTMLButtonElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width/2);
    const y = e.clientY - (rect.top + rect.height/2);
    el.style.transform = `translate(${x*0.08}px, ${y*0.08}px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = "translate(0,0)"; };

  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative transition-colors ${className}`}
    >
      {children}
    </button>
  );
}