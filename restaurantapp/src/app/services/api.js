export async function getDishes(restaurantId){
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
    return response.json();
}

export async function getRestaurants(){
    const response = await fetch("http://localhost:3001/api/restaurants/", {next: {revalidate: 30}});
    return response.json();
}

export async function getRestaurantById(restaurantId, cacheBehaviour = "default"){
    const response = await fetch(`http://localhost:3001/api/restaurants/${restaurantId}`, {next: {revalidate: 30}});
    return response.json();
}


