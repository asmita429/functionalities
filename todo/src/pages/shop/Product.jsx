import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const Product = (props) => {
  const { id, name, price, img } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="w-auto h-auto m-10 bg-gray-200 rounded-2xl">
      <div className=" bg-emerald-700 rounded-xl m-2 flex items-center justify-center">
        <img src={img} alt="" className="w-auto h-[200px] bg-cover" />
      </div>
      <div className="text-center m-3 ">
        <p className="font-bold">{name}</p>
        <p className="font-bold">${price}</p>
        <button
          onClick={() => addToCart(id)}
          className="bg-emerald-400 rounded-xl min-w-20 p-2 m-2 hover:bg-gray-900 hover:text-white cursor-pointer"
        >
          Add to cart{cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
