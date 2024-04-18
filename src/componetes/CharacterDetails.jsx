import React from "react";
import "./CharacterDetails.css";

const CharacterDetails = ({ character }) => {
  return (
    <div>
      <div className="Imagen">
        <img src={character.image} alt={`avatar de ${character.name}`} />
      </div>
      <div className="titulo">
        <h2>{character.status}</h2>
        <p>{character.type}</p>
      </div>
    </div>
  );
};

export default CharacterDetails;
