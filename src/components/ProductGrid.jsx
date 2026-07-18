import React from "react";

function ProductGrid({ products, cart, addToCart, updateQuantity }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1.5rem" }}>
      {products.map((product) => {
        const cartItem = cart.find((item) => item.name === product.name);
        const isInCart = !!cartItem;

        return (
          <div key={product.name} style={{ background: "#fff", borderRadius: "8px", overflow: "hidden", padding: "1rem" }}>
            <div style={{ position: "relative" }}>
              <img 
                src={product.image.desktop} 
                alt={product.name} 
                style={{ width: "100%", borderRadius: "8px", border: isInCart ? "2px solid hsl(14, 86%, 42%)" : "none" }} 
              />
              
              {/* Toggle rendering behavior for additive buttons */}
              {!isInCart ? (
                <button 
                  onClick={() => addToCart(product)}
                  style={{ position: "absolute", bottom: "-18px", left: "50%", transform: "translateX(-50%)", background: "#fff", border: "1px solid hsl(14, 25%, 72%)", padding: "0.5rem 1.5rem", borderRadius: "20px", fontWeight: "600", cursor: "pointer", display: "flex", gap: "0.5rem", alignItems: "center" }}
                >
                  Add to Cart
                </button>
              ) : (
                <div style={{ position: "absolute", bottom: "-18px", left: "50%", transform: "translateX(-50%)", background: "hsl(14, 86%, 42%)", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center", width: "120px", padding: "0.5rem 1rem", borderRadius: "20px" }}>
                  <button onClick={() => updateQuantity(product.name, -1)} style={{ background: "transparent", border: "none", color: "#fff", cursor: "pointer", fontWeight: "bold" }}>-</button>
                  <span>{cartItem.quantity}</span>
                  <button onClick={() => updateQuantity(product.name, 1)} style={{ background: "transparent", border: "none", color: "#fff", cursor: "pointer", fontWeight: "bold" }}>+</button>
                </div>
              )}
            </div>
            <div style={{ marginTop: "2rem" }}>
              <span style={{ color: "hsl(7, 20%, 60%)", fontSize: "0.85rem" }}>{product.category}</span>
              <h3 style={{ color: "hsl(14, 65%, 9%)", fontSize: "1rem", margin: "0.25rem 0" }}>{product.name}</h3>
              <span style={{ color: "hsl(14, 86%, 42%)", fontWeight: "700" }}>${product.price.toFixed(2)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductGrid;
