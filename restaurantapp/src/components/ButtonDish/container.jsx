"use client";
import { useContext } from "react";
import { ButtonDish } from "./component";
import { CartContext } from "../Context/CartContext/component";
import { useDispatch, useSelector } from "react-redux";
import { selectDishAmountById } from "@/redux/ui/cart/selectors";

export const ButtonDishContainer = ({ dishId, ...props }) => {
  const { handleAddCart, removeOneFromCart, increment, decrement } =
    useContext(CartContext);

  const amount = useSelector((state) => selectDishAmountById(state, dishId));
  const dispatch = useDispatch();

  return (
    <ButtonDish
      increment={increment}
      decrement={decrement}
      amount={amount}
      handleAddCart={handleAddCart}
      removeOneFromCart={removeOneFromCart}
      dispatch={dispatch}
      dishId={dishId}
      {...props}
    />
  );
};
