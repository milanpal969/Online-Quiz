import React, { useEffect, useState } from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill}  from 'react-icons/bs'


function ImageSlider({url,page=1,limit=5}) {


    const [loading, setloading] = useState(false);
    const [error,seterror] = useState(null);
    const [info,setinfo] = useState([]);
    const[slide,setslide] = useState(0);


    useEffect( ()=>{
            //we cannot use async directly in callback function of useEffect
        async function fetchData() {
            
        
        try{
            setloading(true);
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        const data = await response.json();

        if(data){
            setinfo(data);
            setloading(false);
        }
        
        }
        catch(e){
            seterror(e.message);
            setloading(false);
        }

    }
    fetchData();
    }
    ,[url])

    if(loading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>There is some error while fetching data {error}</div>
    }

  return (
    <div className='container'>
        {console.log(info)}
        <BsArrowLeftCircleFill className='arrow arrow-left' onClick={()=>{setslide(slide===0 ? info.length-1 : slide-1)}} />
        {
            info && info.length ? 
            info.map((image,index)=>(
                <img 
                key={index}
                src={image.download_url}
                className={slide===index ? "current-image" : "hide-image"}
                />
            ))
            :null
        }
        <BsArrowRightCircleFill className='arrow arrow-right' onClick={()=>{setslide(slide===info.length-1 ? 0 : slide+1)}} />
        <span className='circle-indicator'>
            {
            [...Array(info.length)].map((_,index)=>(
               <button key={index} onClick={()=>{setslide(index)}} className={slide===index ? "current-indicator" : "inactive-indicator"}>
                </button> 
            ))
            }
        </span>
    </div>
  )
}

export default ImageSlider