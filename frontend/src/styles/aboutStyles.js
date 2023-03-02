import { makeStyles } from 'tss-react/mui'

const aboutStyles = makeStyles()((theme) => {
    return {
        about: {
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        },

        aboutGrid: {},
        aboutBoxRight: {},
        aboutImage: {
            width: '100%',
        },
        aboutBoxLeft: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'left',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            margin: theme.spacing(0, 18),
            [theme.breakpoints.down('md')]: {
                margin: theme.spacing(0, 0),
            },


        },
        aboutSubtitle: {
            color: theme.palette.text.disabled
        },
        aboutTitle: {
            fontWeight: 'bold',
        },
        aboutDescription: {
            color: theme.palette.text.secondary,
            fontSize: '.8rem',
            margin: theme.spacing(1, 0)
        }
    }
})

export default aboutStyles
