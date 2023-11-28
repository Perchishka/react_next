import Link from "next/link";
import styles from "./styles.module.css";

export const MainPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.textBox}>
        <h1>RestaurantGit</h1>
        <p className={styles.text}>
          Satisfy your appetite with food delivery from our service! We offer a
          wide variety of dishes from the best restaurants and cafes in your
          city. Our team makes sure that your order is delivered fresh and hot.
          Make your choice and we guarantee that your gastronomic journey will
          begin right away. Order now and enjoy the taste!
        </p>
        <Link href="/restaurants">
          Go To Restaurants
        </Link>
      </div>
      <div>
      </div>
    </div>
  );
};
