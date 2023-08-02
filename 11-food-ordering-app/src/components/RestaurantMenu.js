import { RestaurantMenuItemList } from "./RestaurantMenuItemList";

export const RestaurantMenu = ({
  index,
  restaurantMenu,
  showMenuItems,
  setShowMenuItems,
}) => {
  const menu = restaurantMenu?.card?.card;

  return (
    <div>
      <div className="p-3 mb-3 bg-gray-100 shadow-lg">
        <div
          className="flex justify-between"
          onClick={() => setShowMenuItems(index)}
        >
          <span className="m-2 font-bold text-xl">
            {menu?.title} ({menu?.itemCards?.length})
          </span>
          <div className="p-2">
            {showMenuItems ? <span>△</span> : <span>▽</span>}
          </div>
        </div>
        {showMenuItems && (
          <RestaurantMenuItemList menuItems={menu?.itemCards} />
        )}
      </div>
    </div>
  );
};
