import React, { useState } from 'react'
import RecursiveMenu from './RecursiveMenu'

function RecursiveHelp({menu}) {

  const [childrens,setchildrens] = useState({});


  function handleChildren(currentLabel){

      setchildrens({
      ...childrens,
      [currentLabel] : !childrens[currentLabel],
      })
  }
  return (
    <div>
        <li style={{display:'flex', gap:"5px"}}>{menu.label}
        {
          menu.Children && menu.Children.length > 0 ?
          <span onClick={()=>{handleChildren(menu.label)}}>{childrens[menu.label] ? "-" : "+" }</span>
          : null 
        }
        </li>
        {
           menu.Children && menu.Children.length > 0 && childrens[menu.label] ?
          <RecursiveMenu list={menu.Children} />
          : null
        }
    
    </div>
  )
}

export default RecursiveHelp