import React from "react";
import UserDatails from "./UserDatails";
/* import ButtonSection from './ButtonSection' */
import "./Card.css";
import { NavLink } from "react-router-dom";

const card = ({character}) => {
  return (
    <NavLink to={`/CharacterCard?id=${character.id}`}>
      <div className="cuadro">
        {<UserDatails character={character} />}
        {/*    <ButtonSection socialLinks={socialLinks}/> */}
      </div>
    </NavLink>
  );
};

export default card;
