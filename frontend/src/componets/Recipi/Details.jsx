import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {

  
  const param = useParams();
  const [data,setdata] = useState([]);
  const [loading,setloading] = useState(false);

  console.log(param);

  useEffect(()=>{

      const fetchdata = async () => {
        setloading(true);
        try{
          const response = await fetch(`https://dummyjson.com/recipes/search?q=${param.id}`);
          const info = await response.json();
          if(info.recipes){
            setloading(false);
            setdata(info.recipes);
            console.log(data,info);
          }
        }catch(e){
          setloading(false);
          console.log(e);
        }
      }
      fetchdata();
  },[]);

  return (

    <div >
      {loading ? <div> Loading... </div> :
        data.map((item,index)=>(
          <div style={{display:"flex",gap:"20px"}}>
            <img src={item.image} style={{height:"80vh",width:"40vw"}}/>
          </div>
        ))
        
      }
    </div>
  )
}

export default Details