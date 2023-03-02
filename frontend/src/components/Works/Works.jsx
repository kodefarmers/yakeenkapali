import { Box, ImageList, ImageListItem, Typography, useMediaQuery } from "@mui/material"
import works from "../../assets/works/works"
import workStyles from "../../styles/workstyles"

const Works = () => {
    const { classes } = workStyles()
    const imageListSm = useMediaQuery((theme) => theme.breakpoints.down('sm'))
    const imageListMd = useMediaQuery((theme) => theme.breakpoints.up('md'))

    return (
        <Box className={classes.works} id="works">
            <Typography variant="h3" className={classes.worksTitle} align="center">
                Works
            </Typography>
            <ImageList variant="masonry" cols={imageListSm ? 1 : (imageListMd ? 3 : 2)} gap={8} >
                {works.map((work) => (
                    <ImageListItem key={work.alt}>
                        <img src={work.img} alt={work.alt} loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

export default Works
