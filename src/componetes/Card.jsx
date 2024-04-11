import React from 'react'
import UserDatails from './UserDatails'
import ButtonSection from './ButtonSection'
import "./Card.css"

const card = (props) => {
  const user = props.user 
  console.log(user)
  return (
    <div className="cuadro">
      {/*<UserDatails user={user}/>*/}
      <ButtonSection/>
    </div>
  )
}

export default card