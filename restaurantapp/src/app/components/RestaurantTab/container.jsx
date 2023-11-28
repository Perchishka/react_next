import { Tab } from "../Tab/component";

export const RestaurantTabContainer = ({ restaurant, ...props }) => {

  if (!restaurant) {
    return null;
  }

  return <Tab {...props}>{restaurant.name}</Tab>;
};
