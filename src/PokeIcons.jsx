

import React, { useEffect, useState } from "react";

const usePopIn = (delay = 0) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return visible;
};

const iconStyle = (visible) => ({
  transform: visible ? "scale(1) rotate(0deg)" : "scale(0.4) rotate(-90deg)",
  opacity: visible ? 1 : 0,
  transformOrigin: "50% 50%",
  transition:
    "transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.8s ease-out",
});

export const ClassicBall = ({size = "80%" }) => {
    const visible = usePopIn();
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" style={iconStyle(visible)}>
        <circle cx="50" cy="50" r="45" fill="white" stroke="black" strokeWidth="3" />
        <path d="M10 50 A40 40 0 0 1 90 50" fill="#FF5252" />
        <rect x="10" y="45" width="80" height="4" fill="black" />
        <circle cx="50" cy="50" r="12" fill="white" stroke="black" strokeWidth="3" />
      </svg>
    );
  };

  export const MasterBall = ({ size = "80%" }) => {
    const visible = usePopIn();
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" style={iconStyle(visible)}>
        <circle cx="50" cy="50" r="45" fill="white" stroke="black" strokeWidth="3" />
        <path d="M10 50 A40 40 0 0 1 90 50" fill="#7C4DFF" />
        <rect x="10" y="45" width="80" height="4" fill="black" />
        <circle cx="50" cy="50" r="12" fill="white" stroke="black" strokeWidth="3" />
      </svg>
    );
  };
  
  export const SuperBall = ({ size = "80%" }) => {
    const visible = usePopIn();
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" style={iconStyle(visible)}>
        <circle cx="50" cy="50" r="45" fill="white" stroke="black" strokeWidth="3" />
        <path d="M10 50 A40 40 0 0 1 90 50" fill="#2962FF" />
        <rect x="10" y="45" width="80" height="4" fill="black" />
        <circle cx="50" cy="50" r="12" fill="white" stroke="black" strokeWidth="3" />
       
      <line x1="28" y1="22" x2="42" y2="36" stroke="#FF5252" strokeWidth="5" />
      <line x1="72" y1="22" x2="58" y2="36" stroke="#FF5252" strokeWidth="5" />
 
      </svg>
    );
  };
  
  export const UltraBall = ({ size = "80%" }) => {
    const visible = usePopIn();
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" style={iconStyle(visible)}>
        <circle cx="50" cy="50" r="45" fill="white" stroke="black" strokeWidth="3" />
        <path d="M10 50 A40 40 0 0 1 90 50" fill="#212121" />
        <rect x="10" y="45" width="80" height="10" fill="#FFD740" />
        <circle cx="50" cy="50" r="12" fill="white" stroke="#212121" strokeWidth="3" />
        
      </svg>
    );
  };

  export const HonorBall = ({ size = "80%" }) => {
     const visible = usePopIn();
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" style={iconStyle(visible)}>
        <circle cx="50" cy="50" r="45" fill="white" stroke="black" strokeWidth="3" />
        <rect x="10" y="45" width="80" height="10" fill="#F44336" />
        <circle cx="50" cy="50" r="12" fill="white" stroke="#F44336" strokeWidth="3" />
      </svg>
    );
  };
  

export * as PokeIcons from "./PokeIcons";