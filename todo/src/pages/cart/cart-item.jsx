import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const CartItem = (props) => {
  const { id, name, price, img } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <div className="w-[400px] h-auto m-10 bg-gray-200 rounded-2xl">
      <div className=" bg-emerald-700 rounded-xl m-2 flex items-center justify-center">
        <img src={img} alt="" className="w-auto h-[200px] bg-cover" />
      </div>
      <div className="text-center m-3 ">
        <p className="font-bold">{name}</p>
        <p className="font-bold">${price}</p>
        <div>
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            className="w-8 text-center"
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
