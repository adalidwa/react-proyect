import React from "react";
import "./UserDatails.css";

const UserDatails = ({ character }) => {
  return (
    <div>
      <div className="Imagen">
        <img src={character.image} alt={`avatar de ${character.name}`} />
      </div>
      <div className="titulo">
        <h2>{character.name}</h2>
        <h4>{character.status}</h4>
        <p>{character.species}</p>
      </div>
    </div>
  );
};

export default UserDatails;
