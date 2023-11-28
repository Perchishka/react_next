"use client";

import { useContext } from "react";
import { CartContext } from "../Context/CartContext/component";
import { ThemeContext } from "../Context/ThemeContext/component";
import { Cart } from "./component";

export const CartContainer = ({ ...props }) => {
  const { cart, getTotalCost } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);
  return (
    <Cart cart={cart} getTotalCost={getTotalCost} theme={theme} {...props} />
  );
};
