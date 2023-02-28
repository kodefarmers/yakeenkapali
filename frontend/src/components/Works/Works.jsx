import { Box, ImageList, ImageListItem, Typography } from "@mui/material"
import works from "../../assets/works/works"
import workStyles from "../../styles/workstyles"

const Works = () => {
    const { classes } = workStyles()

    return (
        <Box className={classes.works} id="works">
            <Typography variant="h3" className={classes.worksTitle} align="center">
                Works
            </Typography>
            <ImageList variant="masonry" cols={3} gap={8}>
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
