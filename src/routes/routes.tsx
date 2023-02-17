import {RouteObject} from "react-router-dom";
import AppLayout from "../components/appLayout/AppLayout/AppLayout";
import {sidebarRoutes} from "./sidebarRoutes";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            ...sidebarRoutes
        ]
    }
]
