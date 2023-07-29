import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";

export const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchRestaurants = async () => {
    const response = await (
      await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )
    ).json();
    const restaurants =
      response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const onClickTopRatedRestaurants = () => {
    const filterdRestaurants = restaurants.filter(
      (res) => res.info.avgRating >= 4
    );
    setFilteredRestaurants(filterdRestaurants);
  };

  const onClickSeeAllRestaurants = () => {
    setFilteredRestaurants(restaurants);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            value={searchText}
            type="text"
            className="search-box"
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button
            className="btn"
            onClick={() => {
              const filterdRestaurants = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filterdRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="body-btn-container">
          <button className="btn" onClick={onClickTopRatedRestaurants}>
            Top Rated Restaurants
          </button>
          <button className="btn" onClick={onClickSeeAllRestaurants}>
            See All Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              name={restaurant.info.name}
              cuisines={restaurant.info.cuisines}
              rating={restaurant.info.avgRatingString}
              deliveryTime={restaurant.info.deliveryTime}
              imageId={restaurant.info.cloudinaryImageId}
              costForTwo={restaurant.info.costForTwo}
            />
          ))
        )}
      </div>
    </div>
  );
};
