import styles from "../styles.module.css";
import { RestaurantsPage } from "@/pages/Restaurants/component";

export default function Restaurant() {
  return (
    <div className={styles.restaurantPage}>
      <RestaurantsPage />
    </div>
  );
}
