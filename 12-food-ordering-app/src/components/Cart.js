import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../tools/cartSlice";
import { RestaurantMenuItemList } from "./RestaurantMenuItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-3 p-4 text-center">
      <div className="font-bold">Cart</div>
      <button
        className="p-2 m-2 bg-blue-400 rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="w-9/12 m-auto">
        <RestaurantMenuItemList menuItems={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
