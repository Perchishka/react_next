"use client";

import { useContext } from "react";
import { Dish } from "./component";
import { ThemeContext } from "../Context/ThemeContext/component";

export const DishContainer = ({ ...props }) => {
  const { theme } = useContext(ThemeContext);
  return <Dish theme={theme} {...props} />;
};
