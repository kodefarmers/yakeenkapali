import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/blog',
        element: <Blog />
    }
])

export default router
