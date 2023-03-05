import { Container } from "@mui/system"
import Article from "../../components/Article/Article"
import Navbar from "../../components/Navbar/Navbar"

const Blog = () => {
    const pages = [
        {
            name: 'About',
            link: '/#about'
        },
        {
            name: 'Works',
            link: '/#works'
        },
    ]

    return (
        <Container>
            <Navbar pages={pages} />
            <Article />
        </Container>
    )
}

export default Blog
