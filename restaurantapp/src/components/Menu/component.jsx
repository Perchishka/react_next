import { DishContainer } from "../Dish/container";
import styles from "./styles.module.css";
export const Menu = ({ menu }) => {
  return (
    <div>
      {menu?.map(({ id, name, price, ingredients }) => (
        <div key={id} className={styles.root}>
          <DishContainer
            nameDish={name}
            price={price}
            ingredients={ingredients}
            id={id}
            className={styles.root}
          />
        </div>
      ))}
    </div>
  );
};
