// components/StarCanvas.jsx
import { useEffect, useRef } from "react";

const StarCanvas = ({ parentRef }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const drawStars = () => {
      const width = (canvas.width = window.innerWidth);
      const height = (canvas.height =
        parentRef?.current?.offsetHeight || window.innerHeight);

      const numStars = 1500;
      const colors = ["white", "#061E24"];
      const stars = [];

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          glow: Math.random() * 20 + 10,
        });
      }

      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.shadowColor = star.color;
        ctx.shadowBlur = star.glow;
        ctx.fillStyle = star.color;
        ctx.fill();
      });
    };

    drawStars();

    const handleResize = () => drawStars();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [parentRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default StarCanvas;
