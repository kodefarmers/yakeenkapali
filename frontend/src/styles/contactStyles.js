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
            width: '70%',
            backgroundColor: 'red'
        }
    }
})

export default contactStyles
