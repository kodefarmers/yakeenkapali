import React from "react";
import { Box } from "@mui/material";
import caseStudyDetailStyles from "../../../styles/caseStudyDetailStyles";

// Replace these with your actual images in /public/images
const images = [
  "/images/hero.png",
  "/images/screen1.png",
  "/images/screen2.png",
  "/images/screen3.png",
  "/images/screen4.png",
  "/images/screen5.png",
  "/images/screen6.png",
  "/images/screen7.png",
  "/images/screen8.png",
  "/images/screen9.png",
  "/images/screen10.png",
  "/images/screen11.png",
  "/images/screen12.png",
  "/images/screen13.png",
];

const CaseStudyDetail1 = () => {
  return (
    <Box sx={caseStudyDetailStyles.container}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`case-study-${index}`}
          style={caseStudyDetailStyles.image}
        />
      ))}
    </Box>
  );
};

export default CaseStudyDetail1;