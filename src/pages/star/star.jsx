// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

const generateRandomStars = (count, width, height) => {
  return Array.from({ length: count }).map(() => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.8 + 0.2,
    animationDelay: `${Math.random() * 5}s`,
  }));
};

const getSkyColor = (hour) => {
  if (hour >= 6 && hour < 12) {
    return "linear-gradient(180deg, rgb(2, 34, 71), rgb(9, 12, 158))";
  } else if (hour >= 12 && hour < 15) {
    return "linear-gradient(180deg, rgba(12, 53, 102, 1), rgb(8, 2, 48))";
  } else if (hour >= 15 && hour < 20) {
    return "linear-gradient(180deg, rgba(10, 5, 38, 1), rgb(68, 4, 108))";
  } else {
    return "linear-gradient(180deg, rgb(0, 5, 44), rgba(6, 0, 15, 1))";
  }
};

// eslint-disable-next-line react/prop-types
const StarryBackground = ({ starCount = 150 }) => {
  const [skyColor, setSkyColor] = useState(getSkyColor(new Date().getHours()));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const hour = new Date().getHours();
      setSkyColor(getSkyColor(hour));
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const stars = generateRandomStars(starCount, window.innerWidth, window.innerHeight);

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        overflow: "hidden",
        background: skyColor,
        zIndex: 0,
        pointerEvents: "none",
        transition: "background 1s ease-in-out",
      }}
    >
      {stars.map((star, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: `${star.y}px`,
            left: `${star.x}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: "50%",
            backgroundColor: "white",
            opacity: star.opacity,
            animation: `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out ${star.animationDelay}`,
          }}
        />
      ))}
    </Box>
  );
};

export default StarryBackground;
