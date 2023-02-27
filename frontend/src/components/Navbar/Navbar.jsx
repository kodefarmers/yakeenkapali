import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import useStyles from '../../styles'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from "react"

const Navbar = () => {
    const { classes } = useStyles()
    const pages = ['Works', 'About', 'Blog']
    const [anchorElNav, setAnchorElNav] = useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <Box className={classes.logo}>
                        <Typography className={classes.title} variant="h6">
                            yakeen
                        </Typography>
                    </Box>

                    {/* Navigation Medium */}
                    <Box className={classes.navMedium}>
                        {pages.map((page) => (
                            <Button key={page} className={classes.navButtons}>
                                <Typography>{page}</Typography>
                            </Button>
                        ))}
                    </Box>

                    {/* Navigation Small */}
                    <Box className={classes.navSmall}>
                        {/* Hamburger */}

                        <IconButton
                            className={`${classes.iconButton} ${classes.hamburger}`}
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            keepMounted
                            anchorEl={anchorElNav}
                            open={Boolean(anchorElNav)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            onClose={handleCloseNavMenu}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography>{page}</Typography>
                                </MenuItem>
                            ))}
                            <MenuItem
                                onClick={handleCloseNavMenu}
                            >
                                <Typography>Contact</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box>
                        <Button className={classes.contactButton} variant="outlined">Contact</Button>
                    </Box>


                </Toolbar>
            </AppBar>
        </Box >
    )
}

export default Navbar
