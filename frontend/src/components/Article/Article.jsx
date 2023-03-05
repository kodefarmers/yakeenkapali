import { Box, Grid, Button, Card, CardActions, CardContent, CardMedia, Paper, Typography, Link } from "@mui/material"
import articleStyles from '../../styles/articleStyles'
import image from '../../assets/random_black_man.jpg'

const Article = () => {
    const { classes } = articleStyles()
    const articles = [1, 2]
    const latestPosts = [1, 2, 3, 4, 5, 6, 7]

    return (
        <Box className={classes.article}>
            <Grid container spacing={2} justifyContent="space-between" className={classes.articleLeft}>
                {articles.map(article => (
                    <Grid xs={12} md={6} item={true} key={article}>
                        <Box>
                            <Card className={classes.articleCard}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={image}
                                    title="Black Man"
                                >
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        How to sew a keyrign at home.
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Give Rs. 300 worth of chocolate to a girl and hopefully she'll do it for you. *fingers-crossed* :P
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Paper className={classes.articleRight}>
                <Typography gutterBottom variant="overline" component="div">
                    Latest Posts
                </Typography>

                <Box className={classes.latestPosts}>
                    {latestPosts.map(post => (
                        <Link href="/1" variant="subtitle2" className={classes.latestPostLink}>Latest post {post}</Link>
                    ))}
                </Box>

            </Paper>
        </Box >
    )
}

export default Article
