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
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        alt="restaurant-logo"
        src={`${CDN_URL}${imageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating: {rating}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
