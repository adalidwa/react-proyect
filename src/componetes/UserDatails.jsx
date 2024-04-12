import React from "react";
import "./UserDatails.css";


const UserDatails = ({user}) => {
  
  return (
    <div>
      <div className="Imagen">
        <img src={user.avatar} alt={`avatar de ${user.name}`} />
      </div>
      <div className="titulo">
        <h2>{user.name}</h2>
        <h4>{user.location}</h4>
        <p>{user.descripcion}</p>
      </div>
    </div>
  );
};

export default UserDatails;
