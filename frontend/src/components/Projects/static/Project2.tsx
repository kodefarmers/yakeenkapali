import { Box } from "@mui/material"
export const Project2 = () => {
 const images = [
  "/images/wpx-01.png",
  "/images/wpx-02.png",
  "/images/wpx-03.png",
  "/images/wpx-04.png",
  "/images/wpx-05.png",
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