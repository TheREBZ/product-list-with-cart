import React from "react";

function Cart({ cart, removeFromCart, onConfirm }) {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "8px", height: "fit-content" }}>
      <h2 style={{ color: "hsl(14, 86%, 42%)", fontSize: "1.5rem", marginBottom: "1rem" }}>Your Cart ({totalItems})</h2>
      
      {cart.length === 0 ? (
        <div style={{ textAlign: "center", padding: "2rem 0" }}>
          <p style={{ color: "hsl(7, 20%, 60%)" }}>Your added items will appear here</p>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 0", borderBottom: "1px solid hsl(13, 31%, 94%)" }}>
              <div>
                <h4 style={{ color: "hsl(14, 65%, 9%)", margin: "0 0 0.5rem 0" }}>{item.name}</h4>
                <div style={{ display: "flex", gap: "1rem", fontSize: "0.9rem" }}>
                  <span style={{ color: "hsl(14, 86%, 42%)", fontWeight: "700" }}>{item.quantity}x</span>
                  <span style={{ color: "hsl(7, 20%, 60%)" }}>@ ${item.price.toFixed(2)}</span>
                  <span style={{ color: "hsl(12, 20%, 44%)", fontWeight: "600" }}>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.name)} style={{ background: "transparent", border: "1px solid hsl(14, 25%, 72%)", borderRadius: "50%", width: "20px", height: "20px", cursor: "pointer", color: "hsl(7, 20%, 60%)" }}>X</button>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "1.5rem 0", fontWeight: "700" }}>
            <span>Order Total</span>
            <span style={{ fontSize: "1.5rem", color: "hsl(14, 65%, 9%)" }}>${totalPrice.toFixed(2)}</span>
          </div>
          <button onClick={onConfirm} style={{ width: "100%", background: "hsl(14, 86%, 42%)", color: "#fff", border: "none", padding: "1rem", borderRadius: "24px", fontWeight: "600", cursor: "pointer" }}>
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
