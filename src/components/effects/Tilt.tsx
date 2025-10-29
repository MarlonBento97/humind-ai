import { PropsWithChildren, useRef } from "react";

type Props = PropsWithChildren<{
  className?: string;
  maxTilt?: number; // deg
}>;

const Tilt = ({ children, className, maxTilt = 8 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 2 - 1; // -1 .. 1
    const py = (y / rect.height) * 2 - 1;
    const rx = (-py * maxTilt).toFixed(2);
    const ry = (px * maxTilt).toFixed(2);
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 200ms ease" }}
    >
      {children}
    </div>
  );
};

export default Tilt;

