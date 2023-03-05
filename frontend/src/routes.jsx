import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
        </Route>
    )
)

export default router
