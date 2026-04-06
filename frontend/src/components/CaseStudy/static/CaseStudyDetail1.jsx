import React from "react";
import { Box, Button } from "@mui/material";
import caseStudyDetailStyles from "../../../styles/caseStudyDetailStyles";
import {
  ArrowBack,
  Download,
  DownloadDoneOutlined,
  DownloadOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { caseStudy1pdf } from "../../../constants/case-study";

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
      {/* Top bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 5,
        }}
      >
        {/* Left: Back */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          <ArrowBack sx={{ fontSize: 20 }} />
          <span style={{ fontSize: 14 }}>Back</span>
        </Box>

        {/* Right: Download */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            gap: 1,
          }}
        >
          <a target="_blank" href={caseStudy1pdf}>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "#fff",
              }}
            >
              <Download sx={{ fontSize: 20, color: "#fff" }} />
            </Button>
          </a>{" "}
        </Box>
      </Box>
      {/* Images */}
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
