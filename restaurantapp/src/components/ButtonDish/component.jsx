import { cartActions } from "@/redux/ui/cart";
import { Button } from "../Button/component";
import styles from "./styles.module.css";
export const ButtonDish = ({
  id,
  name,
  price,
  amount,
  handleAddCart,
  removeOneFromCart,
  dispatch,
  dishId,
}) => {
  return (
    <div className={styles.root}>
      <Button
        disabled={amount === 5}
        onClick={() => {
          handleAddCart(id, name, price);
          dispatch(cartActions.increment(dishId));
        }}
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
      >
        -
      </Button>
    </div>
  );
};
