"use client";
import { selectDishAmountById } from "@/redux/ui/cart/selectors";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //////
  const getDishQuantity = (id) => {
    const quantity = cart.find((dish) => dish.id == id)?.quantity;
    if (!quantity) {
      return 0;
    }
    return quantity;
  };
  /////
  const handleAddCart = (id, name, price) => {
    const quantity = getDishQuantity(id);
    if (quantity === 0) {
      setCart([...cart, { id: id, quantity: 1, name: name, price: price }]);
    } else {
      setCart(
        cart.map((dish) =>
          dish.id == id ? { ...dish, quantity: dish.quantity + 1 } : dish
        )
      );
    }
  };
  ////
  const removeOneFromCart = (id) => {
    const quantity = getDishQuantity(id);
    if (quantity == 1) {
      removeFromCart(id);
    } else {
      setCart(
        cart.map((dish) =>
          dish.id == id ? { ...dish, quantity: dish.quantity - 1 } : dish
        )
      );
    }
  };
  /////
  const removeFromCart = (id) => {
    setCart((cart) => cart.filter((currentDish) => currentDish.id !== id));
  };
  /////
  function getTotalCost() {
    let totalCost = 0;
    cart.map(({ price, quantity }) => {
      totalCost += price * quantity;
    });
    return totalCost;
  }
  /////

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddCart,
        removeFromCart,
        removeOneFromCart,
        getDishQuantity,
        getTotalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
