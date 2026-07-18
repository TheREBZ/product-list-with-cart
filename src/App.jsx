import React, { useState, useEffect } from "react";
import productsData from "../data.json"; 
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import OrderModal from "./components/OrderModal";
import "./style.css";

function App() {
  // Use useState + localStorage for cart state management
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("product_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("product_cart", JSON.stringify(cart));
  }, [cart]);

  // Handler functions to manipulate cart state array
  const addToCart = (product) => {
    setCart((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  const updateQuantity = (productName, amount) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productName) => {
    setCart((prev) => prev.filter((item) => item.name !== productName));
  };

  const clearCart = () => {
    setCart([]);
    setIsModalOpen(false);
  };

  return (
    <div className="app-container" style={{ fontFamily: "'Red Hat Text', sans-serif", background: "hsl(20, 50%, 98%)", minHeight: "100vh", padding: "2rem" }}>
      <main style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", maxWidth: "1200px", margin: "0 auto" }} className="responsive-layout">
        <div>
          <h1 style={{ color: "hsl(14, 65%, 9%)", fontSize: "2.5rem", marginBottom: "1.5rem" }}>Desserts</h1>
          <ProductGrid products={productsData} cart={cart} addToCart={addToCart} updateQuantity={updateQuantity} />
        </div>
        <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} onConfirm={() => setIsModalOpen(true)} />
      </main>
      
      {isModalOpen && <OrderModal cart={cart} clearCart={clearCart} />}
    </div>
  );
}

export default App;
