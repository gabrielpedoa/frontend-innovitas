import type { JSX } from "react";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Characters from "./pages/characters/Characters";
import CharacterDetails from "./pages/characterDetails/CharacterDetails";

type IRoutes = {
  path: string;
  element: JSX.Element;
  requireAuth: boolean;
};

export const routes: IRoutes[] = [
  {
    path: "/",
    element: <Home />,
    requireAuth: false,
  },
  {
    path: "/meus-personagens",
    element: <Home />,
    requireAuth: true,
  },
  {
    path: "/personagens",
    element: <Characters />,
    requireAuth: false,
  },
  {
    path: "/personagem/:id",
    element: <CharacterDetails />,
    requireAuth: false,
  },
];
