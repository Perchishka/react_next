import classNames from "classnames";
import { ButtonCartContainer } from "../ButtonCart/container";
import styles from "./styles.module.css";
export const Cart = ({ cart, getTotalCost, theme }) => {
  return (
    <div
      className={classNames(styles.root, {
        [styles.dark]: theme === "dark",
      })}
    >
      {cart.length === 0 ? (
        <div className={styles.textBox}>
          <h2>Select a meal from the list </h2>
        </div>
      ) : (
        <div>
          <h1 className={styles.h1}>Your Cart</h1>
          {cart.map(({ id, name, price, quantity }) => (
            <div key={id} className={styles.dishBox}>
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.price}> {price} $</p>
              <p className={styles.totalPrice}>
                Total Price: {price * quantity} $
              </p>
              <ButtonCartContainer
                id={id}
                name={name}
                price={price}
                dishId={id}
              />
            </div>
          ))}
          <h2> Amount your cart :{getTotalCost().toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};
