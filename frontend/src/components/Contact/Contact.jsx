import { Box } from "@mui/system"
import contactStyles from '../../styles/contactStyles'
import image from '../../assets/yakeen_avatar.png'
import { Button, Paper, TextField } from "@mui/material"

const Contact = () => {

    const { classes } = contactStyles()
    return (
        <Box className={classes.contact} id="contact">
            <Box className={classes.contactBox}>
                <Box className={classes.contactLeft}>
                    <img src={image} alt="" className={classes.contactImage} />
                </Box>
                <Box className={classes.contactRight}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                    />
                    <TextField
                        required
                        multiline
                        rows={4}
                        id="outlined-required"
                        label="Message"
                    />
                    <Button variant="contained" className={classes.submitButton}>Send</Button>
                </Box>
            </Box >
        </Box>
    )
}

export default Contact
