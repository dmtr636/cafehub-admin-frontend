import MainPage from "../pages/MainPage";
import OrdersPage from "../pages/OrdersPage";
import IngredientsPage from "../pages/IngredientsPage";
import AdditivesPage from "../pages/AdditivesPage";
import MenuPage from "../pages/MenuPage";
import PromotionsPage from "../pages/PromotionsPage";
import SettingsPage from "../pages/SettingsPage";
import {RouteObject} from "react-router-dom";
import {
    IconAdditivesFilled,
    IconIngredientsFilled,
    IconMainFilled,
    IconMenuFilled,
    IconOrdersFilled,
    IconPromotionsFilled,
    IconSettingFilled,
    IconAdditives,
    IconIngredients,
    IconMain,
    IconMenu,
    IconOrders,
    IconPromotions,
    IconSettings
} from "../assets/sidebar";
import {ReactNode} from "react";

export type ISidebarRoute = RouteObject & {
    path: string,
    name: string,
    sidebarProps: {
        icon: ReactNode,
        iconActive: ReactNode
    }
}

export const sidebarRoutes = [
    {
        path: "/",
        element: <MainPage/>,
        name: "Главная",
        sidebarProps: {
            icon: <IconMain/>,
            iconActive: <IconMainFilled/>
        }
    },
    {
        path: "/orders",
        element: <OrdersPage/>,
        name: "Заказы",
        sidebarProps: {
            icon: <IconOrders/>,
            iconActive: <IconOrdersFilled/>
        }
    },
    {
        path: "/ingredients",
        element: <IngredientsPage/>,
        name: "Ингридиенты",
        sidebarProps: {
            icon: <IconIngredients/>,
            iconActive: <IconIngredientsFilled/>
        }
    },
    {
        path: "/additives",
        element: <AdditivesPage/>,
        name: "Добавки",
        sidebarProps: {
            icon: <IconAdditives/>,
            iconActive: <IconAdditivesFilled/>
        }
    },
    {
        path: "/menu",
        element: <MenuPage/>,
        name: "Меню",
        sidebarProps: {
            icon: <IconMenu/>,
            iconActive: <IconMenuFilled/>
        }
    },
    {
        path: "/promotions",
        element: <PromotionsPage/>,
        name: "Акции",
        sidebarProps: {
            icon: <IconPromotions/>,
            iconActive: <IconPromotionsFilled/>
        }
    },
    {
        path: "/settings",
        element: <SettingsPage/>,
        name: "Настройки",
        sidebarProps: {
            icon: <IconSettings/>,
            iconActive: <IconSettingFilled/>
        }
    }
]
