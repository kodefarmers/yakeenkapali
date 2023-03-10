import { Container } from "@mui/system"
import Navbar from "../../components/Navbar/Navbar"
import Works from "../../components/Works/Works"

const Blog = () => {
    const pages = [
        {
            name: 'About',
            link: '/#about'
        },
        {
            name: 'Blog',
            link: '/blog'
        },
    ]

    return (
        <Container>
            <Navbar pages={pages} />
            <Works />
        </Container>
    )
}

export default Blog
