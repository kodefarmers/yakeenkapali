import { Box, Modal, Backdrop, Fade, Button, Grid, ImageList, ImageListItem, IconButton, useMediaQuery } from "@mui/material"
import { useEffect, useState } from "react"
import works from "../../assets/works/works"
import workStyles from "../../styles/workstyles"
import imageModalStyles from '../../styles/imageModalStyles'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

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

    // Modal
    const { classes: modalClasses } = imageModalStyles()

    const [open, setOpen] = useState(false)
    const [selectedWork, setSelectedWork] = useState(1)
    const [currentIndex, setCurrentIndex] = useState(selectedWork - 1)
    const length = works.length

    const handleImageClick = (e) => {
        setCurrentIndex(e.target.id - 1)
        handleOpen(true)
    }

    const handleRightClick = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
    }

    const handleLeftClick = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
    }

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Box className={classes.works} id="works">
            <ImageList variant="masonry" cols={imageListSm ? 1 : (imageListMd ? 4 : 2)} gap={8} >
                {visibleImages.map((work) => (
                    <ImageListItem key={work.alt} sx={{ cursor: 'pointer' }}>
                        <img src={work.img} alt={work.alt} id={work.id} loading="lazy" onClick={handleImageClick} />
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

            {/* Modal */}
            <Box className={modalClasses.modalWrapper}>
                <Box className={modalClasses.modal}>
                    <Modal open={open} onClose={handleClose} slots={{ backdrop: Backdrop }}>
                        <Fade in={open}>
                            <Box className={modalClasses.modalBox}>
                                <IconButton onClick={handleLeftClick} className={modalClasses.iconButton}>
                                    <ArrowCircleLeftIcon fontSize="large" />
                                </IconButton>
                                <img src={works[currentIndex].img} alt={works[currentIndex].alt} id={works[currentIndex].id} className={modalClasses.modalImage} />
                                <IconButton onClick={handleRightClick} className={modalClasses.iconButton}>
                                    <ArrowCircleRightIcon fontSize="large" />
                                </IconButton>
                            </Box>
                        </Fade>
                    </Modal>
                </Box>
            </Box>
        </Box>
    )
}

export default Works
