import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from './Context'
import { NavLink } from 'react-router-dom';

function Home() {

  const {data,favourite,setfavourites} = useContext(GlobalContext);

  return (
    <div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>

      {
        data.map((item,index)=>(
          <div style={{}}>
            <img style={{height:"300px", width:"300px"}} src={item.image} alt="" />
            <div className='information'>
              {item.name}
              </div>
              <NavLink to={`/details/${item.name}`} >View Details</NavLink>
              <button onClick={()=>(setfavourites(...favourite,item))}>Add to Fav</button>
          </div>
        ))
      }

    </div>
  )
}

export default Home