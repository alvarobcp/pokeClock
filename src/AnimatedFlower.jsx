import React, { useEffect, useState } from "react";

const RealisticFlower = ({
  petalColor = "#f48fb1",
  centerColor = "#ffeb3b",
  size = "100%",
  petalCount = 10,
  className = "",
}) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const petals = Array.from({ length: petalCount }, (_, i) => {
    const angle = (360 / petalCount) * i;
    return (
      <ellipse
        key={i}
        cx="50"
        cy="30"
        rx="6"
        ry="18"
        fill={petalColor}
        transform={`rotate(${angle} 50 50)`}
        style={{
          transformOrigin: "50% 50%",
          opacity: animated ? 1 : 0,
          transform: animated
            ? `rotate(${angle}deg) scale(1)`
            : `rotate(${angle}deg) scale(0)`,
          transition: `transform 0.5s ease-out ${i * 0.1}s, opacity 0.5s ease-out ${i * 0.1}s`,
        }}
      />
    );
  });

  return (
    <svg
      className={`realistic-flower ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", background: "transparent", cursor: "pointer" }}
    >
      <g className="flower-group">
        {petals}
        <circle cx="50" cy="50" r="6" fill={centerColor} />
      </g>
    </svg>
  );
};

export default RealisticFlower;