import { Box, Grid, Typography } from "@mui/material"
import aboutStyles from "../../styles/aboutStyles"
import image from '../../assets/paubha_logo.png'

const About = () => {
    const { classes } = aboutStyles()

    return (
        <Box className={classes.about} id="about">
            <Grid container spacing={2} justifyContent="space-between" className={classes.aboutGrid}>
                <Grid xs={12} md={4} item={true} order={{ xs: 2, sm: 2, md: 1 }}>
                    <Box className={classes.aboutBoxLeft}>
                        <Typography variant='overline' className={classes.aboutSubtitle}>
                            PAUBHA
                        </Typography>
                        <Typography variant='h4' className={classes.aboutTitle}>
                            The name's Kapali. Yakeen Kapali.
                        </Typography>
                        <Typography variant="subtitle2" className={classes.aboutDescription}>
                            I'm a brown kid from Nepal. I'm young. I love handcarfted stuff.
                        </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} md={7} item={true} className={classes.aboutRight} order={{ xs: 1, sm: 1, md: 2 }}>
                    <img src={image} alt="" className={classes.aboutImage} />
                </Grid>

            </Grid>
        </Box>
    )
}

export default About
