import React from "react";
import RickandMortyApp from "../RickandMortyApp";
import Home from "../componetes/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Navegacion = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/CharacterCard" element={<RickandMortyApp/>}/>
        <Route path="/*" element= {<p>Error 404 Recurso no encontrado</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navegacion;
