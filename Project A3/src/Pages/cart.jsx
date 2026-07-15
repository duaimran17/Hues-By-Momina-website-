import React from "react";

function Cart({ cart, removeFromCart, totalBill }) {
  if (cart.length === 0) {
    return (
      <div className="container mt-5 pt-5 text-center">
        <h3>Your cart is empty 🧺</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5 pt-5">
      <h2 className="section-title text-pink mb-4">Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-between align-items-center border-bottom py-3"
        >
          <div>
            <h6 className="mb-1">{item.name}</h6>
            <small>
              Rs. {item.price} × {item.quantity}
            </small>
          </div>

          <div className="text-end">
            <p className="fw-bold mb-1">
              Rs. {item.price * item.quantity}
            </p>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h4 className="text-end mt-4">
        Total Bill: Rs. {totalBill}
      </h4>

      <button className="btn btn-pink w-100 mt-3">
        Checkout
      </button>
    </div>
  );
}

export default Cart;
