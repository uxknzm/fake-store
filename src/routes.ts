import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import ProductPage from "./pages/ProductPage"
import ShopingCart from "./pages/ShopingCart";
import Users from "./pages/Users";
import { HOME_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, ABOUT_ROUTE, CONTACT_ROUTE, SHOP_ROUTE, USER_ROUTE, PRODUCT_DETAIL_ROUTE } from "./utils/const";


export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: PRODUCT_ROUTE,
        Component: ProductPage
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: CONTACT_ROUTE,
        Component: Contacts
    },
    {
        path: SHOP_ROUTE,
        Component: ShopingCart
    },
    {
        path: PRODUCT_DETAIL_ROUTE,
        Component: ProductDetail
    },
]

export const privateRoutes = [
    {
        path: USER_ROUTE,
        Component: Users
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: PRODUCT_ROUTE,
        Component: ProductPage
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: CONTACT_ROUTE,
        Component: Contacts
    },
    {
        path: SHOP_ROUTE,
        Component: ShopingCart
    },
    {
        path: PRODUCT_DETAIL_ROUTE,
        Component: ProductDetail
    },
]