import { Box, Typography, Button } from "@mui/material"
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

    const defaultNoOfImages = 8
    const [visibleImages, setVisibleImages] = useState([])

    useEffect(() => {
        const arr = []
        for (let i = 0; i < defaultNoOfImages; i++) {
            arr.push(works[i])
        }
        setVisibleImages(arr);
    }, [])

    return (
        <Box className={classes.carousel} id="works">
            <Typography variant="h3" className={classes.worksTitle} align="center" sx={{ fontWeight: 300, textTransform: 'uppercase' }}>
                Works
            </Typography>
            {/* <IconButton onClick={handleLeftClick}> */}
            {/*     <ArrowLeftSharpIcon /> */}
            {/* </IconButton> */}
            <Box className={classes.carouselBox} ref={carousel}>
                <Box className={classes.carouselImageBox}>
                    {visibleImages.map(({ img, alt, id }) => (
                        <img src={img} key={id} id={id} alt={alt} className={classes.carouselImage} />
                    ))}
                </Box>
                <Box className={classes.carouselImageBox}>
                    {visibleImages.map(({ img, alt, id }) => (
                        <img src={img} key={id} id={id} alt={alt} className={classes.carouselImage} />
                    ))}
                </Box>
            </Box>
            {/* <IconButton onClick={handleRightClick}> */}
            {/*     <ArrowRightSharpIcon /> */}
            {/* </IconButton> */}
            <Box container align="right">
                <Button href="/works" variant="contained" className={classes.loadMoreButton}>View All</Button>
            </Box>
        </Box>
    )
}

export default Carousel
