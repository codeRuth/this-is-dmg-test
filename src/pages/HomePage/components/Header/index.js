import React from "react";
import { MenuItem } from "./components/MenuItem";
import settings from "./assets/options-sharp.svg";
import account from "./assets/person-sharp.svg";
import orders from "./assets/document-text-sharp.svg";
import cart from "./assets/cart-sharp.svg";
import search from "./assets/search.svg";
import "../../style.css";
import { useMediaQuery } from "../util";
export const Header = () => {
  const isTablet = useMediaQuery("(min-width: 768px)", true, false);

  return (
    <header className="header-root">
      <MenuItem onClick={() => {}} icon={settings} title="" />
      {isTablet ? (
        <div className="search-area">
          <div className="search">
            <input type="text" className="search-text-field" />
            <div className="search-button">
              <img src={search} className="search-icon" alt="search" />
            </div>
          </div>
        </div>
      ) : (
        <div style={{ flexGrow: 1, display: "flex" }}>
          <div
            className="search-button"
            style={{ marginTop: 8, marginLeft: "auto", marginRight: 8 }}
          >
            <img src={search} className="search-icon" alt="search" />
          </div>
        </div>
      )}
      <div className="right-actions">
        <MenuItem onClick={() => {}} icon={account} title="Account" />
        <MenuItem onClick={() => {}} icon={orders} title="Orders" />
        <MenuItem onClick={() => {}} icon={cart} title="Cart" badge />
      </div>
    </header>
  );
};
