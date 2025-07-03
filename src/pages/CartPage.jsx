import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../redux/cartSlice";
import Header from "../components/Header";
import "./CartPage.css"; // You must create this CSS file

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <>
      <Header />
      <div className="cart-page">
        <h2>Shopping Cart</h2>
        <p>Total Plants: {totalQuantity}</p>
        <p>Total Price: ₹{totalPrice}</p>

        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>

              <div className="cart-buttons">
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity <= 1}>-</button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
              </div>
            </div>
          </div>
        ))}

        <div className="cart-actions">
          <button onClick={() => alert("Checkout Coming Soon!")}>Checkout</button>
          <a href="/products"><button>Continue Shopping</button></a>
        </div>
      </div>
    </>
  );
}

export default CartPage;
