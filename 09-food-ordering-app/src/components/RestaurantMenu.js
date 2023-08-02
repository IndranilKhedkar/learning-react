import { useParams } from "react-router-dom";
import { useRestaurant } from "../hooks/useRestaurant";
import { Shimmer } from "./Shimmer";

export const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const restaurant = useRestaurant(restaurantId);

  if (!restaurant) {
    return <Shimmer />;
  }

  const { name, avgRatingString, costForTwoMessage, cuisines } =
    restaurant?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

  return (
    <div className="body">
      <h2>{name}</h2>
      <h5>Rating: {avgRatingString}</h5>
      <h5>Cost for two: {costForTwoMessage}</h5>
      <h5>Cusines: {cuisines?.join(", ")}</h5>
      <h3>Menu</h3>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.{" "}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
