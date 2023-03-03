import { Container } from "@mui/system"
import About from "../../components/About/About"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"
import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import Works from "../../components/Works/Works"

const Home = () => {
    const pages = [
        {
            name: 'About',
            link: '/#about'
        },
        {
            name: 'Works',
            link: '/#works'
        },
        {
            name: 'Blog',
            link: '/blog'
        },
    ]
    return (
        <Container>
            <Navbar pages={pages} />
            <Hero />
            <About />
            <Works />
            <Contact />
            <Footer />
        </Container>
    )
}

export default Home
