import { RestaurantTabContainer } from "../RestaurantTab/container";

export const RestaurantTabs = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantTabContainer
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}
    </div>
  );
};
