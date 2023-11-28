import { ReviewFormContainer } from "@/components/ReviewForm/container";
import { Reviews } from "@/components/Reviews/component";
import { getReviewById } from "@/redux/sevices/api";
import styles from "./styles.module.css";
import Link from "next/link";


export default async function MenuPage({ params: { restaurantId } }) {
  const review = await getReviewById(restaurantId);
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
        <Reviews review={review} />
        <ReviewFormContainer restaurantId={restaurantId} />
      </div>
    </div>
  );
}
