import { lazy } from "react";

const Home = lazy(() => import("../Pages/Main/Home.page"));

const routes = [
   { path: "", Component: Home, exact: true, isPrivate: false }
];

export default routes;