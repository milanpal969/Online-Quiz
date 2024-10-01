import React, { useEffect, useState } from 'react'


function LoadMore({limit,skip}) {


    const [products,setproducts] = useState([]);
    const [count,setcount] = useState(0);
    const [loading,setloading] = useState(false);
    const [error,seterror] = useState(null);

    useEffect(()=>{

        async function getData(){
            setloading(true);
            try{
            const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${limit*count}`);
            const data = await response.json();
            if(data){
                setproducts(data);
            }
            console.log(products);

        }catch(e){
            seterror(e.message);
            setloading(false);
           }
        }
        getData();
    },[])

    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>{error}</div>
    }
  return (
    <div>

        
    </div>
  )
}

export default LoadMore