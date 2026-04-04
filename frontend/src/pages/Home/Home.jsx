import { Container } from "@mui/system";
import About from "../../components/About/About";
import Carousel from "../../components/Carousel/Carousel";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import works from "../../assets/works/works";
import { CaseStudySection } from "../../components/CaseStudy/CaseStudy";
import { ProjectSection } from "../../components/Projects/Projects";

const Home = () => {
  const pages = [
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Works",
      link: "/#works",
    },
    {
      name: "Projects",
      link: "/#projects",
    },
  ];
  return (
    <Container>
      <Navbar pages={pages} />
      <Hero />
      <About />

      <CaseStudySection />
      <ProjectSection />
      <Carousel works={works} />
      {/* <Works /> */}
      <Contact />
      <Footer />
    </Container>
  );
};

export default Home;
