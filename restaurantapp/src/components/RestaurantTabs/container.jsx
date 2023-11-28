import { getRestaurants } from "@/redux/sevices/api";
import { RestaurantTabs } from "./component";

export const RestaurantTabContainer = async (props) => {
  const restaurants = await getRestaurants();

  return <RestaurantTabs restaurant={restaurants} {...props} />;
};
