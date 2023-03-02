import { makeStyles } from 'tss-react/mui'

const footerStyles = makeStyles()((theme) => {
    return {
        footer: {
            height: '30vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        footerTitle: {
            margin: theme.spacing(2, 0, 0, 0),
            fontStyle: 'italic',
            textDecoration: 'none',
            color: 'white'
        },
        footerSocials: {
            margin: theme.spacing(2, 2),
        }
    }
})

export default footerStyles
