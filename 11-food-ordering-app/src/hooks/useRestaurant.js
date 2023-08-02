import { useEffect, useState } from "react";

export const useRestaurant = (restaurantId) => {
  const [restaurant, setRestaurant] = useState(null);

  const fetchRestaurant = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const restaurant = await response.json();
    setRestaurant(restaurant);
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  return restaurant;
};
