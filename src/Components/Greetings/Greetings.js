import './Greetings.css'
import React from 'react'


function Greetings(props) {
  let {lang}  = props
  let greeting = ""

  if(lang ==="de"){
    greeting = "Hallo";
  } else if (lang === "en"){
    greeting = "Hello";
  }else if (lang === "es"){
    greeting = "Hola";
}else if (lang === "fr"){
    greeting = "Bonjour";
}

return (
    <div className='greetingCard'>
        <p>{greeting} {props.children}</p>
    </div>
);
}

export default Greetings;