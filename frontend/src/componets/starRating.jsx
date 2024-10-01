import React, { useState } from 'react'
import  {FaStar} from 'react-icons/fa'


function StarRating({stars}) {

    const [rating,setindex] = useState(-1);
    const [hover,sethover] = useState(-1);

    function handleclick(idx){
        console.log(idx);
        setindex(idx);
    }
    function handlehover(idx){
        sethover(idx);
    }
    function handleleave(){
        sethover(rating);
    }

  return (
    <div>
        {
            [...Array(stars)].map((_,index)=>(
                <FaStar
                className= {(index<=hover || index<=rating) ? "active" : "inactive"}
                key={index}
                onClick={()=>{handleclick(index)}}
                onMouseMove={()=>{handlehover(index)}}
                onMouseLeave={handleleave}
                size={40}
                />
            ))

}

    </div>
  )
}

export default StarRating