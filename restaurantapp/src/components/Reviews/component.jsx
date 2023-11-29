import { Review } from "../Review/component";
import { User } from "../User/component";
export const Reviews = ({ userId, text }) => {
  return (
    <div>
      <h3>Reviews: </h3>
      <div>
            <User userId={userId} /> <Review text={text} />
          </div>
    </div>
  );
};
