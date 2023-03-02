import { AppBar, Button, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import navStyles from '../../styles/navstyles'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from "react"

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
                        <Link href="#home" className={classes.title} variant="h6">
                            yakeen.
                        </Link>
                    </Box>

                    {/* Navigation Medium */}
                    <Box className={classes.navMedium}>
                        {pages.map((page) => (
                            <Button href={`#${page.toLowerCase()}`} key={page} className={classes.navButtons}>
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
                                    <Link href={`#${page.toLowerCase()}`} className={classes.navButtons}>{page}</Link>
                                </MenuItem>
                            ))}
                            <MenuItem
                                onClick={handleCloseNavMenu}
                            >
                                <Link href="#contact" className={classes.navButtons}>Contact</Link>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box>
                        <Button className={classes.contactButton} variant="outlined" href="#contact">Contact</Button>
                    </Box>


                </Toolbar>
            </AppBar>
        </Box >
    )
}

export default Navbar
