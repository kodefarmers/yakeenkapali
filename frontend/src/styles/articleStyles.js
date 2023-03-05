import { makeStyles } from "tss-react/mui";

const articleStyles = makeStyles()((theme) => {
    return {
        articleContainer: {
            margin: theme.spacing(10, 0, 0, 0),
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center'
        },
        article: {
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(5)
        },
        articleTitle: {

        },
        articleSlug: {
            fontSize: '.8rem'
        },
        articleDescription: {
            margin: theme.spacing(2, 0, 0, 0),
            fontSize: '1.1rem'
        },
        horizontalLine: {
            width: '80%',
        }
    }
})

export default articleStyles
