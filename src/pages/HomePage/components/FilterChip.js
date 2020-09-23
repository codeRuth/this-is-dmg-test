import React from "react";
import close from "./assets/close.svg";
import "../style.css";
export const FilterChip = ({ name, id }) => {
  return (
    <div className="chip">
      <span>{name}</span>
      <img onClick={() => console.log(id)} src={close} alt="close" />
    </div>
  );
};
