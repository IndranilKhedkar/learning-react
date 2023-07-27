import { useState } from "react";
import { restaurants as restaurantList } from "../tools/restaurants";
import { RestaurantCard } from "./RestaurantCard";

export const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);

  const onClickTopRatedRestaurants = () => {
    const filterdRestaurants = restaurants.filter(
      (res) => res.info.avgRating >= 4
    );
    setRestaurants(filterdRestaurants);
  };

  const onClickSeeAllRestaurants = () => {
    setRestaurants(restaurantList);
  };

  return (
    <div className="body">
      <div className="body-btn-container">
        <button className="btn" onClick={onClickTopRatedRestaurants}>
          Top Rated Restaurants
        </button>
        <button className="btn" onClick={onClickSeeAllRestaurants}>
          See All Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            name={restaurant.info.name}
            cuisines={restaurant.info.cuisines}
            rating={restaurant.info.avgRatingString}
            deliveryTime={restaurant.info.deliveryTime}
            imageId={restaurant.info.cloudinaryImageId}
            costForTwo={restaurant.info.costForTwo}
          />
        ))}
      </div>
    </div>
  );
};
