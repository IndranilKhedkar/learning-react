import { CDN_URL } from "../tools/constants";

export const RestaurantCard = ({
  name,
  cuisines,
  rating,
  deliveryTime,
  imageId,
  costForTwo,
}) => {
  return (
    <div className="mr-5 p-3 w-56 bg-slate-100 rounded-md hover:bg-slate-300">
      <img
        className="rounded-md"
        alt="restaurant-logo"
        src={`${CDN_URL}${imageId}`}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="py-1">{cuisines.join(", ")}</h4>
      <h4 className="py-1">Rating: {rating}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
