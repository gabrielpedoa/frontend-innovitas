import type { JSX } from "react";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

type IRoutes = {
  path: string;
  element: JSX.Element;
  requireAuth: boolean;
};

export const routes: IRoutes[] = [
  {
    path: "/auth/login",
    element: <Login />,
    requireAuth: false,
  },
  {
    path: "/",
    element: <Home />,
    requireAuth: true,
  },
  {
    path: "/meus-personagens",
    element: <Home />,
    requireAuth: true,
  },
  {
    path: "/personagens",
    element: <Home />,
    requireAuth: true,
  },
];
