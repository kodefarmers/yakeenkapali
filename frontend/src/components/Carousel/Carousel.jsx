import { Box, Typography, Button } from "@mui/material";
import carouselStyles from "../../styles/carouselStyles";
import { useEffect, useRef, useState } from "react";

const Carousel = ({ works }) => {
  const { classes } = carouselStyles();
  const carousel = useRef();

  const defaultNoOfImages = 8;
  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < defaultNoOfImages; i++) {
      arr.push(works[i]);
    }
    setVisibleImages(arr);
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10 },
        px: { xs: 2, sm: 4, md: 6 },
        maxWidth: "100%",
      }}
      id="works"
    >
      <Typography
        variant="h4"
        fontWeight={500}
        sx={{
          mb: 4,
          letterSpacing: "-0.5px",
          position: "relative",
          display: "inline-block",
          "&::after": {
            content: '""',
            display: "block",
            mt: 0.75,
            width: 40,
            height: 4,
            borderRadius: 2,
            bgcolor: "primary.main",
          },
        }}
      >
        Brandings
      </Typography>
      <Box className={classes.carouselBox} ref={carousel}>
        <Box className={classes.carouselImageBox}>
          {visibleImages.map(({ img, alt, id }) => (
            <img
              src={img}
              key={id}
              id={id}
              alt={alt}
              className={classes.carouselImage}
            />
          ))}
        </Box>
        <Box className={classes.carouselImageBox}>
          {visibleImages.map(({ img, alt, id }) => (
            <img
              src={img}
              key={id}
              id={id}
              alt={alt}
              className={classes.carouselImage}
            />
          ))}
        </Box>
      </Box>
      {/* <IconButton onClick={handleRightClick}> */}
      {/*     <ArrowRightSharpIcon /> */}
      {/* </IconButton> */}
      <Box container align="right">
        <Button
          href="/works"
          variant="contained"
          className={classes.loadMoreButton}
        >
          View All
        </Button>
      </Box>
    </Box>
  );
};

export default Carousel;
