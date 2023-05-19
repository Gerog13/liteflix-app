"use client"
import { useState } from "react";

const Reproduce = ({ size = "large", ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const circleColor = isHovered ? "#64EEBC" : "#242424";
  const strokeColor = isHovered ? "#242424" : "#fff";

  const getCircleProps = () => {
    return {
      cx: size === "large" ? 24 : 12,
      cy: size === "large" ? 24 : 12,
      r: size === "large" ? 23.5 : 11.5,
      fill: circleColor,
      stroke: strokeColor,
      fillOpacity: size === "large" ? 0.5 : 0.5,
    };
  };

  const getPathProps = () => {
    return {
      fill: "#242424",
      fillRule: "evenodd",
      stroke: strokeColor,
      d: size === "large"
        ? "M31.978 24.324 19.2 15.6v16.8l12.778-8.076Z"
        : "M15.99 12.162 9.6 7.8v8.4l6.39-4.038Z",
      clipRule: "evenodd",
    };
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size === "large" ? 48 : 24}
      height={size === "large" ? 48 : 24}
      fill="none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <circle {...getCircleProps()} />
      <path {...getPathProps()} />
    </svg>
  );
};

export default Reproduce;
