import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import Works from './pages/Works/Works'
import Article from './pages/Article/Article'
import Error from "./components/Error/Error";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:articleId" element={<Article />} errorElement={<Error />} />
            <Route path="works" element={<Works />} />
        </Route>
    )
)

export default router
