import { useReducer } from "react";
import { Button } from "../Button/component";
import { useRouter } from "next/navigation";
import { RatingInput } from "../RatingStar/component";
import styles from "./styles.module.css";
const DEFAULT_VALUE = {
  text: "",
  rating: "",
};
const reducer = (state, action) => {
  switch (action?.type) {
    case "setReview":
      return { ...state, text: action.payload };
    case "setRating":
      return { ...state, rating: action.payload };
    case "reset":
      return { ...DEFAULT_VALUE };

    default:
      return state;
  }
};
export const ReviewForm = ({ onSubmit }) => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE);
  const router = useRouter();
  return (
    <div className={styles.root}>
      <h3 className={styles.h3}>Add your review</h3>
      <input
        type="text"
        value={formValue.text}
        placeholder="Review:"
        onChange={(event) => {
          dispatch({ type: "setReview", payload: event.target.value });
        }}
        className={styles.input}
      />
      <RatingInput
        value={formValue.rating}
        onChange={(value) => {
          dispatch({ type: "setRating", payload: value });
        }}
      />
      <div className={styles.boxButton}>
        <Button
          onClick={() => {
            onSubmit(formValue);
            dispatch({ type: "reset" });
            router.refresh();
          }}
        >
          Add Review
        </Button>
      </div>
    </div>
  );
};
