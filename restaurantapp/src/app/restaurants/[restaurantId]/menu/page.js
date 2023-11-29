import { Menu } from "@/components/Menu/component";
import { getDishById } from "@/redux/sevices/api";
import styles from "./styles.module.css";
import Link from "next/link";

export default async function MenuPage({ params: { restaurantId } }) {
  const restaurants = await getDishById(restaurantId);
  return (
    <div>
      <div className={styles.boxLinks}>
        <Link className={styles.link} href="/restaurants">
          Products
        </Link>
        <Link
          className={styles.link}
          href={`/restaurants/${restaurantId}/menu`}
        >
          Menu
        </Link>
        <Link
          className={styles.link}
          href={`/restaurants/${restaurantId}/review`}
        >
          Review
        </Link>
      </div>
      <div className={styles.menuPage}>
        <Menu menu={restaurants} />
      </div>
    </div>
  );
}
