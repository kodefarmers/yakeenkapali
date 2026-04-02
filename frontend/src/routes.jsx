import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Works from "./pages/Works/Works";
import Article from "./pages/Article/Article";
import Error from "./components/Error/Error";
import Project from "./pages/Projects/Project";
import CaseStudy from "./pages/CaseStudy/CaseStudy";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />

      {/* BLOG */}
      <Route path="blog" element={<Blog />} />
      <Route
        path="blog/:articleId"
        element={<Article />}
        errorElement={<Error />}
      />

      <Route path="works" element={<Works />} />

      <Route path="projects" element={<Project />} />
      <Route path="projects/:id" element={<Project />} />
      <Route path="case-study/:id" element={<CaseStudy />} />
    </Route>,
  ),
);

export default router;
