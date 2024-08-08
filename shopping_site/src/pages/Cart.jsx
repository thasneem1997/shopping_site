import React, { useContext } from "react";
import { Storecontext } from "../context/Storecontext";
import "./Cart.css";

function Cart() {
  const { removeFromCart, clearCart, cart } = useContext(Storecontext);

  return (
    <div className="container">
      <br />
      <br />
      <br />
      {cart.length === 0 ? (
        <h4>Your Cart is empty</h4>
      ) : (
        <>
          <h3>Shopping Cart</h3>
          <br />
          <div className="row mb-3">
            {cart.map((item) => (
              <div
                className="col-12 d-flex align-items-center mb-2"
                key={item.id}
                style={{ borderBottom: "0.2px solid #ebe0e0" }}
              >
                <div className="col-md-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "50px", marginRight: "10px"}}
                  />
                </div>
                <div className="col-md-6">
                  <p>
                    {item.title} - ${item.price} - {item.quantity}
                  </p>
                </div>
                <div className="col-md-2 text-center">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn-style"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <br />
          <button onClick={clearCart} className="btn-style2">
            Clear Cart
          </button> <br />
        
        </>
      )}
       
    </div>
    
  );
}

export default Cart;
