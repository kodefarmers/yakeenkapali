import { Container } from "@mui/system";
import Article from "../../components/Article/Article";
import Navbar from "../../components/Navbar/Navbar";
import { pages } from "../../constants/nav-item";

const Blog = () => {
  return (
    <Container>
      <Navbar pages={pages} />
      <Article />
    </Container>
  );
};

export default Blog;
