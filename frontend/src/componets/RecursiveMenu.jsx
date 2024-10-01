import React from 'react'
import { RecursiveData } from '../data' 
import RecursiveHelp from './RecursiveHelp'


function RecursiveMenu({list=[]}) {
  return (
    <ul>
        {
            list.length>0 ? 
            list.map((item,index)=><RecursiveHelp menu={item} key={index}/>)
            : null
        }
    </ul>
  )
}

export default RecursiveMenu