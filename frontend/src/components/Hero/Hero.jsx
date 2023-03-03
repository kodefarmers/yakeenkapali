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
                            Minimalistic approach to Creative thinking
                        </Typography>
                        <Typography variant='h4' className={classes.heroTitle}>
                            Brand Identity and UI Designer
                        </Typography>
                        <Typography variant="subtitle2" className={classes.heroDescription}>
                            Throughout my 3+ years of the design journey, I have been driven by a passion for creativity and problem-solving, as well as a commitment to delivering the highest level of quality and service to my clients.
                            I am constantly seeking new challenges and opportunities to learn and grow, and am excited to see where the field of graphic design will take me in the future.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Hero
