import { Container } from "@mui/system"
import About from "../../components/About/About"
import Carousel from "../../components/Carousel/Carousel"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"
import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
// import Works from "../../components/Works/Works"
import works from "../../assets/works/works"

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
            <Carousel works={works} />
            {/* <Works /> */}
            <Contact />
            <Footer />
        </Container>
    )
}

export default Home
