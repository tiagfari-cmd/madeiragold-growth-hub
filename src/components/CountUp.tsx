import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function CountUp({ value, duration = 1800, className }: { value: string; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  const [display, setDisplay] = useState(match ? `${match[1]}0${match[3]}` : value);

  useEffect(() => {
    if (!inView || !match) {
      if (!match) setDisplay(value);
      return;
    }
    const prefix = match[1];
    const target = parseFloat(match[2]);
    const suffix = match[3];
    const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = (target * eased).toFixed(decimals);
      setDisplay(`${prefix}${v}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, match]);

  return <span ref={ref} className={className}>{display}</span>;
}