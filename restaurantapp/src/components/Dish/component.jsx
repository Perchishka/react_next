import classNames from "classnames";
import { ButtonDishContainer } from "../ButtonDish/container";
import styles from "./styles.module.css";
export const Dish = ({ nameDish, price, ingredients, id, theme }) => {
  return (
    <div
      className={classNames(styles.root, {
        [styles.dark]: theme === "dark",
      })}
    >
      <div className={styles.productBox}>
        <h3 className={styles.nameDish}>{nameDish}</h3>
        <ul className={styles.list}>
          {ingredients.map((ingredient) => (
            <li key={ingredient.id} className={styles.ingredient}>
              {ingredient}
            </li>
          ))}
        </ul>
        <p className={styles.price}>{price} $</p>
      </div>
      <ButtonDishContainer id={id} name={nameDish} price={price} dishId={id} />
    </div>
  );
};
