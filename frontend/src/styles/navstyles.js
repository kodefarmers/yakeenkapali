import { makeStyles } from 'tss-react/mui'

const navStyles = makeStyles()((theme) => {
    return {
        title: {
            margin: theme.spacing(0, 0.5, 0),
            fontStyle: 'italic',
            fontWeight: 800,
            letterSpacing: '.1rem',
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
            margin: theme.spacing(0, 0.5, 0),
            textDecoration: 'none',
            ":focus": {
                outline: 'none'
            },
            cursor: 'pointer',
            margin: '0 1rem',
            fontSize: '1.2rem',
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
