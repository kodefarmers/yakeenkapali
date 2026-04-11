import { Box } from "@mui/material"
export const Project1 = () => {
 const images = [
  "/images/appathon-01.png",
  "/images/appathon-02.png",
  "/images/appathon-03.png",
  "/images/appathon-04.png",
  "/images/appathon-05.png",
  "/images/appathon-06.png",
  "/images/appathon-07.png",
  "/images/appathon-08.png",
];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`project1-${index}`}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "12px",
            objectFit: "cover",
            display: "block",
          }}
        />
      ))}
    </Box>
  );
};