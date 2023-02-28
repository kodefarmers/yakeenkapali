import { Container } from "@mui/system"
import About from "../../components/About/About"
import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import Works from "../../components/Works/Works"

const Home = () => {
    return (
        <Container>
            <Navbar />
            <Hero />
            <About />
            <Works />
        </Container>
    )
}

export default Home
