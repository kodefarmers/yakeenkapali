import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import navStyles from '../../styles/navstyles'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from "react"
import { Link } from 'react-scroll'

const Navbar = () => {
    const { classes } = navStyles()

    const pages = ['About', 'Works', 'Blog']
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
                            yakeen.
                        </Typography>
                    </Box>

                    {/* Navigation Medium */}
                    <Box className={classes.navMedium}>
                        {pages.map((page) => (
                            <Link to={page.toLowerCase()} spy={true} smooth={true} duration={500} key={page} className={classes.navButtons}>
                                <Typography>{page}</Typography>
                            </Link>
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
