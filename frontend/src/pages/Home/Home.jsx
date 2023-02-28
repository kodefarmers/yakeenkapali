import { Container } from "@mui/system"
import About from "../../components/About/About"
import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"

const Home = () => {
    return (
        <Container>
            <Navbar />
            <Hero />
            <About />
        </Container>
    )
}

export default Home
