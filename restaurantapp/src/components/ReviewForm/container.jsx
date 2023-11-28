"use client";

// import { useCreateReviewMutation } from "@/redux/sevices/api";
import { ReviewForm } from "./component";

async function getNewReviewById({ restaurantId, newReview }) {
  await fetch(`http://localhost:3001/api/review/${restaurantId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newReview),
  });
}
export const ReviewFormContainer = ({ restaurantId, ...props }) => {
  return (
    <>
      <ReviewForm
        onSubmit={(form) =>
          getNewReviewById({
            restaurantId,
            newReview: {
              ...form,
              userId: "dfb982e9-b694-4b7d-aec8-7f6ff2e6af54",
            },
          })
        }
        {...props}
      />
    </>
  );
};
