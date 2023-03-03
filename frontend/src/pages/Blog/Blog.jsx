import { Container } from "@mui/system"
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
            Blog
        </Container>
    )
}

export default Blog
