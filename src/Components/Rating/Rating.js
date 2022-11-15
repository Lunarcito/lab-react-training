import './Rating.css'
import React from 'react'


function Rating(props) {
    let rate  = props.children
    let stars = ""
  
    if(rate <0.5){
      stars = "☆☆☆☆☆";
    } else if (rate>= 0.5 && rate < 1.5){
      stars = "★☆☆☆☆";
    } else if (rate>= 1.5 && rate < 2.5){
        stars = "★★☆☆☆";
    }else if (rate>= 2.5 && rate < 3.5){
        stars = "★★★☆☆";
    } else if (rate>= 3.5 && rate < 4.5){
        stars = "★★★★☆";
    } else if (rate>= 4.5){
        stars = "★★★★★";
  }
  
  return (
      <div className="stars">
          <p>{stars}</p>
      </div>
  );
  }
  
  export default Rating;

