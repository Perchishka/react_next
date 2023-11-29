import Link from "next/link";
import styles from "./styles.module.css";

export const MainPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.textBox}>
        <h1>RestaurantGit</h1>
        <Link href="/restaurants">
          Go To Restaurants
        </Link>
      </div>
      <div>
      </div>
    </div>
  );
};
