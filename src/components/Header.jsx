// src/components/Header.jsx
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

function Header() {
  const totalItems = useSelector((state) => state.cart.totalCount);

  return (
    <header className="header">
      <Link to="/" className="logo">🌿 Paradise Nursery</Link>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">
          🛒 <span className="cart-count">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
