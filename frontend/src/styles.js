import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => {
    return {
        title: {
            margin: theme.spacing(0, 0.5, 0),
            fontStyle: 'italic',
            fontWeight: 500,
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
            }
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
        }

    }
})

export default useStyles
