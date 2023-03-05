import { makeStyles } from "tss-react/mui";

const articleGridStyles = makeStyles()((theme) => {
    return {
        articleGrid: {
            margin: theme.spacing(10, 0, 0, 0),
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-start'
        },
        articleGridRight: {
            padding: theme.spacing(1),
        },
        articleGridLeft: {
            width: '25%',
            padding: theme.spacing(2),
            wordWrap: 'break-word'
        },
        articleGridCard: {
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

export default articleGridStyles
