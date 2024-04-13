import React from "react";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
// import { Contact } from "./pages/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/shop-context";

const App = () => {
  return (
    <div className="w-[100%] h-auto min-h-[100vh] p-0 m-0">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
};

export default App;
