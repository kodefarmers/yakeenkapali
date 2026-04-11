import { Box } from "@mui/material"
export const Project3 = () => {
 const images = [
  "/images/srp-01.png",
  "/images/srp-02.png",
  "/images/srp-03.png",
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