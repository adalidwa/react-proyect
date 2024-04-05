import React from 'react'
import UserDatails from './UserDatails'
import ButtonSection from './ButtonSection'
import "./Card.css"

const card = () => {
  return (
    <div className="cuadro">
      <UserDatails/>
      <ButtonSection/>
    </div>
  )
}

export default card