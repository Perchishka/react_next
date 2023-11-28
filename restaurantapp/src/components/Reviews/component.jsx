import classNames from "classnames";
import { Review } from "../Review/component";
import { Starts } from "../Stars/component";
import { User } from "../User/component";
import styles from "./styles.module.css";
import { DarkThemeReview } from "./DarkThemeReview";
export const Reviews = ({ review }) => {
  return (
    <div className={classNames(styles.root)}>
      {review.map(({ id, userId, text, rating }) => (
        <DarkThemeReview key={id}>
          <div>
            <User userId={userId} /> <Review text={text} />
          </div>
          <Starts value={rating} />
        </DarkThemeReview>
      ))}
    </div>
  );
};
