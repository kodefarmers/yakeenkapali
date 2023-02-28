import { makeStyles } from 'tss-react/mui'

const workStyles = makeStyles()((theme) => {
    return {
        work: {
            flexGrow: 1,
            // width: '50%',
            height: '100vh',
        },
        worksTitle: {
            fontWeight: 300,
            textTransform: 'uppercase'
        }
    }
})

export default workStyles
