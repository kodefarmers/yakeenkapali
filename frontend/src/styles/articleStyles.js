import { makeStyles } from "tss-react/mui";

const articleStyles = makeStyles()((theme) => {
    return {
        article: {
            margin: theme.spacing(10, 0, 0, 0),
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        articleLeft: {
            padding: theme.spacing(1),
        },
        articleRight: {
            width: '25%',
            padding: theme.spacing(2),
            wordWrap: 'break-word'
        },
        articleCard: {
            padding: theme.spacing(1)
        },
        latestPosts: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',

        },
        latestPostLink: {
            color: 'gray',
            margin: theme.spacing(1, 0, 0, 0),
        }

    }
})

export default articleStyles
