// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

const generateRandomStars = (count, width, height) => {
  return Array.from({ length: count }).map(() => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.8 + 0.2,
  }));
};

const getSkyColor = (hour) => {
  if (hour >= 6 && hour < 12) {
    return "linear-gradient(180deg,rgb(2, 68, 143),rgb(3, 4, 109))";    

  } else if (hour >= 12 && hour < 18) {
    return "linear-gradient(180deg,rgb(12, 53, 102),rgb(9, 0, 70))";

  } else if (hour >= 18 && hour < 20) {
    return "linear-gradient(180deg,rgb(10, 5, 38),rgb(29, 1, 46))";

  } else {
    return "linear-gradient(180deg,rgb(14, 0, 44),rgb(6, 0, 15))";

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
          }}
        />
      ))}
    </Box>
  );
};

export default StarryBackground;
