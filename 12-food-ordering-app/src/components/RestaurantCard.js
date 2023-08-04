import { CDN_URL } from "../tools/constants";

export const RestaurantCard = ({ restaurant }) => {
  const {
    name,
    cuisines,
    avgRatingString,
    deliveryTime,
    cloudinaryImageId,
    costForTwo,
  } = restaurant;

  return (
    <div className="mr-4 p-2 w-56 bg-slate-100 rounded-md hover:bg-slate-300">
      <img
        className="rounded-md"
        alt="restaurant-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="py-1">{cuisines.join(", ")}</h4>
      <h4 className="py-1">Rating: {avgRatingString}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-900 text-white rounded-md m-2 p-1.5 text-xs">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
