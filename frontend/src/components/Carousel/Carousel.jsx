import { Box, IconButton } from "@mui/material"
import carouselStyles from "../../styles/carouselStyles"
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';
import ArrowLeftSharpIcon from '@mui/icons-material/ArrowLeftSharp';
import { useEffect, useRef, useState } from "react";

const Carousel = ({ works }) => {
    const { classes } = carouselStyles()
    const carousel = useRef()
    const [firstImageWidth, setFirstImageWidth] = useState()

    const handleLeftClick = () => {
        carousel.current.scrollLeft += -firstImageWidth
    }

    const handleRightClick = () => {
        carousel.current.scrollLeft += firstImageWidth
    }

    useEffect(() => {
        setFirstImageWidth(carousel.current.childNodes[0].clientWidth)
    }, [])

    return (
        <Box className={classes.carousel}>
            <IconButton onClick={handleLeftClick}>
                <ArrowLeftSharpIcon />
            </IconButton>
            <Box className={classes.carouselBox} ref={carousel}>
                {works.map(({ img, alt, id }) => (
                    <img src={img} key={id} id={id} alt={alt} loading="lazy" className={classes.carouselImage} />
                ))}
            </Box>
            <IconButton onClick={handleRightClick}>
                <ArrowRightSharpIcon />
            </IconButton>
        </Box>
    )
}

export default Carousel
