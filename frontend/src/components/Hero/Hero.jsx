import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import Grid from '@mui/material/Grid';
import heroStyles from "../../styles/herostyles"
import image from '../../assets/yakeen.png'

const Hero = () => {
    const { classes } = heroStyles()

    return (
        <Box className={classes.hero} id="home">
            <Grid container spacing={2}>
                <Grid xs={12} md={7} item={true} className={classes.heroLeft}>
                    <img src={image} alt="" className={classes.heroImage} />
                </Grid>
                <Grid xs={12} md={4} item={true}>
                    <Box className={classes.heroBoxRight}>
                        <Typography variant='overline' className={classes.heroSubtitle}>
                            yakeen hoki chakin ho?
                        </Typography>
                        <Typography variant='h4' className={classes.heroTitle}>
                            Brand Identity and UI Designer
                        </Typography>
                        <Typography variant="subtitle2" className={classes.heroDescription}>
                            Over the past 9 years,
                            as an art director and designer,
                            I’ve worked with big companies
                            and up-and-coming startups to successfully h
                            elp them reach their full potential and attract new customers.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Hero
