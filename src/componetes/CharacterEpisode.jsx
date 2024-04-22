import React, { useEffect, useState } from "react";
import "./CharacterEpisode.css";

function CharacterEpisode({ character }) {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode/").then((res) => 
    res.json())
      .then((data) => {
        setEpisodes(data.results.slice(0, 5)); // Limitando a los primeros 5 episodios
      });
  }, []);

  return (
    <div className="Episodio">
      <h2>Episodios</h2>
      <div className="Episodios">
        {episodes.map((episode) => (
          <div key={episode.id}>
            <h4>{episode.name}</h4>
            <p>Episodio: {episode.episode}</p>
            <p>Air Date: {episode.air_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterEpisode;
