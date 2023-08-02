import { CDN_URL } from "../tools/constants";

export const RestaurantMenuItemList = ({ menuItems }) => {
  return (
    <div>
      <ul>
        {menuItems.map((mi) => (
          <li
            key={mi?.card?.info?.id}
            className="p-4 m-4 h-40 shadow-lg text-left flex justify-between"
          >
            <div className="w-10/12 pr-3">
              <p className="font-bold text-lg">{mi?.card?.info?.name}</p>
              <p className="text-md">
                ₹{" "}
                {mi?.card?.info?.price
                  ? mi?.card?.info?.price / 100
                  : mi?.card?.info?.defaultPrice / 100}
              </p>
              <p className="text-sm">{mi?.card?.info?.description}</p>
            </div>
            <div className="w-2/12">
              <div className="absolute">
                <button className="shadow-md bg-slate-100 p-2 w-24 rounded-md mx-8 my-24 font-semibold text-md text-green-600">
                  Add
                </button>
              </div>
              <img
                className="rounded-md w-full h-full"
                alt="item-logo"
                src={`${CDN_URL}${mi?.card?.info?.imageId}`}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
