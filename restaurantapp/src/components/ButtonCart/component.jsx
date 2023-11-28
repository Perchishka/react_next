import { cartActions } from "@/redux/ui/cart";
import { Button } from "../Button/component";
import styles from "./styles.module.css";
export const ButtonCart = ({
  id,
  name,
  price,
  handleAddCart,
  removeFromCart,
  removeOneFromCart,
  amount,
  dishId,
  dispatch,
}) => {
  return (
    <div className={styles.root}>
      <Button
        disabled={amount === 5}
        onClick={() => {
          handleAddCart(id, name, price);
          dispatch(cartActions.increment(dishId));
        }}
        size="s"
      >
        +
      </Button>
      <h2>{amount}</h2>
      <Button
        disabled={amount === 0}
        onClick={() => {
          removeOneFromCart(id);
          dispatch(cartActions.decrement(dishId));
        }}
        size="s"
      >
        -
      </Button>
      <Button
        onClick={() => {
          removeFromCart(id), dispatch(cartActions.delet(dishId));
        }}
        size="s"
      >
        Remove product
      </Button>
    </div>
  );
};
