import { Container } from "@mui/system";
import Navbar from "../../components/Navbar/Navbar";
import Works from "../../components/Works/Works";
import { pages } from "../../constants/nav-item";

const Blog = () => {
  return (
    <Container>
      <Navbar pages={pages} />
      <Works />
    </Container>
  );
};

export default Blog;
