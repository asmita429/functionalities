import React from "react";
import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="max-w-[100%] h-20 bg-gray-900 flex justify-end items-center">
      <div className="mr-[50px] flex items-center">
        <Link to="/" className="text-white ml-1 text-xl">
          Shop
        </Link>
        <Link to="/cart" className="text-white ml-1 text-xl">
          <IoIosCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
