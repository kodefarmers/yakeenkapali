import { Container } from "@mui/system";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import works from "../../assets/works/works";
import { CaseStudySection } from "../../components/CaseStudy/CaseStudy";
import { ProjectSection } from "../../components/Projects/Projects";
import { pages } from "../../constants/nav-item";

const Home = () => {
  return (
    <Container>
      <Navbar pages={pages} />
      <Hero />
      {/* <About /> */}

      <CaseStudySection />
      <ProjectSection />
      <Carousel works={works} />
      {/* <Works /> */}
      {/* <Contact /> */}
      <Footer />
    </Container>
  );
};

export default Home;
