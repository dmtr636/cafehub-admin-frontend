import MainPage from "../pages/MainPage";
import OrdersPage from "../pages/OrdersPage";
import IngredientsPage from "../pages/IngredientsPage";
import AdditivesPage from "../pages/AdditivesPage";
import MenuPage from "../pages/MenuPage";
import PromotionsPage from "../pages/PromotionsPage";
import SettingsPage from "../pages/SettingsPage";
import {RouteObject} from "react-router-dom";
import {
    IconAdditives,
    IconAdditivesFilled,
    IconIngredients,
    IconIngredientsFilled,
    IconMain,
    IconMainFilled,
    IconMenu,
    IconMenuFilled,
    IconOrders,
    IconOrdersFilled,
    IconPromotions,
    IconPromotionsFilled,
    IconSettingFilled,
    IconSettings
} from "../assets/icons";
import {ReactNode} from "react";

export type ISidebarRoute = RouteObject & {
    path: string,
    name: string,
    sidebarProps?: {
        icon: ReactNode,
        iconActive: ReactNode,
    },
    children?: ISidebarRoute[]
}

export const sidebarRoutes: ISidebarRoute[] = [
    {
        path: "/",
        element: <MainPage/>,
        name: "Главная",
        sidebarProps: {
            icon: <IconMain/>,
            iconActive: <IconMainFilled/>
        },
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
        },
        children: [
            {
                path: "/settings/appearance",
                element: <SettingsPage/>,
                name: "Внешний вид",
            },
            {
                path: "/settings/about",
                element: <SettingsPage/>,
                name: "О кафе",
            },
            {
                path: "/settings/payment",
                element: <SettingsPage/>,
                name: "Способы оплаты",
            },
            {
                path: "/settings/delivery",
                element: <SettingsPage/>,
                name: "Доставка",
            },
            {
                path: "/settings/documents",
                element: <SettingsPage/>,
                name: "Документы",
            },
        ]
    }
]
