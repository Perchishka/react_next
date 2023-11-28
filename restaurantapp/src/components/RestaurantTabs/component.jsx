
import styles from "./styles.module.css";
import Link from "next/link";
import { DarkThemeRestaurantTabs } from "./DarkThemeRestaurantTabs";

export const RestaurantTabs = ({ restaurant }) => {
  return (
    <div>
      {restaurant?.map(({ id, name, description }) => (
        <DarkThemeRestaurantTabs key={id}>
          <div className={styles.textBox}>
            <h2 className={styles.nameRestaurant}>{name}</h2>
            <p className={styles.description}>{description}</p>
          </div>
          <Link href={`/restaurants/${id}/menu`}>
            Go
          </Link>
        </DarkThemeRestaurantTabs>
      ))}
    </div>
  );
};
