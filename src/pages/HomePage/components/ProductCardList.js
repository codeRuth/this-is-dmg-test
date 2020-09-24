import React, { useState } from "react";
import "../style.css";
import stamp from "./assets/stamp.svg";
import cart from "./assets/cart.svg";
import inStock from "./assets/in-stock.svg";
import lowStock from "./assets/low-stock.svg";
import outOfStock from "./assets/out-of-stock.svg";
import notifBell from "./assets/notifications-sharp.svg";
export const ProductCardList = ({
  variant,
  featuredText,
  image,
  id,
  name,
  price,
  stock,
  productCode,
  productFor,
  stampShown,
}) => {
  const [quantity, setQuantity] = useState(1);

  const getStockStatus = (stock_val) => {
    if (stock_val > 10) return inStock;
    else if (stock_val > 0 && stock_val < 10) {
      return lowStock;
    } else {
      return outOfStock;
    }
  };

  return (
    <div>
      <div className="list-item-root">
        <div className="card-detail">
          <span className="card-name">{name}</span>
          {stampShown ? (
            <img
              src={stamp}
              style={{ marginRight: 16, width: 42 }}
              alt="stamp"
            />
          ) : (
            <></>
          )}
          <div className="card-detail-code">
            <p>{productCode}</p>
            <p>{productFor}</p>
          </div>
          <div
            className="card-detail-stock"
          >
            <p>
              Stock
              <img
                className="stock-status-icon"
                src={getStockStatus(stock)}
                alt="stock-status"
              />
            </p>
            <p
              style={
                stock > 0 && stock < 10
                  ? { fontWeight: "bold" }
                  : stock === 0
                  ? { fontWeight: "bold", color: "#8E1216" }
                  : {}
              }
            >
              {stock > 0 && stock < 10
                ? `${stock} Tires Left`
                : stock === 0
                ? "Back in 1 week!"
                : ""}
            </p>
          </div>
          <div className="card-detail-price">
            <p>Price ₪{price}</p>
          </div>
          <div className="cart-quantity-rocker">
            <span
              onClick={() =>
                setQuantity((quantity) =>
                  quantity === 1 ? quantity : quantity - 1
                )
              }
              className="rocker"
            >
              -
            </span>
            <span className="quantity">{quantity}</span>
            <span
              onClick={() => setQuantity((quantity) => quantity + 1)}
              className="rocker"
            >
              +
            </span>
          </div>
          <div className="card-cart">
            <p>
              Total<span>₪{price * quantity}</span>
            </p>
          </div>
          <div className="add-to-cart-container">
            <div
              className={`add-to-card-button ${
                stock === 0 ? "out-of-stock" : ""
              }`}
            >
              <img alt="stock-status" src={stock === 0 ? notifBell : cart} />
              <span>{stock === 0 ? "Notify Me" : "Add to Cart"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
