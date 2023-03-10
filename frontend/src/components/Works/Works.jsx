import { Box, Button, Grid, ImageList, ImageListItem, Typography, useMediaQuery } from "@mui/material"
import { useEffect, useState } from "react"
import works from "../../assets/works/works"
import workStyles from "../../styles/workstyles"

const Works = () => {
    const { classes } = workStyles()
    const imageListSm = useMediaQuery((theme) => theme.breakpoints.down('sm'))
    const imageListMd = useMediaQuery((theme) => theme.breakpoints.up('md'))

    // Load More Button Functionality
    const defaultNoOfImages = 8
    const [index, setIndex] = useState(0)
    const [visibleImages, setVisibleImages] = useState([])

    const handleLoadMoreWorks = () => {
        setIndex(index + 1)
    }

    useEffect(() => {
        const numberOfImages = defaultNoOfImages * (index + 1)
        const arr = []
        for (let i = 0; i < works.length; i++) {
            if (i < numberOfImages)
                arr.push(works[i])
        }
        setVisibleImages(arr);
    }, [index])

    return (
        <Box className={classes.works} id="works">
            {/* <Typography variant="h3" className={classes.worksTitle} align="center"> */}
            {/*     Works */}
            {/* </Typography> */}
            <ImageList variant="masonry" cols={imageListSm ? 1 : (imageListMd ? 4 : 2)} gap={8} >
                {visibleImages.map((work) => (
                    <ImageListItem key={work.alt}>
                        <img src={work.img} alt={work.alt} loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>
            <Grid container justifyContent="center">
                {works.length != visibleImages.length ? (
                    <Button variant="contained" onClick={handleLoadMoreWorks} className={classes.loadMoreButton}>More</Button>
                ) : (
                    <Button variant="contained" disabled className={classes.loadMoreButton}>You’ve reached the end of the list</Button>
                )}
            </Grid>

        </Box>
    )
}

export default Works
