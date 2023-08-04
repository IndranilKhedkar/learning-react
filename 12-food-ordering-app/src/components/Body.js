import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import { RestaurantCard, withPromotedLabel } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";

export const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

  return onlineStatus ? (
    <div className="m-6">
      <div className="flex justify-between mb-4">
        <div>
          <button
            className="px-4 py-1.5 bg-blue-200 mr-2 rounded-md"
            onClick={onClickTopRatedRestaurants}
          >
            Top Rated Restaurants
          </button>
          <button
            className="px-4 py-1.5 bg-blue-200 rounded-md"
            onClick={onClickSeeAllRestaurants}
          >
            See All Restaurants
          </button>
        </div>
        <div>
          <input
            value={searchText}
            type="text"
            className="border border-solid border-black rounded-md p-1"
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button
            className="px-4 py-1.5 bg-blue-200 ml-2 rounded-md"
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
      </div>
      <div className="flex flex-wrap gap-y-2">
        {filteredRestaurants?.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurants?.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}`}
            >
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted restaurant={restaurant.info} />
              ) : (
                <RestaurantCard restaurant={restaurant.info} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  ) : (
    <div>
      <h2>Seems like you are offline!</h2>
      <h2>Plese check your internet connection</h2>
    </div>
  );
};
