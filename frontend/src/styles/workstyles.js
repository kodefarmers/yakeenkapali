import { makeStyles } from 'tss-react/mui'

const workStyles = makeStyles()((theme) => {
    return {
        works: {
            flexGrow: 1,
            margin: theme.spacing(5, 0, 5, 0),

        },
        worksTitle: {
            fontWeight: 300,
            textTransform: 'uppercase'
        },
        loadMoreButton: {
            [theme.breakpoints.down('md')]: {
                width: '100%',
            },
            alignSelf: 'right'
        }
    }
})

export default workStyles
