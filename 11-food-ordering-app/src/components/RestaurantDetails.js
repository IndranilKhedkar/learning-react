import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRestaurant } from "../hooks/useRestaurant";
import { RestaurantMenu } from "./RestaurantMenu";
import { Shimmer } from "./Shimmer";

export const RestaurantDetails = () => {
  const { restaurantId } = useParams();
  const [showMenuItemsIndex, setShowMenuItemsIndex] = useState(0);
  const restaurant = useRestaurant(restaurantId);

  if (!restaurant) {
    return <Shimmer />;
  }

  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
  } = restaurant?.data?.cards[0]?.card?.card?.info;

  const restaurantMenuCategories =
    restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="my-4 p-1 mx-auto w-8/12">
      <div className="flex justify-between">
        <div>
          <p className="font-bold my-1 text-2xl">{name}</p>
          <p className="my-1 text-sm">Cusines: {cuisines?.join(", ")}</p>
          <p className="text-sm">{costForTwoMessage}</p>
        </div>
        <div className="border border-solid border-gray-400 rounded-md p-1 m-3 text-center font-normal text-slate-700">
          <span>⭐️ {avgRatingString}</span>
          <hr className="m-1" />
          <span className="text-xs">{totalRatingsString}</span>
        </div>
      </div>
      <hr className="border border-dashed my-3" />
      <div className="mt-9">
        {restaurantMenuCategories.map((restaurantMenu, index) => (
          <RestaurantMenu
            index={index}
            restaurantMenu={restaurantMenu}
            showMenuItems={showMenuItemsIndex === index}
            setShowMenuItems={() => {
              index !== showMenuItemsIndex
                ? setShowMenuItemsIndex(index)
                : setShowMenuItemsIndex(-1);
            }}
          />
        ))}
      </div>
    </div>
  );
};
