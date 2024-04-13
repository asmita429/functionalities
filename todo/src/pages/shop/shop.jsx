import React from "react";
import { PRODUCTS } from "../../product";
import Product from "./Product";

const shop = () => {
  return (
    <div className="">
      <div className="mt-[50px] text-center">
        <h1 className="text-3xl font-bold">PedroTech Shop</h1>
      </div>
      <div className="w-[100%] h-auto grid grid-cols-3 items-center">
        {PRODUCTS.map((item) => (
          <Product data={item} />
        ))}
      </div>
    </div>
  );
};

export default shop;
