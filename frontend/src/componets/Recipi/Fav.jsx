import React, { useContext } from 'react'
import { GlobalContext } from './Context';

function Fav() {

  const {favourite} = useContext(GlobalContext);

  return (
    <div >
      {
        // favourite.map((item,index)=>(
        //   <div style={{}}>
        //     <img style={{height:"300px", width:"300px"}} src={item.image} alt="" />
        //     <div className='information'>
        //       {item.name}
        //       </div>
        //       <button >Remove from Fav</button>
        //   </div>
        // ))
      }

    </div>
  )
}

export default Fav