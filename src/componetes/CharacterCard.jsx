import React from 'react'
import CharacterDatails from './CharacterDetails'
import CharacterButton from './CharacterButton'
import "./CharacterCard.css"

const card = (props) => {
  const character = props.character;
  const socialLinks=character["social-links"];
  return (
    <div className="cuadro">
      {<CharacterDatails character={character}/>}
      <CharacterButton socialLinks={socialLinks}/>
    </div>
  )
}

export default card 