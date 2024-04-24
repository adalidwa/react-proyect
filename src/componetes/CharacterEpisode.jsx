import React, { useEffect, useState } from "react";
import "./CharacterEpisode.css";

function CharacterEpisode({ characterId }) {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        // Obtener información del personaje para encontrar los episodios en los que ha aparecido
        const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
        const characterData = await response.json();
        
        // Obtener los IDs de episodios en los que ha aparecido el personaje
        const episodeIds = characterData.episode.map((episodeUrl) => {
          const parts = episodeUrl.split('/');
          return parts[parts.length - 1];
        });

        // Limitar a obtener solo los primeros 5 episodios
        const limitedEpisodeIds = episodeIds.slice(0, 5);

        // Hacer una solicitud para obtener los detalles de los episodios
        const episodesData = await Promise.all(limitedEpisodeIds.map(id =>
          fetch(`https://rickandmortyapi.com/api/episode/${id}`).then(res => res.json())
        ));

        // Establecer los episodios en el estado
        setEpisodes(episodesData);
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    fetchEpisodes();
  }, [characterId]);

  return (
    <div className="Episodio_character">
      <h2>Episodios</h2>
      <div className="Episodios_character">
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
