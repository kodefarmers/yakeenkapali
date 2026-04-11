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
                            I'm Yakeen
                        </Typography>
                        <Typography variant='h4' className={classes.heroTitle}>
                            Product Designer
                        </Typography>
                        <Typography variant="subtitle2" className={classes.heroDescription}>
                            Experienced in leading research, product ideation, and building scalable design architectures for data-heavy, workflow-driven environments.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Hero
