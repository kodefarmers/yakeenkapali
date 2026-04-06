import { Container } from "@mui/system";
import ArticleGrid from "../../components/ArticleGrid/ArticleGrid";
import Navbar from "../../components/Navbar/Navbar";
import { pages } from "../../constants/nav-item";

const Blog = () => {
  return (
    <Container>
      <Navbar pages={pages} />
      <ArticleGrid />
    </Container>
  );
};

export default Blog;
