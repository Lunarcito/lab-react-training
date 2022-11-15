import './CreditCard.css'
import React from 'react'
import visa from '../../assets/images/visa.png'
import masterCard from '../../assets/images/MasterCard.png'

function CreditCards(props) {
  let {type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}  = props
  
  
const backColor = {
  backgroundColor: bgColor,
  color:color
}

const last4Digits = number.slice(-4).padStart(number.length,"*");



  return (
  <div className="creditCardCont" style={backColor}>
    <div>
      {type ==="Visa" ? 
      <img className ="logo" src={visa} alt="visa"/> :<img className ="logo" src={masterCard} alt="masterCard"/>}
    </div>
    <div className="number">
        <p>{last4Digits}</p>
    </div>
    <div className ="cardText">
        <p>Expires:{expirationMonth}/{expirationYear}{bank}</p>
        <p>{owner}</p>
    </div>
   </div>
  
  )
}

export default CreditCards;