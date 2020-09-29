import React, { useState } from "react";
import "../style.css";
import stamp from "./assets/stamp.svg";
import cart from "./assets/cart.svg";
import inStock from "./assets/in-stock.svg";
import lowStock from "./assets/low-stock.svg";
import outOfStock from "./assets/out-of-stock.svg";
import notifBell from "./assets/notifications-sharp.svg";
import { useMediaQuery } from "./util";

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
  // const isTablet = useMediaQuery("(min-width: 768px)", true, false);
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
      <div className="card-root-container">
        <div className="card-root">
          <div className="card-image" >
            <img src={image} alt={name} />
          </div>
          <div className="card-detail">
            <span className="card-name">{name}</span>
            <div className="card-product">
              {stampShown ? <img src={stamp} alt="stamp" style={{marginRight: 16}} /> : <></>}
              <div className="card-detail-code">
                <p>{productCode}</p>
                <p>{productFor}</p>
              </div>
              <div className="break" />
              <div className="card-detail-stock">
                <p>
                  Stock
                  <img
                    className="stock-status-icon"
                    src={getStockStatus(stock)}
                    alt="stock-status"
                  />
                </p>
                <p>
                  Price <span>₪{price}</span>
                </p>
                <p>
                  Total
                  <span
                    style={{ fontWeight: "bold", fontSize: 16, marginTop: 0 }}
                  >
                    ₪{price * quantity}
                  </span>
                </p>
              </div>
              <div className="card-detail-stock-wide">
                <p>
                  Stock
                  <img
                    className="stock-status-icon"
                    src={getStockStatus(stock)}
                    alt="stock-status"
                  />
                </p>
                <p>
                  Price <span>₪{price}</span>
                </p>
              </div>

              <div className="card-cart">
                <p style={{ marginBottom: 4 }}>Total</p>
                <p style={{ fontWeight: "bold", fontSize: 16 }}>
                  ₪{price * quantity}
                </p>
              </div>
            </div>
            <div className="break" />
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
              <div>
                <div
                  className={`add-to-card-button ${
                    stock === 0 ? "out-of-stock" : ""
                  }`}
                >
                  <img alt="icon" src={stock === 0 ? notifBell : cart} />
                  <span>{stock === 0 ? "Notify Me" : "Add to Cart"}</span>
                </div>
              </div>
            </div>
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
          <div style={{display: "flex", flexDirection: "row-reverse", flexGrow: 1}}>
            <div
                className={`add-to-card-button ${
                    stock === 0 ? "out-of-stock" : ""
                }`}
            >
              <img alt="icon" src={stock === 0 ? notifBell : cart} />
              <span>{stock === 0 ? "Notify Me" : "Add to Cart"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
