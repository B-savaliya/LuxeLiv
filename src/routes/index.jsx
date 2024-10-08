import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultLayout";
import Home from "../components/home/index";
import Greenhouse from "../components/home/architectureMind/greenhouse";
import Property from "../components/blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/greenhouse",
                element: <Greenhouse />
            },
            {
                path: "/blog",
                element: <Property />
            }
        ],
    },
]);

export default router;
