import { Container } from "@mui/system"
import ArticleGrid from "../../components/ArticleGrid/ArticleGrid"
import Navbar from "../../components/Navbar/Navbar"

const Blog = () => {
    const pages = [
        {
            name: 'About',
            link: '/#about'
        },
        {
            name: 'Works',
            link: '/works'
        },
    ]

    return (
        <Container>
            <Navbar pages={pages} />
            <ArticleGrid />
        </Container>
    )
}

export default Blog
