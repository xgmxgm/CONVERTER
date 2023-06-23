import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "@/pages/Home";
import { NotFoundPage } from "@/pages/NotFound";

export const router = createBrowserRouter([
    {
        index: true,
        path: '/',
        element: <HomePage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    }
]);