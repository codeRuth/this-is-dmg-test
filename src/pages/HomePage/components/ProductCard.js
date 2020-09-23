import React, { useState } from "react";
import "../style.css";
import stamp from "./assets/stamp.svg";
import cart from "./assets/cart.svg";
import inStock from "./assets/in-stock.svg";
import lowStock from "./assets/low-stock.svg";
import outOfStock from "./assets/out-of-stock.svg";

export const ProductCard = ({
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
  return variant === "featured" ? (
    <div>
      <div className="featured-title">
        <span>{featuredText}</span>
      </div>
      <div className="card-root">
        <div className="card-image">
          <img src={image} alt={name} />
        </div>
        <div className="card-detail">
          <span className="card-name">{name}</span>
          <div className="card-product">
            {stampShown ? (
              <img src={stamp} style={{ marginRight: 16 }} alt="stamp" />
            ) : (
              <></>
            )}
            <div className="card-detail-code">
              <p>{productCode}</p>
              <p>{productFor}</p>
            </div>
            <div className="card-detail-stock">
              <p>
                Stock{" "}
                <img
                  className="stock-status-icon"
                  src={getStockStatus(stock)}
                  alt="stock-status"
                />
              </p>
              <p>Price ₪{price}</p>
            </div>
            <div className="card-cart">
              <p>Total</p>
              <h4>₪{price * quantity}</h4>
            </div>
          </div>
          <div className="card-footer">
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
            <div style={{ display: "flex", flexShrink: 1 }}>
              <div className="add-to-card-button">
                <img src={cart} />
                <span>Add to Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
