import { makeStyles } from 'tss-react/mui'

const heroStyles = makeStyles()((theme) => {
    return {
        hero: {
            // width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(10, 0, 0, 0),
            margin: theme.spacing(10, 0, 0, 0)
        },
        heroBox: {},
        heroBoxLeft: {
        },
        heroImage: {
            width: '100%',
        },
        heroBoxRight: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'left',
            flexDirection: 'column',
            height: '100%',
        },
        heroSubtitle: {
            color: theme.palette.text.disabled
        },
        heroTitle: {
            fontWeight: 'bold',
        },
        heroDescription: {
            color: theme.palette.text.secondary,
            fontSize: '.8rem',
            margin: theme.spacing(1, 0)
        }
    }
})

export default heroStyles
