import { lazy } from "react";

const Main = lazy(() => import("../Layouts/Main.layout"));
const Axios = lazy(() => import("../Layouts/Axios.layout"));

const routes = [
   { path: "", Component: Main, exact: true, isPrivate: false },
   { path: "axios", Component: Axios, exact: true, isPrivate: false }
];

export default routes;