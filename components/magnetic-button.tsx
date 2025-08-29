"use client";
import { useRef } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function MagneticButton({ children, className = "", href, onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width/2);
    const y = e.clientY - (rect.top + rect.height/2);
    el.style.transform = `translate(${x*0.08}px, ${y*0.08}px)`;
  };
  
  const onLeave = () => { 
    if (ref.current) ref.current.style.transform = "translate(0,0)"; 
  };

  const commonProps = {
    ref: ref as any,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    className: `relative transition-colors ${className}`,
  };

  if (href) {
    return (
      <a
        {...commonProps}
        href={href}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      {...commonProps}
      onClick={onClick}
    >
      {children}
    </button>
  );
}