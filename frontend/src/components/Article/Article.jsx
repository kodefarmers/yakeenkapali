import { Box, Paper, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import articleStyles from "../../styles/articleStyles"
import articles from '../../assets/articles/articles'

const Article = () => {
    let { articleId } = useParams()

    const { classes } = articleStyles()

    const { title, slug, paragraphs } = articles.find(i => i.id === parseInt(articleId))

    return (
        <Box className={classes.articleContainer}>
            <Paper className={classes.article}>
                <Typography variant="h4">
                    {title}
                </Typography>
                <Typography variant="overline" className={classes.articleSlug}>
                    {slug}
                </Typography>

                <hr className={classes.horizontalLine} />

                <Box className={classes.articleParagraphs}>
                    {paragraphs.map(paragraph => (
                        <Typography key={paragraph.id} variant="subtitle1" className={classes.articleDescription}>
                            {paragraph.text}
                        </Typography>
                    ))}
                </Box>
            </Paper>
        </Box>
    )
}

export default Article
