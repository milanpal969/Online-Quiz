import React from 'react'
import { data } from "../data"
import { useState } from 'react';
function Accordation() {
    const [open, setopen] = useState(null);
    const [enable ,setenable] = useState(false);
  
  
    function handleMultiMode(){
      setenable(!enable);
    }
  
    return (
      <>
      <div className="wrapper">
  
      {data.length>0 ? 
      <div className="pp">
        <button onClick={handleMultiMode}>{enable==true ? "Disable multi-mode" : "Enable multi-mode" }</button>
        { data.map(data=><div className="question" onClick={()=>{setopen(data.id===open ? null : data.id)}}>
          <h2>{data.q} <span>+</span>
          </h2>
                {open===data.id ? 
                <div>{data.ans}</div> : null
              }
         </div>
      )}
     </div>
     : <div> No data is Present </div>
      }
      
      </div>
        
  
      <div>
  
        
      </div>
  
  
      </>
    )
}

export default Accordation