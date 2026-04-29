import {
  Box,
  Modal,
  Backdrop,
  Fade,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import works from "../../assets/works/works";
import workStyles from "../../styles/workstyles";
import imageModalStyles from "../../styles/imageModalStyles";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Works = () => {
  const { classes } = workStyles();
  const { classes: modalClasses } = imageModalStyles();

  const imageListSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const imageListMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  // Modal
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = works.length;

  const handleImageClick = (idx) => {
    setCurrentIndex(idx);
    setOpen(true);
  };

  const handleRightClick = () => {
    setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const handleLeftClick = () => {
    setCurrentIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const handleClose = () => setOpen(false);

  return (
    <Box className={classes.works} id="works">
      {/* All images shown */}
      <ImageList
        variant="masonry"
        cols={imageListSm ? 1 : imageListMd ? 4 : 2}
        gap={8}
      >
        {works.map((work, idx) => (
          <ImageListItem key={work.alt} sx={{ cursor: "pointer" }}>
            <img
              src={work.img}
              alt={work.alt}
              loading="lazy"
              onClick={() => handleImageClick(idx)}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "relative",
              width: "90vw",
              height: "90vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#111",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            {/* Cross Button */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                color: "#fff",
                zIndex: 3,
              }}
            >
              ✕
            </IconButton>

            {/* Left Arrow */}
            <IconButton
              onClick={handleLeftClick}
              sx={{
                position: "absolute",
                left: 10,
                color: "#fff",
                zIndex: 2,
              }}
            >
              <ArrowCircleLeftIcon fontSize="large" />
            </IconButton>

            {/* Image */}
            <Box
              component="img"
              src={works[currentIndex].img}
              alt={works[currentIndex].alt}
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />

            {/* Right Arrow */}
            <IconButton
              onClick={handleRightClick}
              sx={{
                position: "absolute",
                right: 10,
                color: "#fff",
                zIndex: 2,
              }}
            >
              <ArrowCircleRightIcon fontSize="large" />
            </IconButton>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Works;