import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Featured from "../pages/miniPage/Featured";
import Project from "../pages/miniPage/Project";
import About from "../pages/miniPage/About";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
            path: "/project",
            element: <Project />
        },
        {
            path: "/featured",
            element: <Featured />
        },
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        }

        ]
    
    }
])

export default router