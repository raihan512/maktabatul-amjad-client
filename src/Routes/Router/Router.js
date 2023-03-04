import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Allbooks from "../../pages/AllBooks/Allbooks";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home/Home";

export const Router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/contact",
                element: <Contact></Contact>
            },
            {
                path: '/allbooks',
                element: <Allbooks></Allbooks>
            }
        ]
    }
])