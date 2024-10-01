import React, { useState } from 'react'
import { Tabdata } from '../data'

function TabSwitch() {


    const [current,setcurrent] = useState(0);
  return (
    <div>

        {
            Tabdata.map((tab,index)=><div onClick={()=>{setcurrent(index)}}>{tab.label}</div>)
        }
        <div>
            {Tabdata[current].content}
        </div>
    </div>
  )
}

export default TabSwitch