import { Navigate } from "react-router-dom";
import React from "react";
const Home = React.lazy(() => import("@/components/home"));
const Detail = React.lazy(() => import("@/components/detail"));
const Entire = React.lazy(() => import("@/components/entire"));
const NotFound = React.lazy(() => import("@/components/not-found"));

const routes = [
  {
    path: "/",
    element: <Navigate to="home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "entire",
    element: <Entire />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
