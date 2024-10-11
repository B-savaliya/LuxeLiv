import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultLayout";
import Home from "../components/home/index";
import Property from "../components/blog";
import Greenhouse from "../components/home/architectureMind/greenhouse";
import NotFound from "../common/pageNotFound"; // Import the NotFound component

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
                path: "architectureMind/greenhouse",
                element: <Greenhouse />
            },
            {
                path: "/blog",
                element: <Property />
            },
        ],
    },
    {
        path: "*", // This will catch all undefined routes
        element: <NotFound /> // Render the NotFound component without header/footer
    }
]);

export default router;
