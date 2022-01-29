import { lazy } from "react";

const Home = lazy(() => import("../Pages/Main/Home.page"));
const Products = lazy(() => import("../Pages/Main/Products.page"));
const SingleProduct = lazy(() => import("../Pages/Main/ProductView.page"));
const Cart = lazy(() => import("../Pages/Main/Cart.page"));

const routes = [
   { path: "", Component: Home, exact: true, isPrivate: false },
   { path: "products", Component: Products, exact: true, isPrivate: false },
   { path: "products/:productId", Component: SingleProduct, exact: true, isPrivate: false },
   { path: "cart", Component: Cart, exact: true, isPrivate: true },
];

export default routes;