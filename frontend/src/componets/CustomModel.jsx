import React, { useState } from 'react'
import CustomModelHelper from './CustomModelHelper';

function CustomModel() {

    const [show,setshow] = useState(false);

  return (
    <div>

    <button onClick={()=>{setshow(!show)}}>open Model</button>
    {show===true ? <CustomModelHelper close={()=>{setshow(false)}} header={"Milan"} /> : ''}

    </div>
  )
}

export default CustomModel