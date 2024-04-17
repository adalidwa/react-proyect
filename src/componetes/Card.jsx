import React from 'react'
import UserDatails from './UserDatails'
import ButtonSection from './ButtonSection'
import "./Card.css"

const card = (props) => {
  const character = props.character;
  const socialLinks=character["social-links"];
  return (
    <div className="cuadro">
      {<UserDatails character={character}/>}
      <ButtonSection socialLinks={socialLinks}/>
    </div>
  )
}

export default card