import React, { useEffect, useState } from 'react'

function CustomScroll({url}) {

    const [info,setinfo] = useState([]);
    const [loading,setloading] = useState(false);
    const [error,seterror] = useState(null);
    const [scrollP,setscrollP] = useState(0);


    function handleScroll(){
        

        const howMuchScrolledFromTop = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        setscrollP((howMuchScrolledFromTop/height)*100);
        
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return ()=>{
        window.removeEventListener('scroll',()=>{})
        }
    },[])


    useEffect(()=>{

        const fetchData = async () => {
            setloading(true);
            try{
            const response = await fetch(url);
            const data = await response.json();
            if(data ){
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
    },[url]);

    if(loading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>{error}</div>
    }
    
   
  return (
    <div className='container2'>
        <div className='bar' style={{width:`${scrollP}%`,backgroundColor:"red"}}></div>
        {console.log(scrollP)}
            {info.map((items)=>(<p>{items.movie}</p>))}
        
    </div>
  )
}

export default CustomScroll