import React from "react";
import { MenuItem } from "./components/MenuItem";
import settings from "./assets/options-sharp.svg";
import account from "./assets/person-sharp.svg";
import orders from "./assets/document-text-sharp.svg";
import cart from "./assets/cart-sharp.svg";
import search from "./assets/search.svg";
import "./style.css";
export const Header = () => {
  return (
    <header className="header-root">
      <MenuItem onClick={() => {}} icon={settings} title="" />
      <div className="search-area">
        <div className="search">
          <input type="text" className="search-text-field" />
          <div className="search-button">
            <img src={search} className="search-icon" alt="search" />
          </div>
        </div>
      </div>
      <div className="right-actions">
        <MenuItem onClick={() => {}} icon={account} title="Account" />
        <MenuItem onClick={() => {}} icon={orders} title="Orders" />
        <MenuItem onClick={() => {}} icon={cart} title="Cart" badge />
      </div>
    </header>
  );
};
