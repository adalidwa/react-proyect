import React from 'react';
import CharacterDatails from './CharacterDetails';
import CharacterButton from './CharacterButton';
import CharacterEpisode from './CharacterEpisode';
import "./CharacterCard.css";

const Card = (props) => {
  const character = props.character;
  const socialLinks = character["social-links"];

  return (
    <div className="cuadro_character">
      <CharacterDatails character={character} />
      <CharacterEpisode characterId={character.id} />
      <CharacterButton socialLinks={socialLinks} />
    </div>
  );
}

export default Card;
