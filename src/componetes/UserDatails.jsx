import React, { useState, useEffect } from "react";
import "./UserDatails.css";
import avatarJessica from "../assets/avatar-jessica.jpeg";

const UserDatails = (props) => {
  
  //Der aqui empieza
  const [user, setUser] = useState({}) //valor inicial
   //esto es cuando cambie de estado
  setUser(props.user)
;
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
