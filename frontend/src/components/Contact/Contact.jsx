import { Box } from "@mui/system"
import contactStyles from '../../styles/contactStyles'

const Contact = () => {

    const { classes } = contactStyles()
    return (
        <Box className={classes.contact} id="contact">
            <Box className={classes.contactBox}>
                Contact
            </Box>
        </Box>
    )
}

export default Contact
