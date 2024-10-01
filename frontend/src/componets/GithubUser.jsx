import React, { useEffect, useState } from 'react'

function GithubUser() {


    const [data,setdata] = useState([]);
    const [username,setusername] = useState('');
    const [loading,setloading] = useState(false);
    const [error,seterror] = useState(null);

 async function handleSubmit(){
    setloading(true);
    try{
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        if(data){
            setloading(false);
            setdata(data);
        }
    }catch(e){
        setloading(false);
        seterror(e.message);
    }
}
 
if(error){
    return <div>{error}</div>
}
      


  return (
    <div>

        <input type='text'  praceholder='enter username' onChange={(e)=>{setusername(e.target.value)}} />
        <button onClick={handleSubmit}>Submit</button>
        {
            loading===true ? "Loading..." :
            console.log(data)
        }
    </div>
  )
}

export default GithubUser