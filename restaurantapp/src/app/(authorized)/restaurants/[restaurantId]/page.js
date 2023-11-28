import { getRestaurantById,  getRestaurants } from "@/app/services/api";
import Link from "next/link";

export async function generateStaticParams() {
    const restaurants = await  getRestaurants();
    return  restaurants.map((id)=> ({restaurantId: id}))
}

export async function RestaurantPage ({params: {restaurantId}}){
    const restaurant = await getRestaurantById(restaurantId);
    return (<div>
        <Link href ="/restaurant" >Restaurants</Link>RestaurantPage: {restaurant.name}
    </div>)
}