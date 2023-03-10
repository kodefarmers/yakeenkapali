import { Box, Typography, Button, Stack } from "@mui/material"
import carouselStyles from "../../styles/carouselStyles"
// import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';
// import ArrowLeftSharpIcon from '@mui/icons-material/ArrowLeftSharp';
import { useEffect, useRef, useState } from "react";

const Carousel = ({ works }) => {
    const { classes } = carouselStyles()
    const carousel = useRef()
    // const [firstImageWidth, setFirstImageWidth] = useState()
    //
    // const handleLeftClick = () => {
    //     carousel.current.scrollLeft += -firstImageWidth
    // }
    //
    // const handleRightClick = () => {
    //     carousel.current.scrollLeft += firstImageWidth
    // }
    //
    // useEffect(() => {
    //     setFirstImageWidth(carousel.current.childNodes[0].clientWidth)
    // }, [])

    return (
        <Box className={classes.carousel} id="works">
            <Box className={classes.carouselWrapper}>
                <Typography variant="h3" className={classes.worksTitle} align="center" sx={{ fontWeight: 300, textTransform: 'uppercase' }}>
                    Works
                </Typography>
                {/* <IconButton onClick={handleLeftClick}> */}
                {/*     <ArrowLeftSharpIcon /> */}
                {/* </IconButton> */}
                <Box className={classes.carouselBox} ref={carousel}>
                    <Box className={classes.carouselImageBox}>
                        {works.map(({ img, alt, id }) => (
                            <img src={img} key={id} id={id} alt={alt} className={classes.carouselImage} />
                        ))}
                    </Box>
                    <Box className={classes.carouselImageBox}>
                        {works.map(({ img, alt, id }) => (
                            <img src={img} key={id} id={id} alt={alt} className={classes.carouselImage} />
                        ))}
                    </Box>
                </Box>
            </Box>
            {/* <IconButton onClick={handleRightClick}> */}
            {/*     <ArrowRightSharpIcon /> */}
            {/* </IconButton> */}
            <Stack direction="row" justifyContent="end">
                <Button href="/works" variant="contained" className={classes.loadMoreButton}>View in new page</Button>
            </Stack>
        </Box>
    )
}

export default Carousel
