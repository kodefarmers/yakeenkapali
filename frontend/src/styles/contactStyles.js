import { makeStyles } from 'tss-react/mui'

const contactStyles = makeStyles()((theme) => {
    return {
        contact: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        },
        contactBox: {
            width: '80%',
            display: 'flex',
            padding: theme.spacing(5)
        },
        contactRight: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '33ch'
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
        },
        contactLeft: {

        },
        contactImage: {
            width: '70%',
        },
        submitButton: {
            margin: theme.spacing(0, 1, 0, 0)
        }

    }
})

export default contactStyles
