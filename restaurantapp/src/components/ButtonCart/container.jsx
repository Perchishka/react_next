"use client";
import { useContext } from "react";
import { ButtonCart } from "./component";
import { CartContext } from "../Context/CartContext/component";
import { useDispatch, useSelector } from "react-redux";
import { selectDishAmountById } from "@/redux/ui/cart/selectors";

export const ButtonCartContainer = ({ dishId, ...props }) => {
  const { handleAddCart, removeFromCart, removeOneFromCart } =
    useContext(CartContext);
  const amount = useSelector((state) => selectDishAmountById(state, dishId));
  const dispatch = useDispatch();

  return (
    <ButtonCart
      dishId={dishId}
      dispatch={dispatch}
      handleAddCart={handleAddCart}
      removeFromCart={removeFromCart}
      removeOneFromCart={removeOneFromCart}
      amount={amount}
      {...props}
    />
  );
};
