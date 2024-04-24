import React from "react";
import "./CharacterButton.css";
import { NavLink } from "react-router-dom";

const CharacterButton = () => {
  return (
    <div>
      <div className="botones_character">
        <NavLink to="/">
          <button>home</button>
        </NavLink>
      </div>
    </div>
  );
};
export default CharacterButton;
