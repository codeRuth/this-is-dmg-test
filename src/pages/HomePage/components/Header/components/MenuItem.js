import React from "react";
import "./style.css";
export const MenuItem = ({ icon, title, badge, onClick }) => {
  return (
    <div className="menu-item" onClick={onClick}>
      <span className={badge ? "badge" : ""}>
        {badge instanceof Boolean ? "" : badge}
      </span>
      <img src={icon} alt={title} className="icon" />
      <div className="menu-item-text">
        {title ? title : <span>&nbsp;</span>}
      </div>
    </div>
  );
};
