export async function getRestaurants() {
  const response = await fetch(`http://localhost:3001/api/restaurants`);
  return response.json();
}

export async function getDishById(restaurantId) {
  const response = await fetch(
    `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
  );
  return response.json();
}

export async function getReviewById(restaurantId) {
  const response = await fetch(
    `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`,
    {
      cache: "no-store",
    }
  );
  return response.json();
}

export async function getUsers() {
  const response = await fetch(`http://localhost:3001/api/users`);
  return response.json();
}
