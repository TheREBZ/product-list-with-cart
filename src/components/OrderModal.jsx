import React from "react";

function OrderModal({ cart, clearCart }) {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }}>
      <div style={{ background: "#fff", padding: "2rem", borderRadius: "12px", maxWidth: "500px", width: "90%", maxHeight: "85vh", overflowY: "auto" }}>
        <h2 style={{ color: "hsl(14, 65%, 9%)", fontSize: "2rem", margin: "0 0 0.5rem 0" }}>Order Confirmed</h2>
        <p style={{ color: "hsl(7, 20%, 60%)", marginBottom: "1.5rem" }}>We hope you enjoy your food!</p>
        
        <div style={{ background: "hsl(20, 50%, 98%)", padding: "1rem", borderRadius: "8px" }}>
          {cart.map((item) => (
            <div key={item.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 0", borderBottom: "1px solid hsl(13, 31%, 94%)" }}>
              <div>
                <h4 style={{ margin: "0 0 0.25rem 0", fontSize: "0.95rem" }}>{item.name}</h4>
                <span style={{ color: "hsl(14, 86%, 42%)", marginRight: "1rem", fontWeight: "700" }}>{item.quantity}x</span>
                <span style={{ color: "hsl(7, 20%, 60%)" }}>@ ${item.price.toFixed(2)}</span>
              </div>
              <span style={{ fontWeight: "600" }}>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem", fontWeight: "700" }}>
            <span>Order Total</span>
            <span style={{ fontSize: "1.25rem" }}>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <button onClick={clearCart} style={{ width: "100%", background: "hsl(14, 86%, 42%)", color: "#fff", border: "none", padding: "1rem", borderRadius: "24px", fontWeight: "600", marginTop: "1.5rem", cursor: "pointer" }}>
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default OrderModal;
