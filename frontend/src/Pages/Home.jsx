import React, { useEffect, useState } from 'react'
import { deleteBlog, getallData } from './ApiCalls'
import { useNavigate } from 'react-router-dom';



 function Home() {

    const [data,setdata] = useState([]);
    const [loading,setloading] = useState(false);
    const [error,seterror] = useState(null);
    const navigate = useNavigate();

    const handleEdit = (blog)=> {
      navigate('/add-blog', { state: { blog } });

    }
    

    const fetchData = async () =>{
        setloading(true);
        try{
        const response = await getallData();

        setloading(false);
        if(response.data && response.data.data){
            setdata(response.data.data);
        }
    }catch(e){
        seterror(e);
    }
    }

    const handleDelete = async(id) =>{
        setloading(true);
        
    try{
        const response = await deleteBlog({id});
        if(response){
            setloading(false);
            fetchData();
            console.log(response.data.message);
           
        }
    }catch(e){
        setloading(false);
        seterror(e);
    }

}

    useEffect(()=>{
 
        fetchData();
     

    },[]);


   

    if(loading){
        return <div>Loading...</div>
    }
    // if(error){
    //     return <div>{error.message}</div>
    // }
  return (
    <div style={{textAlign:"center"}}>
      {data.length > 0 ? (
        data.map((blog, index) => (
          <div key={index}>
            <h3>{blog.name}
                 <button onClick={()=>{handleDelete(blog._id)}} style={{cursor:"pointer"}}>delete</button>
                 <button style={{cursor:"pointer"}} onClick={()=>{handleEdit(blog)}} >edit</button>
            </h3>
            <p>{blog.title}</p>
            <p>{blog.description}</p>
            <img src={blog.imgUrl} alt={blog.title} style={{ width: '100px', height: '100px' }} />
            <p>{blog.createdAt}</p>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  )
}

export default Home;