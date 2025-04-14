import { Box } from "@mui/material"
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub, FaMoon } from "react-icons/fa"
import "./styles.css"

const AvatarComp = () => {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/guilherme_rios_03/", "_blank")
  }

  const handleGithubClick = () => {
    window.open("https://github.com/guilhermeprog3", "_blank")
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:guilhermeriosprog@gmail.com"
  }

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/guilherme-rios-dev/", "_blank")
  }

  return (
    <Box
      className="container"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        padding: 4,
        borderRadius: "16px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a1a2e",
          border: "4px solid #64ffda",
          boxShadow: "0px 4px 20px rgba(100, 255, 218, 0.5)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <FaMoon size={160} color="#64ffda" />
      </Box>

      <Box
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          backgroundColor: "#64ffda",
          opacity: 0.1,
          filter: "blur(20px)",
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          animation: "rotate 20s linear infinite",
          "@keyframes rotate": {
            "0%": {
              transform: "rotate(0deg)",
            },
            "100%": {
              transform: "rotate(360deg)",
            },
          },
        }}
      >
        <Box
          className="icon instagram"
          onClick={handleInstagramClick}
          sx={{
            position: "absolute",
            top: "-25px",
            left: "50%",
            transform: "translateX(-50%)",
            width: 50,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            backgroundColor: "#1a1a2e",
            color: "#ffffff",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
            transition: "all 0.3s ease-in-out",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#E1306C",
              color: "#ffffff",
              transform: "translateX(-50%) scale(1.1)",
              boxShadow: "0px 6px 16px rgba(225, 48, 108, 0.5)",
            },
          }}
        >
          <FaInstagram size={24} />
        </Box>

        <Box
          className="icon linkedin"
          onClick={handleLinkedinClick}
          sx={{
            position: "absolute",
            top: "50%",
            right: "-25px",
            transform: "translateY(-50%)",
            width: 50,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            backgroundColor: "#1a1a2e",
            color: "#ffffff",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
            transition: "all 0.3s ease-in-out",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#0077B5",
              color: "#ffffff",
              transform: "translateY(-50%) scale(1.1)",
              boxShadow: "0px 6px 16px rgba(0, 119, 181, 0.5)",
            },
          }}
        >
          <FaLinkedin size={24} />
        </Box>

        <Box
          className="icon email"
          onClick={handleEmailClick}
          sx={{
            position: "absolute",
            bottom: "-25px",
            left: "50%",
            transform: "translateX(-50%)",
            width: 50,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            backgroundColor: "#1a1a2e",
            color: "#ffffff",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
            transition: "all 0.3s ease-in-out",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#D44638",
              color: "#ffffff",
              transform: "translateX(-50%) scale(1.1)",
              boxShadow: "0px 6px 16px rgba(212, 70, 56, 0.5)",
            },
          }}
        >
          <FaEnvelope size={24} />
        </Box>
        <Box
          className="icon github"
          onClick={handleGithubClick}
          sx={{
            position: "absolute",
            top: "50%",
            left: "-25px",
            transform: "translateY(-50%)",
            width: 50,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            backgroundColor: "#1a1a2e",
            color: "#ffffff",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
            transition: "all 0.3s ease-in-out",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#181717",
              color: "#ffffff",
              transform: "translateY(-50%) scale(1.1)",
              boxShadow: "0px 6px 16px rgba(24, 23, 23, 0.5)",
            },
          }}
        >
          <FaGithub size={24} />
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: -2,
        }}
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              width: "2px",
              height: "2px",
              backgroundColor: "white",
              borderRadius: "50%",
              animation: `twinkle ${1 + Math.random() * 3}s ease-in-out infinite alternate`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.5 + Math.random() * 0.5,
            }}
          />
        ))}
      </Box>
    </Box>
  )
}

export default AvatarComp