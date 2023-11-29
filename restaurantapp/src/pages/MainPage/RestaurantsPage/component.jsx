import { RestaurantTabContainer } from "@/components/RestaurantTabs/container";
import Link from "next/link";
import styles from "./styles.module.css";


export const RestaurantsPage = () => {
  return (
    <div className={styles.root}>
      <Link href="/">Back To Home</Link>
      <RestaurantTabContainer />
    </div>
  );
};