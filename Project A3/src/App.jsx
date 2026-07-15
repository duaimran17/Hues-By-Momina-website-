import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./Pages/home";
import About from "./Pages/about";
import Login from "./Pages/login";
import Product from "./Pages/product";
import ProductDetail from "./Pages/productdetail";
import Cart from "./Pages/cart";

// NOTE: Uncomment the line below ONLY after you actually create "crochetdetail.jsx" inside your "Pages" folder!
// import CrochetDetail from "./Pages/crochetdetail";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id);

      if (existing) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalBill = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <BrowserRouter>
      <Navbar cartCount={totalItems} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Product />} />

        <Route
          path="/productdetail"
          element={<ProductDetail addToCart={addToCart} />}
        />

        <Route
          path="/crochetdetail"
          /* 
            Using ProductDetail here temporarily so your app doesn't crash. 
            If you create "crochetdetail.jsx", change <ProductDetail /> to <CrochetDetail /> 
          */
          element={<ProductDetail addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              totalBill={totalBill}
            />
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;