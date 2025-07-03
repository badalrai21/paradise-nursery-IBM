// src/pages/ProductPage.jsx
import React from "react";
import "./ProductPage.css";
import products from "../data/products";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Header from "../components/Header";


function ProductPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);


  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <>
      <Header />
      <div className="product-page">
        <h2 className="product-heading">Our Houseplants</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
             <button
  className="add-btn"
  onClick={() => handleAddToCart(product)}
  disabled={cartItems.some((item) => item.id === product.id)}
>
  {cartItems.some((item) => item.id === product.id) ? "Added" : "Add to Cart"}
</button>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductPage;
