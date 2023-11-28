import { RestaurantTabs } from "@/app/components/RestaurantTabs/component";
import { getRestaurants } from "@/app/services/api"

export default async function RestaurantsPage () {

    const restaurants = await getRestaurants();
    console.log(restaurants);
return (
    <div>
        <RestaurantTabs restaurants={restaurants}></RestaurantTabs>
    </div>
)
}