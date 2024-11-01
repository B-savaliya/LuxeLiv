import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultLayout";
import Home from "../components/home/index";
import Property from "../components/property";
import Greenhouse from "../components/home/architectureMind/greenhouse";
import NotFound from "../common/pageNotFound";
import Service from "../components/servieces/service";
import AboutUs from "../components/aboutUs";
import Projects from "../components/projects";
import BlogInsider from "../components/home/fromOurBlog/blogInsider";
import Contact from "../components/contact";
import Blog from "../components/blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/blog/:postId",
                element: (
                    <>
                        {/* {console.log("BlogInsider route matched")} */}
                        <BlogInsider />
                    </>
                )
            },
            {
                path: "architectureMind/greenhouse",
                element: <Greenhouse />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/property",
                element: <Property />
            },
            {
                path: "/service",
                element: <Service />
            },
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ],
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;
