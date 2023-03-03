import { Box } from "@mui/system"
import contactStyles from '../../styles/contactStyles'
import image from '../../assets/yakeen_avatar.png'
import { Button, Grid, TextField, Typography } from "@mui/material"

const Contact = () => {

    const { classes } = contactStyles()
    return (
        <Box className={classes.contact} id="contact">
            <Typography variant="overline" sx={{ color: 'gray' }}>Get in touch</Typography>
            <Typography variant="h5">Contact Me</Typography>
            <Grid container spacing={2} justifyContent="space-between" className={classes.contactGrid}>
                <Grid xs={12} md={4} item={true} className={classes.contactLeft} order={{ xs: 2, sm: 2, md: 1 }}>
                    <img src={image} alt="" className={classes.contactImage} />
                </Grid>

                <Grid xs={12} md={7} item={true} order={{ xs: 1, sm: 1, md: 2 }} className={classes.contactRight}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        fullWidth
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        fullWidth
                    />
                    <TextField
                        required
                        multiline
                        rows={4}
                        id="outlined-required"
                        label="Message"
                        fullWidth
                    />
                    <Button variant="contained" className={classes.submitButton} fullWidth>Send</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Contact
