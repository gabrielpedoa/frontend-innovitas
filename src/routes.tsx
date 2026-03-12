import type { JSX } from "react";
import CharacterDetails from "./pages/characterDetails/CharacterDetails";
import Characters from "./pages/characters/Characters";
import Home from "./pages/home/Home";
import MyCharacters from "./pages/myCharacters/MyCharacters";

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
    element: <MyCharacters />,
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
