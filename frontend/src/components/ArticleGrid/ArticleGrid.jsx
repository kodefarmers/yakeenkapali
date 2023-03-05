import { Box, Grid, Button, Card, CardActions, CardContent, CardMedia, Paper, Typography, Link } from "@mui/material"
import articleGridStyles from '../../styles/articleGridStyles'
import image from '../../assets/random_black_man.jpg'
import articles from "../../assets/articles/articles"

const ArticleGrid = () => {
    const { classes } = articleGridStyles()
    const latestPosts = articles.reverse()

    return (
        <Box className={classes.articleGrid}>
            <Paper className={classes.articleGridLeft}>
                <Typography gutterBottom variant="overline" component="div">
                    Latest Posts
                </Typography>

                <Box className={classes.latestPosts}>
                    {latestPosts.map(({ id, title }) => (
                        <Link href={`/blog/${id}`} key={id} variant="subtitle2" className={classes.latestPostLink}>{title}</Link>
                    ))}
                </Box>
            </Paper>
            <Grid container spacing={2} justifyContent="space-between" className={classes.articleGridRight}>
                {articles.map(({ id, title, slug }) => (
                    <Grid xs={12} md={6} item={true} key={id}>
                        <Box>
                            <Card className={classes.articleGridCard}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={image}
                                    title="Black Man"
                                >
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {slug}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Button size="small">Share</Button> */}
                                    <Button href={`/blog/${id}`} size="small">Read</Button>
                                </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default ArticleGrid
