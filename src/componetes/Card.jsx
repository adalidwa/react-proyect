import React from 'react'
import UserDatails from './UserDatails'
import ButtonSection from './ButtonSection'
import "./Card.css"

const card = (props) => {
  const user = props.user;
  const socialLinks=user["social-links"];
  return (
    <div className="cuadro">
      {<UserDatails user={user}/>}
      <ButtonSection socialLinks={socialLinks}/>
    </div>
  )
}

export default card