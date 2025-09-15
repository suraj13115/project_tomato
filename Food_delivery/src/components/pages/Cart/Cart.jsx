import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  // calculate subtotal
  const subtotal = food_list.reduce((acc, item) => {
    return acc + item.price * (cartItems[item._id] || 0);
  }, 0);

  const deliveryFee = subtotal > 0 ? 2 : 0; // delivery fee logic
  const total = subtotal + deliveryFee;

  return (
    <div className="cart">
      <div className="cart-items">
        {/* Table Header */}
        <div className="cart-items-title">
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {/* Cart Items */}
        {food_list &&
          food_list.map((item) =>
            cartItems[item._id] > 0 ? (
              <div className="cart-items-item" key={item._id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>₹{item.price * cartItems[item._id]}</p>
                <p
                  className="cart-remove-btn"
                  onClick={() => removeFromCart(item._id)}
                >
                  x
                </p>
              </div>
            ) : null
          )}
      </div>

      {/* Cart Totals Section */}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{subtotal}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{deliveryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details total">
              <b>Total</b>
              <b>₹{total}</b>
            </div>
          </div>
          <button className="checkout-btn">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
