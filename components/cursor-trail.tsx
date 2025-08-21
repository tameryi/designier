"use client";
import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    let w = (c.width = window.innerWidth);
    let h = (c.height = window.innerHeight);
    const points: {x:number;y:number;t:number}[] = [];
    const MAX = 24;       // iz uzunluğu
    const LIFE = 900;     // ms

    const onMove = (e: MouseEvent) => {
      points.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      if (points.length > MAX) points.shift();
    };
    const onResize = () => { w = c.width = window.innerWidth; h = c.height = window.innerHeight; };

    let raf = 0;
    const draw = () => {
      raf = requestAnimationFrame(draw);
      const now = performance.now();
      ctx.clearRect(0,0,w,h);

      // arka planı tıklamayı kapatmasın
      c.style.pointerEvents = "none";

      // çizim
      for (let i = 1; i < points.length; i++) {
        const a = points[i-1], b = points[i];
        const age = (now - b.t) / LIFE;
        if (age > 1) continue;
        const alpha = 1 - age;

        const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        grad.addColorStop(0, `rgba(255,99,171,${0.18*alpha})`);
        grad.addColorStop(1, `rgba(99,139,255,${0.18*alpha})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 6 * alpha;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // eski noktaları at
      while (points[0] && now - points[0].t > LIFE) points.shift();
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}