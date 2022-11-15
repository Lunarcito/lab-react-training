import './IdCards.css'
import React from 'react'


function IdCard(props) {
  let {lastName,firstName,gender,height,birth,picture}  = props

  return (
    <div className="cont">
      
      <img className= "IdImg" src={picture} alt={firstName+lastName}></img>
 
      <div className="IdData">

      <p><span> First name:</span>{firstName}</p>
      <p><span> Last name:</span>{lastName}</p>
      <p><span> Gender:</span>{gender}</p>
      <p><span> Height:</span>{height}</p>
      <p><span> Birth:</span>{birth.toDateString()}</p>
      </div>
    </div>
  )
}

export default IdCard;