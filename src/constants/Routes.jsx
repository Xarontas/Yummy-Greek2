import {lazy } from "react";
import { PATHS } from "./Common";


export const ROUTES  = [
  {
    path: PATHS.root,
    component: lazy(() => import("../Pages/AllDishesPage")),
  },
  {
    path: PATHS.dish,
    component: lazy(() => import("../Pages/DishPage")),
  },

  
];
