import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home';
import { useContext } from 'react';
import { GlobalContext } from './Context';

export default function  NavBar (){

    const [loading ,setloading] = useState(false);

    const {search,setsearch,data,setdata} = useContext(GlobalContext);

    async function fetchdata(e) {
    e.preventDefault();
        try{
            setloading(true);
            const response = await fetch(`https://dummyjson.com/recipes/search?q=${search}`);
            const res = await response.json();
            if(res.recipes){
                setloading(false);
                setdata(res.recipes);
                console.log(data);
            }
        }catch(e){
            setloading(false);
            console.log(e);
        }
        
    }
    
  return (
    <div>
    <div className='container6'>
        <div>
        <h2>
            <NavLink to={'/'} >FoodRecipe</NavLink>
        </h2>
        </div>
        <div>
            <form type='submit' onSubmit={fetchdata}>
            <input type='text' placeholder='type text' value={search} onChange={(e)=>{setsearch(e.target.value)}} />
            </form>
        </div>
        <div className='menu'>
            <div><NavLink to={'/fav'}>Favourite</NavLink></div>
            <div><NavLink to={'/details/:id'}>Details</NavLink></div>
        </div>


    </div>
        {
            loading ? <div style={{textAlign:"center",margin:"20px"}}>Loading...</div> : ''
        }
    

    </div>
  )
}


 