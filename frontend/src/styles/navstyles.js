import { makeStyles } from 'tss-react/mui'

const navStyles = makeStyles()((theme) => {
    return {
        title: {
            margin: theme.spacing(0, 0.5, 0),
            fontStyle: 'italic',
            fontWeight: 800,
            letterSpacing: '.1rem',
            color: 'white',
            textDecoration: 'none',
        },
        logo: {
            flexGrow: 1,
        },
        iconButton: {
            ':focus': {
                outline: 'none'
            }
        },
        navButtons: {
            color: 'white',
            textDecoration: 'none',
            ":focus": {
                outline: 'none'
            },
            cursor: 'pointer',
            textTransform: 'uppercase'
        },
        navMedium: {
            display: 'flex',
            flexGrow: 1,
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            },
        },
        navSmall: {
            display: 'none',
            [theme.breakpoints.down('sm')]: {
                display: 'flex'
            },
        },
        hamburger: {
            display: 'none',
            [theme.breakpoints.down('sm')]: {
                display: 'flex'
            },
        },
        contactButton: {
            ":focus": {
                outline: 'none'
            },
            color: 'white',
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            },
        },
        scrollLink: {
            color: 'white',
            textDecoration: 'none',
        }
    }
})

export default navStyles
