import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";

export const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState();
  const { restaurantId } = useParams();

  const fetchRestaurant = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await response.json();
    setRestaurant(data);
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  return restaurant ? (
    <div className="body">
      <h2>{restaurant.data.cards[0].card.card.info.name}</h2>
      <h5>Rating: {restaurant.data.cards[0].card.card.info.avgRatingString}</h5>
      <h5>
        Cost for two:{" "}
        {restaurant.data.cards[0].card.card.info.costForTwoMessage}
      </h5>
      <h5>
        Cusines: {restaurant.data.cards[0].card.card.info.cuisines.join(", ")}
      </h5>
      <h3>Menu</h3>
      <ul>
        {restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
          (item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - Rs.{" "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          )
        )}
      </ul>
    </div>
  ) : (
    <Shimmer />
  );
};
