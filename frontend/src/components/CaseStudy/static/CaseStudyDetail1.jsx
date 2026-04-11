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
  "/images/case01.png",
  "/images/case02.png",
  "/images/case03.png",
  "/images/case04.png",
  "/images/case05.png",
  "/images/case06.png",
  "/images/case07.png",
  "/images/case08.png",
  "/images/case09.png",
  "/images/case10.png",
  "/images/case11.png",
  "/images/case12.png",
  "/images/case13.png",
  "/images/case14.png",
  "/images/case15.png",
  "/images/case16.png",
  "/images/case17.png",
  "/images/case18.png",
  "/images/case19.png",
  "/images/case20.png",
  "/images/case21.png",
  "/images/case22.png",
  "/images/case23.png",
  "/images/case24.png",
  "/images/case25.png",
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
