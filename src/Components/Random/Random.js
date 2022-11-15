import './Random.css'
import React from 'react'


function Random (props) {
  let {min,max}  = props
  let value = Math.floor((Math.random()*max)+min);
  return (
    <div className="randomCard">
        <p> Random value between {min} and {max} =>{value} </p>
    </div>
  )

}

export default Random;