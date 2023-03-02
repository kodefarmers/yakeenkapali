import { makeStyles } from 'tss-react/mui'

const contactStyles = makeStyles()((theme) => {
    return {
        contact: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        },
        contactGrid: {
            display: 'flex',
            padding: theme.spacing(5)
        },
        contactRight: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1, 0),
            },
        },
        contactLeft: {
        },
        contactImage: {
            width: '100%',
        },
        submitButton: {
            margin: theme.spacing(0)
        }

    }
})

export default contactStyles
