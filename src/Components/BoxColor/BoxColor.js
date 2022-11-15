import './BoxColor.css'
import React from 'react'


function ColorBox(props) {
  let {r,g,b}  = props
  let color = {backgroundColor:`rgb(${r},${g},${b})`}
return (
    <div className="boxColorCont" style={color}>
        <p> rgb({r},{g},{b})</p>
    </div>
);
}

export default ColorBox;